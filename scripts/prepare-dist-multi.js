import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const v37Dir = path.join(distDir, 'v3.7');
const v36Dir = path.join(distDir, 'v3.6');

if (!fs.existsSync(v37Dir)) {
  fs.mkdirSync(v37Dir, { recursive: true });
}

// 1. Copy v3.7 assets and index.html into dist/v3.7/
if (fs.existsSync(path.join(distDir, 'assets'))) {
  fs.cpSync(path.join(distDir, 'assets'), path.join(v37Dir, 'assets'), { recursive: true });
}
if (fs.existsSync(path.join(distDir, 'index.html'))) {
  fs.copyFileSync(path.join(distDir, 'index.html'), path.join(v37Dir, 'index.html'));
}
if (fs.existsSync(path.join(distDir, 'prompt-shorthand-analyzer-v3.7-standalone.html'))) {
  fs.copyFileSync(
    path.join(distDir, 'prompt-shorthand-analyzer-v3.7-standalone.html'),
    path.join(v37Dir, 'prompt-shorthand-analyzer-v3.7-standalone.html')
  );
  fs.copyFileSync(
    path.join(distDir, 'prompt-shorthand-analyzer-v3.7-standalone.html'),
    path.join(v37Dir, 'standalone.html')
  );
}

// Copy release APK if present in apks/
const apk37Src = path.join(projectRoot, 'apks', 'Prompt-Shorthand-Analyzer-v3.7-release.apk');
if (fs.existsSync(apk37Src)) {
  fs.copyFileSync(apk37Src, path.join(distDir, 'Prompt-Shorthand-Analyzer-v3.7-release.apk'));
  fs.copyFileSync(apk37Src, path.join(v37Dir, 'Prompt-Shorthand-Analyzer-v3.7-release.apk'));
}

// Also check previous v3.6 APK if present
const apk36Src = path.join(projectRoot, 'apks', 'Prompt-Shorthand-Analyzer-v3.6-release.apk');
if (fs.existsSync(apk36Src)) {
  fs.copyFileSync(apk36Src, path.join(distDir, 'Prompt-Shorthand-Analyzer-v3.6-release.apk'));
}

// 2. Preserve v3.5 and v3.6 directories if available
const v35Dist = path.resolve(projectRoot, '../prompt-shorthand-analyzer-v3.5/dist');
const v35Target = path.join(distDir, 'v3.5');
if (fs.existsSync(v35Dist)) {
  fs.cpSync(v35Dist, v35Target, { recursive: true });
}

// 3. Ensure .nojekyll in all folders so GitHub Pages doesn't ignore anything
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
fs.writeFileSync(path.join(v37Dir, '.nojekyll'), '');
if (fs.existsSync(v36Dir)) {
  fs.writeFileSync(path.join(v36Dir, '.nojekyll'), '');
}
if (fs.existsSync(v35Target)) {
  fs.writeFileSync(path.join(v35Target, '.nojekyll'), '');
}

console.log('Multi-version dist structure prepared successfully:');
console.log(' - / (root) has latest V3.7');
console.log(' - /v3.7/ exists with assets and index.html');
if (fs.existsSync(v36Dir)) {
  console.log(' - /v3.6/ exists with assets and index.html');
}
if (fs.existsSync(v35Target)) {
  console.log(' - /v3.5/ exists with assets and index.html');
}
