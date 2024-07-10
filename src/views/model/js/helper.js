//创建辅助坐标轴
import * as THREE from "three";
import {scene} from "./scene";
import Stats from "three/examples/jsm/libs/stats.module";
import {MMDAnimationHelper} from "three/examples/jsm/animation/MMDAnimationHelper";
import {camera} from "./camera";
import {GUI} from "three/examples/jsm/libs/lil-gui.module.min.js";
import {directionalLight, pointLight, spotLight} from "./light";
//相机辅助
// const toggleCameraHelper=()=>{
//     const cameraHelp = new THREE.CameraHelper( camera );
//     scene.add( cameraHelp );
// }

//坐标轴
// const setAxesHelper = () => {
//     const axesHelper = new THREE.AxesHelper(100)
//     scene.add(axesHelper)
// }
let animationHelper = new MMDAnimationHelper()

//性能监视器，监听帧率
const stats = Stats();
const statsDom = stats.domElement;
statsDom.style.position = 'fixed';
statsDom.style.top = '100px';
statsDom.style.left = '250px'
statsDom.style.right = 'unset'


//辅助面板
//gui工具
const gui = new GUI();
const helperControl = gui.addFolder('Helper')
const axesHelperName = 'axesHelper'
const cameraHelperName = 'cameraHelper'
const gridHelperName = 'gridHelper'
const polarGridHelperName = 'polarGridHelper'
const pointLightHelperName = "pointLightHelper"
const directionalLightHelperName = "directionalLightHelper"
const spotLightHelperName = "spotLightHelper"

const toggle = (name, creator) => {
    const helper = scene.getObjectByName(name);
    if (helper) {
        scene.remove(helper);
    } else {
        creator();
    }
};
const toggleAxesHelper = () => {
    toggle(axesHelperName, () => {
        const helper = new THREE.AxesHelper(100);
        helper.name = axesHelperName;
        scene.add(helper);
    });
};

const toggleGridHelper = () => {
    toggle(gridHelperName, () => {
        const helper = new THREE.GridHelper(200, 10);
        helper.name = gridHelperName;
        scene.add(helper);
    });
};

const togglePolarGridHelper = () => {
    toggle(polarGridHelperName, () => {
        const helper = new THREE.PolarGridHelper(100, 16, 8, 128);
        helper.name = polarGridHelperName;
        scene.add(helper);
    });
};

const toggleCameraHelper = () => {
    toggle(cameraHelperName, () => {
        const helper = new THREE.CameraHelper(camera);
        helper.name = cameraHelperName;
        scene.add(helper)
    })
}
// 创建方向光的辅助对象

// 创建聚光灯的辅助对象
const togglePointLightHelper = () => {
    toggle(pointLightHelperName, () => {
        // 创建点光源的辅助对象
        const helper = new THREE.PointLightHelper(pointLight, 1);
        helper.name = pointLightHelperName;
        scene.add(helper)
    })
}
const toggleDirectionalLightHelper = () => {
    toggle(directionalLightHelperName, () => {
        // 创建点光源的辅助对象
        const helper = new THREE.DirectionalLightHelper(directionalLight, 1);
        helper.name = directionalLightHelperName;
        scene.add(helper)
    })
}
const toggleSpotLightHelper = () => {
    toggle(spotLightHelperName, () => {
        // 创建点光源的辅助对象
        const helper = new THREE.SpotLightHelper(spotLight);
        helper.name = spotLightHelperName;
        scene.add(helper)
    })
}

const props = {
    axesHelper: {
        toggle: toggleAxesHelper
    },
    cameraHelper: {
        toggle: toggleCameraHelper
    },
    gridHelper: {
        toggle: toggleGridHelper
    },
    polarGridHelper: {
        toggle: togglePolarGridHelper
    },
    pointLightHelper: {
        toggle: togglePointLightHelper
    },
    directionalLightHelper: {
        toggle: toggleDirectionalLightHelper
    },
    spotLightHelper: {
        toggle: toggleSpotLightHelper
    }
};
const guiTools = () => {
    gui.domElement.style.position = 'absolute';
    gui.domElement.style.top = '100px';
    gui.domElement.style.right = '100px';
    gui.domElement.style.left = 'unset'
    helperControl.add(props.cameraHelper, 'toggle').name(cameraHelperName);

    helperControl.add(props.axesHelper, 'toggle').name(axesHelperName);
    helperControl.add(props.gridHelper, 'toggle').name(gridHelperName);
    helperControl.add(props.polarGridHelper, 'toggle').name(polarGridHelperName);
    helperControl.add(props.pointLightHelper, 'toggle').name(pointLightHelperName);
    helperControl.add(props.directionalLightHelper, 'toggle').name(directionalLightHelperName);
    helperControl.add(props.spotLightHelper, 'toggle').name(spotLightHelperName);
}


const containerRef = ref(null);
const isAni = ref(true);
onMounted(() => {
    const container = containerRef.value;
    const gui = new GUI({ autoPlace: false });
    container.appendChild(gui.domElement);
    const stats = new Stats();
    stats.domElement.classList.add('stats-bar');
    container.appendChild(stats.domElement);
})

export {animationHelper, stats, statsDom, gui, guiTools}