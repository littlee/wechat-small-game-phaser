const fs = require('fs');
const mdContent = fs.readFileSync('./README.md', 'utf-8');
const jsContent = fs.readFileSync('./js/libs/pixi.min.js', 'utf-8');
const versionMatch = jsContent.match(/Phaser (v\d+\.\d+\.\d+)/);
const versionStr = (versionMatch && versionMatch[1]) || '';
fs.writeFileSync('./README.md', mdContent.replace(/v\d+\.\d+\.\d+/, versionStr));
