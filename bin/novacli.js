#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const indexPath = path.join(__dirname, '..', 'index.ts');

const child = spawn('bun', [indexPath, ...process.argv.slice(2)], {
  stdio: 'inherit',
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
