//渲染
import * as THREE from "three";
import {camera, orbitControls} from "./camera";
import {scene} from "./scene";

//画面长宽比
const width = window.innerWidth - 10, height = window.innerHeight - 50;

const renderer = new THREE.WebGLRenderer({
    //开启抗锯齿
    antialias: true
})

//添加监听器
const setListener = () => {
    //添加事件监听 当事件发生改变时触发
    orbitControls.addEventListener('change', () => {
        // 更新渲染
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        // 更新相机
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        //重新渲染
        renderer.render(scene, camera)
    })
}

export {setListener,renderer}