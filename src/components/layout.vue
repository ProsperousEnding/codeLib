<script setup>
import headersLayoutVue from '@/components/Layout/headersLayout.vue';
import siderLayout from '@/components/Layout/siderLayout.vue';
import { themeStore } from '@/stores/menu';
import { dateZhCN } from 'naive-ui'
const themeData = themeStore()

//语言
let locale = ref(null);
let { theme } = storeToRefs(themeData);
</script>

<template>
    <n-config-provider :theme="theme" :locale="locale" :date-locale="dateZhCN">
        <n-layout has-sider style="height:100vh;">
            <!-- 侧边栏 -->
            <siderLayout></siderLayout>
            <!-- 正文 -->
            <n-layout-content class="topLayout" bordered>
                <!-- 头 -->
                <headersLayoutVue></headersLayoutVue>
                <RouterView />
            </n-layout-content>

        </n-layout>

    </n-config-provider>
</template>



<style scoped>
:deep(.topLayout>div) {
    display: flex;
    flex-direction: column;

}
</style>