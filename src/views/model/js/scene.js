//设置场景
import * as THREE from "three";
import {Water} from '../../../../public/js/Water.js';

const scene = new THREE.Scene();
// 雾效果
scene.fog = new THREE.Fog(0xffffff, 0.0025, 500)
scene.background = new THREE.Color(0xffffff)

//设置平台
const setPlatform = () => {
    // 创建平台的几何体和材质
    const platformGeometry = new THREE.BoxGeometry(50, 0.2, 50); // 平台的尺寸
    const platformMaterial = new THREE.MeshBasicMaterial({color: 0x00ff00}); // 平台的材质
// 创建平台的网格对象
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    // 设置平台的位置
    platform.position.set(0, -0.05, 0); // 平台位于场景的中心，稍微下沉一点以避免与其他物体重叠
    // 将平台添加到场景中
    scene.add(platform);
}

//水
let water;
const setWater = () => {
    const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
    water = new Water(
        waterGeometry,
        {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: new THREE.TextureLoader().load('bg/waternormals.jpg', function (texture) {
                texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
            }),
            sunDirection: new THREE.Vector3(),
            sunColor: 0xffffff,
            waterColor: 0x001e0f,
            distortionScale: 3.7,
            fog: scene.fog !== undefined
        }
    );
    water.rotation.x = -Math.PI / 2;
    // scene.add(water);
};
setWater()

// 地板 floor 几何体
const setFloor = () => {
    const geo = new THREE.BoxGeometry(500, 0.25, 500, 10, 10, 10)
    const mat = new THREE.MeshStandardMaterial({color: 0xdddddd})
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.set(0, -19, 0)
    mesh.receiveShadow = true
    mesh.name = 'floating-floor'
    scene.add(mesh)
}
setFloor()


//设置背景
const setBg = (img) => {
    const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(img), //导入图片
        color: 0xffffff,
        side: THREE.BackSide,
    });
    const skyBox = new THREE.Mesh(new THREE.SphereGeometry(
            5, 100, 100
        ), material
    );
    skyBox.scale.set(30, 30, 30)
    scene.add(skyBox)
}


export {setBg, water, setWater, setPlatform, scene}