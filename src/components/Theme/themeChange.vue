<template>
  <n-config-provider :theme="theme" :theme-overrides="themeOverrides">
    <n-card>
      <n-row gutter="12">
        <n-form inline>
          <n-col :span="4">
            <n-form-item label="Primary Color">
              <n-color-picker
                  v-model:value="primaryColor"
                  :show-alpha="false"
              />
            </n-form-item>
          </n-col>
        </n-form>
      </n-row>
      <n-space>
        <n-button @click="theme = darkTheme">深色</n-button>
        <n-button @click="theme = null">浅色</n-button>
      </n-space>
      <n-divider />
      <n-space>
        <n-space>
          <n-button>Default</n-button>
          <n-button type="primary"> Primary </n-button>
          <n-button strong secondary type="primary"> Primary </n-button>
          <n-button tertiary type="primary"> Primary </n-button>
          <n-button quaternary type="primary"> Primary </n-button>
          <n-button type="primary" ghost> Primary </n-button>
        </n-space>
      </n-space>
      <n-divider />

    </n-card>
  </n-config-provider>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { generate } from '@ant-design/colors'
import {
  darkTheme,
  commonDark,
   GlobalTheme,
   GlobalThemeOverrides
} from 'naive-ui'

// 主题，null为亮色，darkTheme为暗色
const theme = ref<GlobalTheme | null>(null)
// 定义一个主色
const primaryColor = ref('#52c41a')
// theme-overrides
const themeOverrides = ref<GlobalThemeOverrides>({})
// generate生成的颜色
const generateColors = ref<string[]>([])

setThemeOverrides()

// 设置theme-overrides
function setThemeOverrides() {
  generateColors.value = theme.value
      ? generate(primaryColor.value, {
        // generate支持传入theme为dark生成暗黑色系
        theme: 'dark',
        // 暗黑色系生成的背景色，这里可以传入主题暗黑模式下的背景色
        backgroundColor: commonDark.bodyColor
      })
      : generate(primaryColor.value)

  const commonColors = {
    primaryColor: generateColors.value[5],
    primaryColorHover: generateColors.value[4],
    primaryColorPressed: generateColors.value[5],
    primaryColorSuppl: generateColors.value[6]
  }
  themeOverrides.value.common = commonColors
}

// 监听primaryColor和theme
watch([primaryColor, theme], () => {
  setThemeOverrides()
})
</script>
