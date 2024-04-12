import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { getThemeOverrides } from '@/utils/theme.js'
import { darkTheme } from 'naive-ui'
import { useColorMode, useCycleList } from '@vueuse/core' // type BasicColorSchema is not available in JavaScript


const themeStore = defineStore("themeStore", () => {
    let themeFlag = ref(false)
    let changeTheme = () => {
        //主题切换
        toggleDarkMode()
    }

    /** 默认模式，一般设置为auto跟随系统 */
    // const defaultMode = ref('auto');
    const defaultMode = ref('light');
    /** 模式列表 */
    // const modeList = ref(['dark', 'light','auto']);
    const modeList = ref(['dark', 'light']);

    const colorMode = useColorMode({
        initialValue: defaultMode.value,
        emitAuto: true
    })
    const { state, next } = useCycleList(modeList, {
        initialValue: colorMode
    })
    watch(
        state,
        () => {
            if (!modeList.value.concat(state.value)) {
                state.value = defaultMode.value
            }
            colorMode.value = state.value
        },
        { immediate: true }
    )

    const darkMode = computed(() => {
        const system = colorMode.system
        const store = colorMode.store
        if (state.value === 'auto') {
            return system.value === 'dark'
        }
        return store.value === 'dark'
    })

    const themeConfig = ref({
        primary: '#18a058',
        info: '#2080f0',
        success: '#18a058',
        warning: '#f0a020',
        error: '#d03050'
    })

    /** 主题 */
    const theme = computed(() => (darkMode.value ? darkTheme : null))

    /** 主题theme-overrides */
    const themeOverrides = computed(() => {
        return getThemeOverrides(themeConfig.value, darkMode.value)
    })

    /** 暗黑模式切换 */
    function toggleDarkMode() {
        next()
    }
    /** 手动设置主题 */
    function setThemeConfig(config) {
        themeConfig.value = {
            ...themeConfig.value,
            ...config
        }
    }



    return {
        theme,
        themeFlag,
        changeTheme,
        darkMode,
        themeConfig,
        themeOverrides,
        modeState: state,
        toggleDarkMode,
        setThemeConfig
    };
})

export {themeStore}
