//创建透视相机
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {renderer} from "./render";
//画面长宽比
const width = window.innerWidth - 10, height = window.innerHeight - 50;

// const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 10000);
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
const orbitControls = new OrbitControls(camera, renderer.domElement)
orbitControls.target.set(0, 0, 0);
// camera.up = new THREE.Vector3(0, 100, 0)


//设置相机
const setCamera = () => {
    //创建一个透视相机camera  这里的width、height是整个画布的宽高度
    //鸡你太美
    // camera.position.x = 10;
    // camera.position.z = 80;
    // camera.position.y = 5;

    //room
    camera.position.x = 65;
    camera.position.y = 5;
    camera.position.z = 55;

    //设置相机方向
    camera.lookAt(0, 0, 0)
    camera.up = new THREE.Vector3(0, 1, 0)
}


//没有缩放阻尼
let mouseControls = new OrbitControls(
    camera,
    renderer.domElement
); //创建控件对象
//创建轨道控制
const createOrbitControls = () => {
    mouseControls.enablePan = false; //右键平移拖拽
    mouseControls.enableZoom = true; //鼠标缩放
    mouseControls.minDistance = 0; //相机距离原点的距离范围
    mouseControls.maxDistance = 100;
    mouseControls.enableDamping = true; //滑动阻尼
    mouseControls.dampingFactor = 0.15; //(默认.25)
    mouseControls.maxPolarAngle = (Math.PI / 4) * 3; //y旋转角度范围
    mouseControls.minPolarAngle = Math.PI / 4;
    mouseControls.autoRotate = true; //自转(相机)
    mouseControls.autoRotateSpeed = 1; //自转速度
}
export {camera,orbitControls,createOrbitControls,mouseControls,setCamera}