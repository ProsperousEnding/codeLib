//创建辅助坐标轴
import * as THREE from "three";
import {scene} from "./scene";
import {MMDAnimationHelper} from "three/examples/jsm/animation/MMDAnimationHelper";

const setAxesHelper = () => {
    const axesHelper = new THREE.AxesHelper(100)
    scene.add(axesHelper)
}

let animationHelper = new MMDAnimationHelper()

export {animationHelper,setAxesHelper}