
const collapsedStore = defineStore("collapsedStore", () => {
    //标题缩进
    let showTitle = ref(true)
    //侧边栏
    let collapsed = ref(false)

    let changeShow = (data) => {
        //标题展示：
        showTitle.value = data
        collapsed.value = !data
    }
    return {
        showTitle,
        collapsed,
        changeShow,
    };
},
);

const themeStore = defineStore("themeStore", () => {
    let theme = ref(null);
    let themeFlag = ref(false)

    let changeTheme = (data,themeType) => {
        //主题切换
        themeFlag.value = data
        theme.value = themeFlag.value ?  null: themeType
    }

    return {
        theme,
        themeFlag,
        changeTheme
    };
})

export { collapsedStore , themeStore}