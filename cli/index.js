#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, '..');
const [, , command, componentName, ...flags] = process.argv;
const shouldForce = flags.includes('--force');

/**
 * Resolve project root (where Nuxt app lives)
 */
const resolveProjectRoot = () => {
	const candidates = [
		process.env.INIT_CWD,
		process.env.npm_config_local_prefix,
		process.cwd(),
	].filter(Boolean);
	for (const candidate of candidates) {
		const resolved = path.resolve(candidate);
		if (fs.existsSync(resolved)) return resolved;
	}
	return process.cwd();
};

const projectRoot = resolveProjectRoot();

/**
 * Utils
 */
const readJson = filePath => JSON.parse(fs.readFileSync(filePath, 'utf8'));

const ensureDir = filePath =>
	fs.mkdirSync(path.dirname(filePath), { recursive: true });

const fileExists = filePath => fs.existsSync(filePath);

/**
 * Registry
 */
const getRegistryEntry = name => {
	const registryPath = path.resolve(packageRoot, 'registry', `${name}.json`);
	return fileExists(registryPath) ? readJson(registryPath) : null;
};

/**
 * Source path resolver
 */
const resolveSource = (name, type, file) => `registry/${name}/${type}/${file}`;

/**
 * Target path resolver (Nuxt-specific)
 */
const resolveTarget = (type, file) => {
	// components/ui/toast/Toast.vue
	if (type === 'components') {
		const componentName = file.replace('.vue', '');
		return `app/components/ui/${componentName}/${file}`;
	}
	// composables/useToast.ts
	if (type === 'composables') return `app/composables/${file}`;
	// utils/cn.ts
	if (type === 'utils') return `app/utils/${file}`;
	return `app/${file}`;
};

/**
 * Copy file
 */
const copyFile = (source, target) => {
	const sourcePath = path.resolve(packageRoot, source);
	const targetPath = path.resolve(projectRoot, target);
	if (!fileExists(sourcePath)) {
		throw new Error(`Missing registry file: ${source}`);
	}
	if (fileExists(targetPath) && !shouldForce) {
		console.log(`Skipped: ${target} already exists (use --force)`);
		return;
	}
	ensureDir(targetPath);
	fs.copyFileSync(sourcePath, targetPath);
	console.log(`Created: ${target}`);
};

/**
 * Install component
 */
const addComponent = name => {
	const entry = getRegistryEntry(name);

	if (!entry) {
		console.error(`Component "${name}" not found in registry.`);
		process.exit(1);
	}

	// components
	if (Array.isArray(entry.components)) {
		for (const file of entry.components) {
			const source = resolveSource(name, 'components', file);
			const target = resolveTarget('components', file);
			copyFile(source, target);
		}
	}

	// composables
	if (Array.isArray(entry.composables)) {
		for (const file of entry.composables) {
			const source = resolveSource(name, 'composables', file);
			const target = resolveTarget('composables', file);
			copyFile(source, target);
		}
	}

	// utils (optional)
	if (Array.isArray(entry.utils)) {
		for (const file of entry.utils) {
			const source = resolveSource(name, 'utils', file);
			const target = resolveTarget('utils', file);
			copyFile(source, target);
		}
	}

	console.log(`\nDone. Added ${entry.name}`);
};

/**
 * List registry
 */
const listComponents = () => {
	const registryIndexPath = path.resolve(packageRoot, 'registry', 'index.json');
	if (!fileExists(registryIndexPath)) {
		console.log('No registry index found.');
		return;
	}
	const registryIndex = readJson(registryIndexPath);
	console.log('Available components:\n');
	for (const component of registryIndex.components) {
		console.log(`- ${component.name}: ${component.description}`);
	}
};

/**
 * Help
 */
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

/**
 * Router
 */
switch (command) {
	case 'add':
		if (!componentName) {
			console.error('Please provide a component name.');
			process.exit(1);
		}
		addComponent(componentName);
		break;
	case 'list':
		listComponents();
		break;
	case 'help':
	case '--help':
	case '-h':
	case undefined:
		printHelp();
		break;
	default:
		console.error(`Unknown command: ${command}`);
		printHelp();
		process.exit(1);
}
