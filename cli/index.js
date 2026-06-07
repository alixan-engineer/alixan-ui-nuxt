#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, '..');
const [, , command, componentName, ...flags] = process.argv;
const shouldForce = flags.includes('--force') || flags.includes('-f');

// Resolve project root (Nuxt app)
const resolveProjectRoot = () => {
	const candidates = [
		process.env.INIT_CWD,
		process.env.npm_config_local_prefix,
		process.cwd(),
	].filter(Boolean);
	for (const c of candidates) {
		const resolved = path.resolve(c);
		if (fs.existsSync(resolved)) return resolved;
	}
	return process.cwd();
};

const projectRoot = resolveProjectRoot();

// Utils
const readJson = filePath => JSON.parse(fs.readFileSync(filePath, 'utf8'));

const fileExists = filePath => fs.existsSync(filePath);

const ensureDir = filePath =>
	fs.mkdirSync(path.dirname(filePath), { recursive: true });

// Load registry item
const getRegistryEntry = name => {
	const filePath = path.resolve(packageRoot, 'registry', `${name}.json`);
	return fileExists(filePath) ? readJson(filePath) : null;
};

const findComponentPath = file => {
	const componentsRoot = path.resolve(packageRoot, 'app/components/ui');

	if (!fileExists(componentsRoot)) {
		return null;
	}

	const stack = [componentsRoot];

	while (stack.length) {
		const current = stack.pop();
		const entries = fs.readdirSync(current, { withFileTypes: true });

		for (const entry of entries) {
			const entryPath = path.join(current, entry.name);

			if (entry.isDirectory()) {
				stack.push(entryPath);
				continue;
			}

			if (entry.isFile() && entry.name === file) {
				return path.relative(packageRoot, entryPath);
			}
		}
	}

	return null;
};

const resolveRegistryFile = (type, file, name) => {
	switch (type) {
		case 'components':
			return findComponentPath(file) ?? `app/components/ui/${name}/${file}`;
		case 'composables':
			return `app/composables/${file}`;
		case 'config':
			return `app/config/${file}`;
		case 'plugins':
			return `app/plugins/${file}`;
		case 'types':
			return `app/types/${file}`;
		case 'utils':
			return `app/utils/${file}`;
		default:
			return `app/${file}`;
	}
};

// Copy file
const copyFile = target => {
	const sourcePath = path.resolve(packageRoot, target);
	const targetPath = path.resolve(projectRoot, target);

	if (!fileExists(sourcePath)) {
		throw new Error(`Missing registry file: ${target}`);
	}

	if (fileExists(targetPath) && !shouldForce) {
		console.log(`Skipped: ${target} already exists (use --force)`);
		return;
	}

	ensureDir(targetPath);
	fs.copyFileSync(sourcePath, targetPath);

	console.log(`Created: ${target}`);
};

// Install component
const addComponent = name => {
	const entry = getRegistryEntry(name);
	if (!entry) {
		console.error(`Component "${name}" not found in registry.`);
		return;
	}

	for (const key of [
		'components',
		'composables',
		'config',
		'plugins',
		'types',
		'utils',
	]) {
		for (const file of entry[key] ?? []) {
			const target = resolveRegistryFile(key, file, name);
			copyFile(target);
		}
	}

	console.log(`\nDone. Added ${name}`);
};

// List registry
const listComponents = () => {
	const registryPath = path.resolve(packageRoot, 'registry');
	if (!fileExists(registryPath)) {
		console.log('No registry found.');
		return;
	}
	const items = fs.readdirSync(registryPath);
	console.log('Available components:');
	for (const item of items) {
		const filePath = path.join(registryPath, item);
		if (!fileExists(filePath)) continue;
		const json = readJson(filePath);
		console.log(`- ${json.name}`);
	}
};

// Help
const printHelp = () => {
	console.log('Alixan UI CLI\n');
	console.log('Commands:');
	console.log('  add <component>      Install component');
	console.log('  list                 List components');
	console.log('  add <component> --force  Force overwrite');
	console.log('\nExample:');
	console.log('  npx alixan-ui-nuxt add toast');
	console.log(`\nProject root: ${projectRoot}`);
};

// Router
switch (command) {
	case 'add':
		addComponent(componentName);
		break;
	case 'list':
		listComponents();
		break;
	case '--version':
	case '--v':
	case '-v':
		const pkg = JSON.parse(
			fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'),
		);
		console.log(`version: ${pkg.version}`);
		break;
	case 'help':
	case '--help':
	case '-h':
	case undefined:
		printHelp();
		break;
	default:
		console.error(`Unknown command: ${command}`);
		break;
}
