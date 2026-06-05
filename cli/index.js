#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, '..');
const [, , command, componentName, ...flags] = process.argv;
const shouldForce = flags.includes('--force');

const resolveProjectRoot = () => {
	const candidates = [
		process.env.INIT_CWD,
		process.env.npm_config_local_prefix,
		process.cwd(),
	].filter(Boolean);

	for (const candidate of candidates) {
		const resolvedCandidate = path.resolve(candidate);

		if (fs.existsSync(resolvedCandidate)) {
			return resolvedCandidate;
		}
	}

	return process.cwd();
};

const projectRoot = resolveProjectRoot();

const readJson = filePath => {
	return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const ensureDir = filePath => {
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
};

const toKebabCase = value => {
	return value
		.replace(/([A-Z]+)([A-Z][a-z])/g, '$1-$2')
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.toLowerCase();
};

const normalizeUiComponentTarget = target => {
	const match = target.match(/^components\/ui\/([^/]+)\.vue$/);

	if (!match) {
		return target;
	}

	const componentName = match[1];

	return `components/ui/${toKebabCase(componentName)}/${componentName}.vue`;
};

const resolveTarget = target => {
	const normalizedTarget = normalizeUiComponentTarget(target);

	if (
		normalizedTarget.startsWith('components/') ||
		normalizedTarget.startsWith('composables/') ||
		normalizedTarget.startsWith('utils/')
	) {
		return path.join('app', normalizedTarget);
	}

	return normalizedTarget;
};

const copyFile = (source, target) => {
	const sourcePath = path.resolve(packageRoot, source);
	const resolvedTarget = resolveTarget(target);
	const targetPath = path.resolve(projectRoot, resolvedTarget);

	if (!fs.existsSync(sourcePath)) {
		throw new Error(`Template file is missing: ${source}`);
	}

	if (fs.existsSync(targetPath) && !shouldForce) {
		console.log(`Skipped: ${resolvedTarget} already exists. Use --force to overwrite.`);
		return;
	}

	ensureDir(targetPath);
	fs.copyFileSync(sourcePath, targetPath);
	console.log(`Created: ${resolvedTarget}`);
};

const validateRegistryEntry = entry => {
	if (!entry || !Array.isArray(entry.files) || entry.files.length === 0) {
		throw new Error('Registry entry is invalid: "files" must be a non-empty array.');
	}

	for (const file of entry.files) {
		if (!file.source || !file.target) {
			throw new Error('Registry entry is invalid: each file needs "source" and "target".');
		}
	}
};

const getRegistryEntry = name => {
	const registryPath = path.resolve(packageRoot, 'registry', `${name}.json`);

	if (!fs.existsSync(registryPath)) {
		return null;
	}

	return readJson(registryPath);
};

const listComponents = () => {
	const registryIndexPath = path.resolve(packageRoot, 'registry', 'index.json');

	if (!fs.existsSync(registryIndexPath)) {
		console.log('No registry index found.');
		return;
	}

	const registryIndex = readJson(registryIndexPath);

	console.log('Available components:\n');

	for (const component of registryIndex.components) {
		console.log(`- ${component.name}: ${component.description}`);
	}
};

const addComponent = name => {
	const entry = getRegistryEntry(name);

	if (!entry) {
		console.error(`Component "${name}" was not found in the registry.`);
		process.exit(1);
	}

	validateRegistryEntry(entry);

	for (const file of entry.files) {
		copyFile(file.source, file.target);
	}

	console.log(`\nDone. Added ${entry.title}.`);
};

const printHelp = () => {
	console.log('Alixan UI\n');
	console.log('Usage:');
	console.log('  npx alixan-ui-nuxt add button');
	console.log('  npx alixan-ui-nuxt list');
	console.log('  npx alixan-ui-nuxt add button --force');
	console.log(`\nProject root: ${projectRoot}`);
};

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
