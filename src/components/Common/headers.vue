<script setup>
import SvgIcon from "@/components/SvgIcon.vue";
import {collapsedStore} from '@/stores/menu.js'
import {themeStore} from '@/stores/themeStore.js'

import avatarImg from '@/assets/avatar.svg'
let avatar = ref(avatarImg)
const collapsedData = collapsedStore()
const themeData = themeStore()
const {theme,themeConfig,themeOverrides} = storeToRefs(themeData)
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

let themeFlag = ref(true)
let theme_icon = ref("sun")
// //主题
const changeTheme = () => {
  themeFlag.value = !(themeFlag.value)
  theme_icon.value = themeFlag.value ? "sun" : "moon"
  themeData.changeTheme()
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
          <n-icon size="24" class="color-primary">
            <SvgIcon class="collapsed_icon " :name=collapsed_icon size="24" @click="changeCollapsed"/>
          </n-icon>
        </div>
      </n-gi>
      <n-gi>
        <!-- 第二部分 -->
        <div class="the_second ">
          <n-color-picker style="width: 100px"
              v-model:value="themeConfig.primary"
              :show-alpha="false"
          />
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
              <n-gradient-text type="primary":size="18" >
                <div  :bordered="false" class="color-primary-01" style="padding:12px;margin-right: 20px;">用户名</div>
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

  /*color: #707070;*/
}

.collapsed_icon:hover {
  color:  #707070;
}
</style>