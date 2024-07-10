import {MMDLoader} from "three/examples/jsm/loaders/MMDLoader";
import {scene} from "./scene";
import {animationHelper} from './helper'
import * as THREE from "three";
import {OBJLoader} from "three/examples/jsm/loaders/OBJLoader";
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader.js';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js';

const room = reactive({
    "fbx": '/bg/bgModel/output/room.fbx',
    "mtl": '/bg/bgModel/output/room.mtl',
    "obj": '/bg/bgModel/output/room.obj',
})


//加载骨骼动画
const vmdFiles = [
    {name: 'ji', url: './vmd/ji.vmd'},
    {name: "v2", url: "./vmd/wavefile_lat.vmd"},
    {name: "moonwalkVmd", url: "./vmd/moonwalk.vmd"},];


let mmdLoader = new MMDLoader();
let clipAction

const mixMesh = (mesh, animation) => {
    let mixer = animationHelper['objects'].get(mesh).mixer;
    return mixer.clipAction(animation);
}


//加载模型
const loadMmd = (model, load, animation,hasTextTure,path) => {
    mmdLoader.load(model, function (mesh) {
        if (animation) {
            loadAnimation(mesh, load)
        }
        if(hasTextTure){
            // 手动加载和应用贴图
            const textureLoader = new THREE.TextureLoader();
            textureLoader.load(path, (texture) => {
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material.map = texture;
                        child.material.needsUpdate = true;
                    }
                });
            });
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
            20,
            -18,
            35
        );
        // 45度等于π/4弧度
        mesh.rotation.y = Math.PI / 2;

        // 设置模型缩放
        mesh.scale.set(1.5, 1.5, 1.5);

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
    }, true,false,null)
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

const mtlLoader = new MTLLoader();
const geometry = new THREE.BoxGeometry(10, 10, 10);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
const fbxLoader = new FBXLoader();
// 创建OBJLoader实例
const objLoader = new OBJLoader();
// 加载选秀场景
const draftScene = () => {
    mtlLoader.load(room.mtl, (materials) => {
        materials.preload();
        objLoader.setMaterials(materials);
        objLoader.load(room.obj, (obj) => {
            console.log(obj)
            scene.add(obj)
            // 设置模型位置
            obj.position.set(
                0,
                -18,
                -20
            );
            // 设置模型缩放
            obj.scale.set(20, 20, -20);
            // 加载FBX文件
            fbxLoader.load(room.fbx, (texture) => {
                obj.traverse((child) => {
                    if (child.isMesh) {
                        child.material.map = texture.material.map;
                        child.material.needsUpdate = true;
                    }
                });
            }, onProgress, onError);
        }, onProgress, onError);
    });
}


//加载进度
const onProgress = (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');
}
//加载错误提示
const onError = (error) => {
    console.log(error);
}


export {clipAction, loadMmd, loadWithAnimationMmd, mixMesh, draftScene}