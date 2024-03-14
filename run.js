import  fs from "fs"

// 调用示例
const sourceFile = 'node_modules/ammo.js/ammo.js';
const destinationFile = 'public/js/ammo.js';

fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
        console.error('Error copying file:', err);
        return;
    }
    console.log('File copied successfully!');
});