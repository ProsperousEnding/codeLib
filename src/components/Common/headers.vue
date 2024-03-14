
<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import { darkTheme } from 'naive-ui'

import {collapsedStore,themeStore} from '@/stores/menu.js'

const collapsedData = collapsedStore()
const themeData = themeStore()
// //侧边栏控制
let collapsedFlag = ref(true)
let collapsed = ref(true)
let collapsed_icon = ref("shrink")

const changeCollapsed = () => {
    collapsedFlag.value = !(collapsedFlag.value)
    collapsed.value = collapsedFlag.value ? true : false
    collapsed_icon.value = collapsed.value ?"shrink": "open" 
    collapsedData.changeShow(collapsedFlag.value)
}


    let theme = ref(null);
    let themeFlag = ref(true)
    let theme_icon = ref("sun")
// //主题
const changeTheme = () => {
    themeFlag.value = !(themeFlag.value)
    theme_icon.value = themeFlag.value ? "sun" : "moon"
    themeData.changeTheme(themeFlag.value,darkTheme)
}

</script>
<template>
    <n-layout-header bordered class="flex"         
        >
        <n-grid x-gap="12" :cols="4" class="flex">
            <n-gi>
                <!-- 第一部分 -->
                <div class="the_first ">
                    <!-- 控制侧边栏 -->
                    <SvgIcon class="collapsed_icon" :name=collapsed_icon size="24"  @click="changeCollapsed" />
                </div>
            </n-gi>
            <n-gi>
                <!-- 第二部分 -->
                <div class="the_second ">

                </div>
            </n-gi>
            <n-gi>
                <!-- 第三部分 -->
                <div class="the_third ">
                    <!-- 控制主题 -->
                    <SvgIcon :name=theme_icon size="24" @click="changeTheme" />
                </div>
            </n-gi>
            <n-gi>
                <!-- 第四部分 -->
                <div class="the_end ">
                    <n-space justify="end">
                        <n-button  quaternary style="width:100%;height:100%">
                            <n-avatar lazy round size="large"   src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                        <div style="padding:12px"><label>用户名</label></div>
                        </n-button>
                        
                    </n-space>
                </div>
            </n-gi>
        </n-grid>







    </n-layout-header>
</template>
<style scoped>
.flex {
    display: flex;
    align-items: center;
}

.collapsed_icon {

    color: #707070;
}

.collapsed_icon:hover {
    color: #bfbfbf;
}
</style>