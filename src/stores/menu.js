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


export {collapsedStore}