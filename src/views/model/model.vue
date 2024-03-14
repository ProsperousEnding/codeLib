<script setup>
import * as THREE from 'three';
import {setBg,water,setWater,setPlatform,scene} from './js/scene'
import {setLight} from './js/light'
import  {camera,orbitControls,createOrbitControls,setCamera} from './js/camera'
import {setListener,renderer} from "./js/render";
import {animationHelper,setAxesHelper} from "./js/helper"
import {clipAction,loadMmd,loadWithAnimationMmd} from "./js/loader";
import SvgIcon from "@/components/SvgIcon.vue";
import yourNameBg from "/public/bg/yourName.png"
const modelFiles = '/model/ikun/kun.pmx'

const kunBg = '/bg/bgModel/kun/IdolProducer.pmx'

//canvas的id
const canvasContainer = ref(null);
//画面长宽比
const width = window.innerWidth - 10, height = window.innerHeight - 50;

const clock = new THREE.Clock();
let mesh
const texFiles=[]

//暂停按钮图标
let playBtnIcon = ref("play")
//暂停
const playOrPause = () => {
  clipAction.paused = !clipAction.paused;
  playBtnIcon.value = (playBtnIcon.value === "play") ? "pause" : "play"
}
function render(){
  water.material.uniforms[ 'time' ].value += 1.0 / 60.0;
}

//加载动画
function animation() {
  render()
  animationHelper.update(clock.getDelta());
  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animation);

const init = () => {
  //创建一个WebGL渲染器 这里的width、height是整个画布的宽高度
  renderer.setSize(width, height)
  setLight();
  setCamera();
  loadWithAnimationMmd(modelFiles)
  // loadMmd(modelFiles)
  setBg(yourNameBg);
  setListener();
  setAxesHelper();
  createOrbitControls();
  setPlatform();
  setWater();
  animation();
  renderer.render(scene, camera)
}

onMounted(() => {
  init()
  canvasContainer.value.appendChild(renderer.domElement)
});
</script>


<template>
  <div class="canvasContainer" ref="canvasContainer">
    <n-button @click="playOrPause">
      <template #icon>
        <SvgIcon :name="playBtnIcon" size="64"></SvgIcon>
      </template>
    </n-button>


  </div>
</template>
<style scoped></style>