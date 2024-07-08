<script setup>
import {themeStore} from '@/stores/themeStore.js';
import SvgIcon from "@/components/Svg/SvgIcon.vue";
import {getNavWebsite} from "@/request/api/nav.js";
import avatarImg from '@/assets/avatar.svg'
const themeData = themeStore()

//语言
let {theme} = storeToRefs(themeData);

let navData = ref({})
// let outFlyArr=ref(['animate__animated','animate__fadeOutTopRight'])

let emptyImage=ref (avatarImg)

//设置图标
function renderIcon(icon) {
  return () => h(SvgIcon, {name: icon}, {default: () => h(icon)});
}

const page = reactive({
  pageNum: 1,
  pageSize: 5,
  total: 0, //总数，默认为0
  pages: 0,
  pageData: []
})

const pagesArr = reactive([5, 10, 20, 40])
const getPage = () => {
  getNavWebsite(page).then(res => {
    page.pageData = res.data.records
    page.total = res.data.total
    console.log(res.data.size)
    page.pageSize = res.data.size
    page.pages = res.data.pages
  })
}
getPage();

const sizeChange = (val) => {
  console.log(page.pageSize);
  page.pageSize = val
  console.log(page.pageSize);
  getPage()
}
const currentChange = (val, type) => {
  page.pageNum = val
  getPage()
}

const isActionActive = ref(-1);
let isCardActive = ref(-1);
const redirectToExternalSite = (index, url) => {
  isActionActive.value = index
  setTimeout(() => {
    window.open(url, '_blank');
    isActionActive.value = -1;
  }, 450);

  // window.location.href = url;
}


</script>

<template>
  <div class="nav_div">
<!--    <n-tag style="margin: 5px; " :color="{ color: '#fff'}" :bordered="false">-->
    <div style="margin: 5px; width:200px;display: flex;align-items: center">
    <SvgIcon name="earth_around" size="24"></SvgIcon>
      <label style="filter: invert(30%); font-weight: bold ">综合导航</label>
    </div>
<!--      <template #avatar>-->

<!--      </template>-->
<!--    </n-tag>-->
    <div class="card_div">
      <n-card v-for="(nav,index) in page.pageData" :class="index===isCardActive?'card animate__animated animate__pulse':'card'" hoverable @mouseover="isCardActive=index">
        <template #header>
          <div class="avatar-wrapper">
          <n-avatar :size="38" class="card_img" :src='nav.cover'  :fallback-src="emptyImage"
                    @click="redirectToExternalSite(nav.url)"  @mouseover="isCardActive=index"
                    preview-disabled  round/>
          <div class="masking"> </div>
          </div>
        </template>

        <template #footer>
          <div  class="card_footer_top hvr-grow hvr-forward " @click="redirectToExternalSite(index,nav.url)">
           <n-text type="primary" class="color-primary">{{ nav.title }}</n-text>
          </div>
          <n-tooltip :style="{ maxWidth: '400px' }" placement="bottom" trigger="hover">
            <template #trigger>
              <div class="card_footer_bottom">
                {{ nav.webDescribe }}
              </div>
            </template>
            <span>{{ nav.webDescribe }} </span>
          </n-tooltip>
        </template>
        <template #action>
          <SvgIcon style="cursor: pointer;" :class="index===isActionActive?'animate__animated animate__fadeOutTopRight hvr-grow  hvr-skew-forward':'animate__animated hvr-grow  hvr-skew-forward'"
                   name="space_rocket" size="18" @click="redirectToExternalSite(index,nav.url)"></SvgIcon>
        </template>

      </n-card>
    </div>
    <n-pagination class="card_page"
                  :page-slot="6"
                  :page="page.pageNum"
                  :page-size="page.pageSize"
                  :page-count="page.pages"
                  :default-page-size="page.pageSize"
                  :default-page="page.pageNum"
                  size="medium"
                  show-quick-jumper
                  show-size-picker
                  :show-quick-jump-dropdown="false"
                  :page-sizes="pagesArr"
                  :on-update:page="currentChange"
                  :on-update:page-size="sizeChange"
    />
  </div>


</template>


<style scoped>
@import "hover.css";


.nav_div {
  /*//background: #409EFF;*/
  width: 100%;
  height: 100vh;
}

.card_div {
  /*background-color: #707070;*/
  /*height: 180px;*/
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center !important;

}

.card {
  /*background-color: #BA050E;*/
  /*margin-left: 5px;*/
  /*margin-right: 5px;*/
  width: 220px;
  height: 64px;
  display: flex;
  align-items: center !important;
  flex-direction: row;
  margin-bottom: 20px;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;
  border-radius: 10px;
}


.card_img {
  margin-top: 10px;
  margin-left: 15px;
  max-height: 100%;
}

:deep(.n-card) > .n-card-header {
  padding: 0px;
}

:deep(.n-card) > .n-card__footer {
  padding: 1px;
  width: 200px;
  margin-left: 5px;


}

.card_footer_top {
  padding: 2px;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: .25rem;
  font-size: .875rem !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  line-height: 1.5;
  font-weight: bold;
  color: #282a2d;
  /*鼠标悬浮为手指*/
  cursor: pointer;
}

.card_footer_bottom {
  padding: 1px;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  font-size: .75rem !important;
  color: #6c757d !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
 /*鼠标悬浮为指针*/
  cursor: context-menu;
}

:deep(.n-card) > .n-card__action {
  /*background-color: #409EFF;*/
  width: 50px;
  padding: 1px;
  margin-right: 20px;
}

.card_page {
  /*//background-color: #BA050E;*/
  /*//margin-right: 5px;*/
  display: flex;
  justify-content: right;
  margin-top: 10px;

}
.avatar-wrapper {
  position: relative;
}

.masking {
  position: absolute;
  top: 0;
  left: 2px;
  background: rgba(255,255,255, 0.2);
  backdrop-filter: blur(0px);
  border-radius: 12px;
}
</style>