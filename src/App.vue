<script setup>
import { RouterView } from 'vue-router'

const screenWidth = inject('screenWidth');
    const containerClass = computed(() => {
      return screenWidth.value <= 768 ? 'container-column' : 'container-row';
    });
</script>

<template>
      <!-- <router-link to="/about">About</router-link> -->
      <div :class="containerClass">  <RouterView /></div>

</template> 

<style scoped>

body{
  padding:0;
  margin:0;

}

.container-column {
  flex-direction: column;
}

.container-row {
  flex-direction: row;
}

</style>
