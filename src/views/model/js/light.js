//添加光源 这里添加了两个光源
//AmbientLight：环境光源，均匀照亮所有物体，防止有些光源照射不到呈现不出来
//PointLight：点光源，类似灯泡发出的光，可以投射阴影，使模型更加立体
import * as THREE from "three";
import {scene} from "./scene";
//创建环境光源
const ambientLight = new THREE.AmbientLight(0xffffff, 0.8),
    //创建点光源
    pointLight = new THREE.PointLight(0x404040, 0.4),
// 创建方向光
    directionalLight = new THREE.DirectionalLight(0xffffff, 1),
// 创建聚光灯
    spotLight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 4, 0.5, 1);

//添加光源
const setLight = () => {
    //设置点光源所在位置
    pointLight.position.set(0, 2, 2)
    //设置方向光源所在位置
    directionalLight.position.set(-1, 2, 2);
    spotLight.position.set(0, 4, 0);

    //每创建一个object都需要将其添加到三维场景中 将环境光源和点光源添加到场景中
    // scene.background = new THREE.Color('#bfbfbf')
    // scene.add( helper );
    scene.add(ambientLight)
    scene.add(pointLight)
    scene.add(directionalLight);
    scene.add(spotLight);
// // 创建点光源的辅助对象
//   const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
//   // 创建方向光的辅助对象
//   const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
//   // 创建聚光灯的辅助对象
//   const spotLightHelper = new THREE.SpotLightHelper(spotLight);
    // scene.add(pointLightHelper);
    // scene.add(directionalLightHelper);
    // scene.add(spotLightHelper);
}

export {setLight}