<script setup>
import headersLayoutVue from '@/components/Layout/headersLayout.vue';
import siderLayout from '@/components/Layout/siderLayout.vue';
import {themeStore} from '@/stores/themeStore';
import {dateZhCN} from 'naive-ui'
import {ref} from "vue";

const themeData = themeStore()
//语言
let locale = ref(null);

const {theme, themeConfig, themeOverrides, modeState,setPrimaryColor,setThemeConfig} =
    storeToRefs(themeData)

</script>

<template>
  <n-config-provider :theme="theme" :locale="locale" :date-locale="dateZhCN" :theme-overrides="themeOverrides">
    <n-layout has-sider style="height:100vh;">
      <!-- 侧边栏 -->
      <siderLayout></siderLayout>
      <!-- 正文 -->
      <n-layout-content class="topLayout" bordered>
        <!-- 头 -->
        <headersLayoutVue></headersLayoutVue>
        <RouterView/>
      </n-layout-content>

    </n-layout>

  </n-config-provider>
</template>


<style scoped>


</style>