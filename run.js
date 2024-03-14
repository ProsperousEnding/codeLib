import fs from "fs"

// 调用示例
const sourceFile = 'node_modules/ammo.js/ammo.js';
const destinationFile = 'public/js/ammo.js';

//ammo.js调用
fs.copyFile(sourceFile, destinationFile, (err) => {
    if (err) {
        console.error('Error copying file:', err);
        return;
    }
    console.log('File copied successfully!');
});

const bgJson = 'https://bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&nc=1586183781119&pid=hp&uhd=1&uhdwidth=4196&uhdheight=2160'
const image = 'public/bg/bing.png'

//必应每日壁纸
setTimeout(async function () {
    let res = await fetch(bgJson, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
    }).then(res => res.json());

    const imgUrl = "https://bing.com/" + res.images[0].url
    console.log(imgUrl);

    let response = await fetch(imgUrl, {
        method: 'GET',
        headers: {'Content-Type': 'application/octet-stream'},
    });
    let arrayBuffer = await response.arrayBuffer();
    let buffer = Buffer.from(arrayBuffer);
    fs.writeFile(image, buffer, (err) => {
        if (err) throw err;
        console.log('bingBg拷贝成功!')
    })
}, 0)

//每日一言
const onWord="https://v2.jinrishici.com/one.json"
const wordPath="public/bg/oneWord/oneWord.json"
//每日一言
setTimeout(async function () {
    let res = await fetch(onWord, {
        method: 'GET',
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET',
            'Content-Type': 'application/json'
        },
    }).then(res => res.json());
console.log(res)
    const jsonString = JSON.stringify(res.data);
    fs.writeFile(wordPath, jsonString, (err) => {
        if (err) throw err;
        console.log('oneWord拷贝成功!')
    })
}, 0)


