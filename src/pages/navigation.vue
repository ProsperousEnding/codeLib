<script setup>
import {themeStore} from '@/stores/menu';
import SvgIcon from "@/components/SvgIcon.vue";
import {getNavWebsite} from "@/request/api/nav.js";

const themeData = themeStore()

//语言
let {theme} = storeToRefs(themeData);

let navData = ref({})

//设置图标
function renderIcon(icon) {
  return () => h(SvgIcon, {name: icon}, {default: () => h(icon)});
}

const page = reactive({
  pageNum: 1,
  pageSize: 10,
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

const redirectToExternalSite = (url) => {
  // window.location.href = url;
  window.open(url, '_blank');
}
</script>

<template>
  <div class="nav_div">

    <n-tag style="margin: 5px;" :color="{ color: '#fff'}" :bordered="false">
      综合导航
      <template #avatar>
        <SvgIcon name="earth_around" size="24"></SvgIcon>
      </template>
    </n-tag>

    <div class="card_div">
      <n-card v-for="nav in page.pageData" class="card" hoverable>
        <template #header>
          <n-avatar :size="45" class="card_img" :src='nav.cover' @click="redirectToExternalSite(nav.url)"
                    preview-disabled round/>
        </template>

        <template #footer>
          <div class="card_footer_top">
            {{ nav.title }}
          </div>
          <div class="card_footer_bottom">
            {{ nav.webDescribe }}
          </div>

        </template>
        <template #action>
          <SvgIcon name="space_rocket" size="24" @click="redirectToExternalSite(nav.url)"></SvgIcon>
        </template>
      </n-card>
      <n-pagination class="card_page"

                    :page-slot="6"
                    :page="page.pageNum"
                    :page-size="page.pageSize"
                    :page-count="page.pages"
                    :default-page-size="page.pageSize"
                    :default-page="page.pageNum"
                    size="medium"
                    show-quick-jumper

                    :show-quick-jump-dropdown="false"
                    :page-sizes="pagesArr"
                    :on-update:page="currentChange"
                    :on-update:page-size="sizeChange"
      />
    </div>

  </div>


</template>


<style scoped>
.nav_div {
  //background: #409EFF;
  width: 100%;
  height: 100vh;
}

.card_div {

  //background-color: #707070;
  height: 24vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center !important;
}

.card {
  //background-color: #BA050E;
  margin-left: 1vw;
  margin-right: 1vw;
  width: 280px;
  height: 8vh;
  display: flex;
  align-items: center !important;
  flex-direction: row;
}

.card_img {
  margin-top: 3px;
  margin-left: 10px;
  //padding: 5px;
  height: 45px;
  max-height: 100%;
}

:deep(.n-card) > .n-card-header {
  padding: 5px;
}

:deep(.n-card) > .n-card__footer {
  padding: 1px;
  width: 200px;
  margin-left: 5px;

}

.card_footer_top {

  padding: 2px;
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card_footer_bottom {
  padding: 1px;
  width: 140px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;

}

:deep(.n-card) > .n-card__action {
  width: 10%;
  padding: 1px;
  margin-right: 1vw;
}

.card_page {
  //background-color: #BA050E;
  //float: right;
  //margin-right: 5px;


}
</style>