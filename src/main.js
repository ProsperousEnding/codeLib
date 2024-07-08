import {createApp} from 'vue'
import {createPinia} from 'pinia'
import 'animate.css';
import './assets/base.css'

import 'virtual:svg-icons-register'

import App from './App.vue'
import router from './router/index'
import naive from './plugins/naive'
import SvgIcon from './components/Svg/SvgIcon.vue'
import VWave from 'v-wave'

const app = createApp(App)

app.use(router)
    .use(naive)
    .use(VWave)

app.use(createPinia())

app.component('svg-icon', SvgIcon)


const screenWidth = ref(window.innerWidth);

watch(screenWidth, () => {
    // 在这里根据屏幕宽度的变化进行相应的操作
});

// 监听窗口大小变化
window.addEventListener('resize', () => {
    screenWidth.value = window.innerWidth;
});

app.provide('screenWidth', screenWidth);

app.mount('#app')
