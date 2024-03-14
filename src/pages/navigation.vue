<script setup>
import {themeStore} from '@/stores/menu';
import axios from 'axios';

const bgUrl = '/bing/HPImageArchive.aspx?format=js&idx=0&n=1&nc=1586183781119&pid=hp&uhd=1&uhdwidth=4196&uhdheight=2160';
const wordUrl = 'https://v2.jinrishici.com/one.json';

let image = ref('')
let oneWord=ref('')
let wordTitle=ref('')
let imageStyle = ref('cover')
const getImage = () => {
  axios.get(bgUrl, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    },
  }).then(res => {
    image.value = "https://bing.com/" + res.data.images[0].url

  })
      .catch(error => {
        console.error(error);
      });
}

const getOneWord = () => {
  axios.get(wordUrl, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    },
  }).then(res => {
    oneWord.value=res.data.content
    wordTitle=res.data.origin.author
  })
      .catch(error => {
        console.error(error);
      });
}


getImage()
const themeData = themeStore()

//语言
let {theme} = storeToRefs(themeData);
</script>

<template>
  <div class="motherBox" :style='{backgroundImage:`bgUrl(${image})`}'>
    <!-- <n-image class="mask-img" width="100%" :src="image" :object-fit="imageStyle" preview-disabled   /> -->
    {{oneWord}}
    {{wordTitle}}
  </div>
</template>


<style scoped>
.motherBox {
  width: 100%;
  background-size: 100% 100%;
  flex: 1;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, #000, transparent 95%);

}


:deep(.mask-img) {
  width: 100%;
  height: 100%;
}

.motherBox::after {
  content: " ";
  position: absolute;
  top: 6vh;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .0);
  z-index: 2;
}
</style>