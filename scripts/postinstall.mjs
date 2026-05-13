import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const projectRoot = process.cwd();
const hasNuxtConfig = ['nuxt.config.ts', 'nuxt.config.js', 'nuxt.config.mjs'].some((fileName) =>
	fs.existsSync(path.join(projectRoot, fileName)),
);

if (!hasNuxtConfig) {
	process.exit(0);
}

const result = spawnSync('npx', ['nuxt', 'prepare'], {
	cwd: projectRoot,
	stdio: 'inherit',
	shell: process.platform === 'win32',
});

if (result.status !== 0) {
	process.exit(result.status ?? 1);
}
