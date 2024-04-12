<script setup>
import { h, ref, defineProps } from "vue";
import SvgIcon from "@/components/SvgIcon.vue";
import { RouterLink } from "vue-router";

import { collapsedStore } from '@/stores/menu.js'

const collapsedData = collapsedStore()
let { showTitle } = storeToRefs(collapsedData);

//设置图标
function renderIcon(icon) {
    return () => h(SvgIcon, { name: icon }, { default: () => h(icon) });
}


//菜单数据
const menuOptions = [

    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: "navigation"
                }
            },
            () => "综合导航"
        ),
        key: "code-nav",
        icon: renderIcon("nav")
    },
    {
        label: "博客分享",
        key: "code-blog",
        icon: renderIcon("blog"),
        children: [
            {
                label: "111",
                key: "rat",
                icon: renderIcon("open")
            }
        ]
    },
    {
        label: "实用工具",
        key: "code-tools",
        icon: renderIcon("tools")
    },
    {
        label: "灵感素材",
        key: "code-material",
        icon: renderIcon("material")
    },
    {
        label: "线上书籍",
        key: "code-books",
        icon: renderIcon("books")
    },
    {
        label: "闲暇摸鱼",
        key: "code-fish",
        icon: renderIcon("fish")
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: "searchEngine"
                }
            },
            () => "搜索引擎"
        ),
        key: "code-search",
        icon: renderIcon("search_page")
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: "themeChange"
                }
            },
            () => "主题更换"
        ),
        key: "code-search",
        icon: renderIcon("search_page")
    },
    {
        label: () => h(
            RouterLink,
            {
                to: {
                    name: "model"
                }
            },
            () => "模型画廊"
        ),
        key: "code-model",
        icon: renderIcon("model")
    },


]

let title = ref("CodeWalk")

</script>

<template>
    <div style="height: 6vh;display: flex; align-items: center; justify-content: center;">
        <SvgIcon name="logo" size="64" />
        <h1 :style="{ display: showTitle ? 'block' : 'none', 'margin-left': 2 + 'px', fontSize: 20 + 'px' }">
            <n-gradient-text :gradient="{
                from:
                    '#cca4e3',
                to:
                    '#003371',
            }">
                {{ title }}
            </n-gradient-text>




        </h1>
    </div>


    <n-menu :collapsed-width="64" :collapsed-icon-size="32" :icon-size="24" :options="menuOptions">
    </n-menu>
</template>

<style></style>