import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// 自动导包
import AutoImport from 'unplugin-auto-import/vite';

import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [
        vue(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/svg')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]',
        }),
        AutoImport({
            imports: ['vue', 'vue-router', 'pinia']
        })
    ],
    server: {
        proxy: {
            '/api': {
                target: 'https://example.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            },
            '/oneWord': {
                target: 'https://v2.jinrishici.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/oneWord/, '/'),
            }
        },
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
