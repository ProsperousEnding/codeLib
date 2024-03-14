import {MMDLoader} from "three/examples/jsm/loaders/MMDLoader";
import {scene} from "./scene";
import {animationHelper} from './helper'

//  模型加载器
// const modelFiles = '/model/shenhe/shenhe.pmx'

//加载骨骼动画
const vmdFiles = [
    {name: 'ji', url: '/vmd/ji.vmd'},
    {name: "v2", url: "/vmd/wavefile_lat.vmd"},
    {name: "moonwalkVmd", url: "/vmd/moonwalk.vmd"},];


let mmdLoader = new MMDLoader();
let clipAction

const mixMesh = (mesh, animation) => {
    let mixer = animationHelper['objects'].get(mesh).mixer;
    return mixer.clipAction(animation);
}


//加载模型
const loadMmd = (model, load, animation) => {
    mmdLoader.load(model, function (mesh) {
        if (animation) {
            loadAnimation(mesh, load)
        }
    }, onProgress, onError);
}

//加载动画
const loadAnimation = (mesh, load) => {
    mmdLoader.loadAnimation(vmdFiles[0].url, mesh, function (animation) {
        load({
            mesh: mesh,
            animation: animation
        });
        // 设置模型位置
        mesh.position.set(
            0,
            0,
            0
        );
        // 设置模型缩放
        mesh.scale.set(0.8, 0.8, 0.8);

        //播放与暂停
        clipAction = mixMesh(mesh, animation);
        clipAction.play()
        clipAction.paused = true
    }, onProgress, onError);
}

const loadWithAnimation = (modelUrl, vmdUrl, onLoad, onProgress, onError) => {
    loadMmd(modelUrl, function (mmd) {
        animationHelper.add(mmd.mesh, {
            animation: mmd.animation,
            physics: true
        });
        scene.add(mmd.mesh);
    }, true)
}

//加载带动画的模型
const loadWithAnimationMmd = (model) => {
    loadWithAnimation(
        model,
        vmdFiles[0].url,
        function (mmd) {
            animationHelper.add(mmd.mesh, {
                animation: mmd.animation,
                physics: true
            });
        }, onProgress, onError
    )
}


//加载进度
const onProgress = (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}
//加载错误提示
const onError = (error) => {
    console.log(error);
}


export {clipAction, loadMmd, loadWithAnimationMmd, mixMesh}