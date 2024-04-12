const routes = [
    {
        path: "/",
        name: '/',
        redirect: "/searchEngine",
    },
    {
        path: "/searchEngine",
        name: "searchEngine",
        component: () => import('@/pages/searchEngine.vue'),
    },
    {
        path: "/layout",
        name: "layout",
        component: () => import('@/components/layout.vue'),
        children: [{
            name: 'navigation',
            path: 'navigation',
            component: () => import('@/pages/navigation.vue'),
            meta: {
                title: "综合导航"
            },
        },
            {
                name: 'model',
                path: 'model',
                component: () => import('@/views/model/model.vue'),
                meta: {
                    title: "模型画廊"
                },
            },
            {
                name: 'themeChange',
                path: 'themeChange',
                component: () => import('@/components/Common/themeChange.vue'),
                meta: {
                    title: "主题更换"
                },
            }


        ],
    },

];

export default routes
   