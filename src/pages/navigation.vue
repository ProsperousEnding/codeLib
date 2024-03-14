<script setup>
import {themeStore} from '@/stores/menu';

const themeData = themeStore()

//语言
let {theme} = storeToRefs(themeData);
</script>

<template>
</template>


<style scoped>

</style>