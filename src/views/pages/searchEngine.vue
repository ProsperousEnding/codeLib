<script setup>
import { themeStore } from '@/stores/themeStore.js';
import SvgIcon from "@/components/Svg/SvgIcon.vue";
import axios from 'axios';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
const router = useRouter()


  const wordUrl = './bg/oneWord/oneWord.json';
const bg='./bg/bing.png'

let image = ref('')
let oneWord = ref('')
let wordAuthor = ref('')
let wordContent = ref('')

const getOneWord = () => {
  axios.get(wordUrl, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET'
    },
  }).then(res => {
    const data = res.data
    oneWord.value = data.content
    wordAuthor.value = data.origin.author
    wordContent.value = data.origin.content

  })
    .catch(error => {
      console.error(error);
    });
}


// const getImage = () => {
//   axios.get(bgUrl, {
//     headers: {
//       'Access-Control-Allow-Origin': '*',
//       'Access-Control-Allow-Methods': 'GET'
//     },
//   }).then(res => {
//     console.log(res)
//     // image.value = "https://bing.com/" + res.data.images[0].url
//   })
//       .catch(error => {
//         console.error(error);
//       });
// }


const searchEngine = ref('www.bing.com')
const searchQuery = ref('')

const handleEnterKey = (e) => {
  search();
}
const search = (e) => {
  open('https://' + searchEngine.value + searchQuery.value)
}


//设置图标
function renderIcon(icon) {
  return () => h(SvgIcon, { name: icon }, { default: () => h(icon) });
}

const search_icon = ref("search")

const dropDownData = ref([
  {
    label: "百度",
    key: "www.baidu.com",
    value: "baidu",
    string: "/s?wd=",
    icon: renderIcon("baidu")
  },
  {
    label: "必应",
    key: "www.bing.com",
    value: "bing",
    string: "/search?q=",
    icon: renderIcon("bing")
  },
  {
    label: "谷歌",
    key: "www.google.com",
    value: "google",
    string: "/search?q=",
    icon: renderIcon("google")
  }
],)

const handleSelect = (key, option) => {
  search_icon.value = option.value
  searchEngine.value = option.key + option.string
}
const toHome = () => {
  router.push({
    path: '/layout/navigation',
  }
  )
}

getOneWord();
const themeData = themeStore()

//语言
let { theme } = storeToRefs(themeData);
</script>

<template>
  <div class="shadow"></div>
  <div class="motherBox" :style='{ backgroundImage: `url(${bg})` }' style=" width: 100%; ">
    <n-button strong secondary type="info" style="position:absolute; right: 15%;top:2%;z-index: 3;" round @click="toHome">
      首页
      <template #icon>
        <SvgIcon class="home_icon" name="home" size="24" />
      </template>
    </n-button>
    <div style="min-width: 300px;width:25%; margin:15% auto; height: 150px;">
      <n-input placeholder="Search" id="search_input" class="center focus" ref="" @keydown.enter="handleEnterKey"
        v-model:value="searchQuery" clearable>
        <!--        搜索-->
        <template #prefix>
          <n-dropdown trigger="hover" :options="dropDownData" @select="handleSelect" size="small"
            placement="bottom-start">
            <n-button quaternary circle type="primary" @click="handleEnterKey">
              <template #icon>
                <SvgIcon :name=search_icon size="22" />
              </template>
            </n-button>
          </n-dropdown>
        </template>
      </n-input>
    </div>
    <n-h3 style=" margin:0;color: #ffffff; z-index: 1; display: flex;justify-content: center;">{{ oneWord }}
    </n-h3>
    <n-h4 style=" margin:0;color: #ffffff; z-index: 1; display: flex;justify-content: center;"> -- -- {{
      wordAuthor
    }}
    </n-h4>
  </div>
</template>


<style scoped>
.motherBox {
  width: 100%;
  height: 100vh;
  background-size: 100% 100%;
  flex: 1;
  box-sizing: border-box;
  overflow: hidden;
  /* mask-image: linear-gradient(to bottom, #000, transparent 95%); */
}

/*
:deep(.mask-img) {
  width: 100%;
  height: 100%;
} */

.shadow {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  height: 100vh;
  width: 100%;
  /* background-color: rgba(0, 0, 0, .5);
   */
  filter: blur(8px);

  background-image: radial-gradient(rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, .5) 100%), radial-gradient(rgba(0, 0, 0, 0) 33%, rgba(0, 0, 0, .3) 166%);

  z-index: 2;
}


.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.focus) {
  --n-border-hover: 1.5px solid #409EFF !important;
  --n-border-focus: 1.5px solid #409EFF !important;
  --n-border: none
}

#search_input {
  height: 42px;
  z-index: 2;
  text-align: left;
  --smooth-corners: 1.9;
  transform: scale(1);
  border-radius: 45px;
  font-size: 16px;
  padding-right: 10px;
  border-image: url(../../assets/svg/square.svg) 8 8 round;
}

.home_icon {
  filter: invert(100%);
}
</style>