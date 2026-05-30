#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, '..');
const [, , command, componentName, ...flags] = process.argv;
const shouldForce = flags.includes('--force');

function resolveProjectRoot() {
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
}

const projectRoot = resolveProjectRoot();

function readJson(filePath) {
	return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function ensureDir(filePath) {
	fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function copyFile(source, target) {
	const sourcePath = path.resolve(packageRoot, source);
	const targetPath = path.resolve(projectRoot, target);

	if (!fs.existsSync(sourcePath)) {
		throw new Error(`Template file is missing: ${source}`);
	}

	if (fs.existsSync(targetPath) && !shouldForce) {
		console.log(`Skipped: ${target} already exists. Use --force to overwrite.`);
		return;
	}

	ensureDir(targetPath);
	fs.copyFileSync(sourcePath, targetPath);
	console.log(`Created: ${target}`);
}

function validateRegistryEntry(entry) {
	if (!entry || !Array.isArray(entry.files) || entry.files.length === 0) {
		throw new Error('Registry entry is invalid: "files" must be a non-empty array.');
	}

	for (const file of entry.files) {
		if (!file.source || !file.target) {
			throw new Error('Registry entry is invalid: each file needs "source" and "target".');
		}
	}
}

function getRegistryEntry(name) {
	const registryPath = path.resolve(packageRoot, 'registry', `${name}.json`);

	if (!fs.existsSync(registryPath)) {
		return null;
	}

	return readJson(registryPath);
}

function listComponents() {
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
}

function addComponent(name) {
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
}

function printHelp() {
	console.log('Alixan UI\n');
	console.log('Usage:');
	console.log('  npx alixan-ui-nuxt add button');
	console.log('  npx alixan-ui-nuxt list');
	console.log('  npx alixan-ui-nuxt add button --force');
	console.log(`\nProject root: ${projectRoot}`);
}

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
