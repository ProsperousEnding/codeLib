<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import {darkTheme} from 'naive-ui'

import {collapsedStore, themeStore} from '@/stores/menu.js'

import avatarImg from '@/assets/avatar.svg'

let avatar = ref(avatarImg)
const collapsedData = collapsedStore()
const themeData = themeStore()
// //侧边栏控制
let collapsedFlag = ref(true)
let collapsed = ref(true)
let collapsed_icon = ref("shrink")

const changeCollapsed = () => {
  collapsedFlag.value = !(collapsedFlag.value)
  collapsed.value = !!collapsedFlag.value
  collapsed_icon.value = collapsed.value ? "shrink" : "open"
  collapsedData.changeShow(collapsedFlag.value)
}


let theme = ref(null);
let themeFlag = ref(true)
let theme_icon = ref("sun")
// //主题
const changeTheme = () => {
  themeFlag.value = !(themeFlag.value)
  theme_icon.value = themeFlag.value ? "sun" : "moon"
  themeData.changeTheme(themeFlag.value, darkTheme)
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
          <SvgIcon class="collapsed_icon" :name=collapsed_icon size="24" @click="changeCollapsed"/>
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
          <n-flex justify="space-between">
            <!-- 控制主题 -->
            <SvgIcon :name=theme_icon size="24" @click="changeTheme"/>
          </n-flex>
        </div>
      </n-gi>
      <n-gi>
        <!-- 第四部分 -->
        <div class="the_end ">
          <n-space justify="end">
            <n-flex justify="space-between"
                    style="width: 180px;display: flex;align-items: center;justify-content: space-around">
              <n-avatar style="max-height: 100%;max-width: 100%" lazy round :size="36" :src="avatar"/>
              <n-gradient-text type="info" :gradient="{from: 'rgb(85, 85, 85)',to: 'rgb(170, 170, 170)'}" :size="24" style=" margin-right: 20px;">
                <div style="padding:12px"><label>用户名</label></div>
              </n-gradient-text>
            </n-flex>
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