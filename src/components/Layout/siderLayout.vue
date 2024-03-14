
<script setup>
import sider from '@/components/Common/sider.vue'
import { collapsedStore } from '@/stores/menu.js'

const collapsedData = collapsedStore()
let { collapsed } = storeToRefs(collapsedData);


</script>

<template>
  <!-- 侧边栏 -->
  <n-layout-sider :collapsed="collapsed" @collapse="collapsed = true" @expand="collapsed = false" collapse-mode="width"
    :collapsed-width="64" :width="240" bordered>
    <sider></sider>
  </n-layout-sider>
</template>
<style>
</style>