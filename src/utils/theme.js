import { generate } from '@ant-design/colors'
import { colord } from 'colord'
import { upperFirst, kebabCase } from 'lodash-es'
import {  commonDark, commonLight } from 'naive-ui'

function getThemeColors(config, darkMode) {
    const themeColor = {};
    const keys = Object.keys(config);
    const colorActions = [
        { scene: '', handler: (color) => getGenerateColors(color, darkMode)[5] },
        {
            scene: 'Hover',
            handler: (color) => getGenerateColors(color, darkMode)[4]
        },
        {
            scene: 'Suppl',
            handler: (color) => getGenerateColors(color, darkMode)[4]
        },
        {
            scene: 'Pressed',
            handler: (color) => getGenerateColors(color, darkMode)[6]
        }
    ];

    keys.forEach((key) => {
        colorActions.forEach((action) => {
            const color = action.handler(config[key]);
            const colorKey = `${key}Color${action.scene}`;
            themeColor[colorKey] = color;
        });
    });

    return themeColor;
}

function getOtherColor(config, darkMode) {
    const otherColor = {
        Button: {},
        Checkbox: {
            checkMarkColor: getTextColor(darkMode)
        },
        DatePicker: {
            itemTextColorActive: getTextColor(darkMode)
        },
        Calendar: {
            dateTextColorCurrent: getTextColor(darkMode)
        },
        Switch: {
            buttonColor: getTextColor(darkMode)
        }
    };

    const keys = Object.keys(config);
    const scenes = ['', 'Hover', 'Pressed', 'Focus', 'Disabled'];

    keys.forEach((key) => {
        scenes.forEach((scene) => {
            const colorKey = `textColor${scene}${upperFirst(key)}`;
            otherColor.Button[colorKey] = getTextColor(darkMode);
        });
    });

    return otherColor;
}

/**
 * 获取文字颜色，主要用于适配暗黑模式文字颜色
 *
 * @param {boolean} darkMode 暗黑模式
 * @return {string}
 */
function getTextColor(darkMode) {
    return darkMode ? commonDark.textColor2 : commonLight.baseColor;
}

/**
 * 根据颜色获取色系
 *
 * @param {string} color #1890ff
 * @param {boolean} darkMode 暗黑模式
 * @return {string[]} ['#E6F7FF', '#BAE7FF', '#91D5FF', ''#69C0FF', '#40A9FF', '#1890FF', '#096DD9', '#0050B3', '#003A8C', '#002766']
 */
function getGenerateColors(color, darkMode) {
    return darkMode
        ? generate(color, {
            theme: 'dark',
            backgroundColor: commonDark.bodyColor
        })
        : generate(color);
}

/**
 * 将CSS文本解析为CSS对象
 *
 * @param {string} cssText "--primary-color1: 211,224,215;--primary-color2: 167,212,182;"
 * @return {CssObject} { --primary-color1: '211,224,215', --primary-color2: '167,212,182' }
 */
function parseCssText(cssText) {
    const cssObj = {};
    cssText.split(';').forEach((rule) => {
        if (rule) {
            const [key, value] = rule.split(':');
            cssObj[key.trim()] = value.trim();
        }
    });
}



export function getRGBColor(color) {
    return colord(color).toRgb();
}


/**
 * 将CSS变量添加到HTML文档中
 *
 * @param {NTheme.Config} config - store themeConfig
 * @param {boolean} darkMode - 暗黑模式
 * @param {ThemeColor} themeColors - getThemeColors返回的颜色列表
 * @return {void}
 */
function addCssVarsToHtml(config, darkMode, themeColors) {
    const $root = document.documentElement;
    const cssText = $root.style.cssText;
    const cssObj = parseCssText(cssText);
    const configCssObj = {};
    const configEntries = Object.entries(config);
    const themeColorsEntries = Object.entries(themeColors);

    for (const [key, value] of themeColorsEntries) {
        const { r, g, b } = getRGBColor(value);
        configCssObj[`--n-${kebabCase(key)}`] = `${r},${g},${b}`;
    }

    for (const [key, value] of configEntries) {
        const generateColors = getGenerateColors(value, darkMode);
        generateColors.map((color, index) => {
            const { r, g, b } = getRGBColor(color);
            configCssObj[`--n-${key}-color-${index + 1}`] = `${r},${g},${b}`;
        });
    }

    const newCssText = Object.entries({
        ...cssObj,
        ...configCssObj
    })
        .map(([key, value]) => `${key}: ${value};`)
        .join(' ');

    $root.style.cssText = newCssText;
}


/**
 * 获取动态主题ThemeOverrides
 *
 * @param {NTheme.Config} config store themeConfig
 * @param {boolean} darkMode 暗黑模式
 * @return {GlobalThemeOverrides}
 */
export function getThemeOverrides(config, darkMode) {
    const themeColors = getThemeColors(config, darkMode);
    addCssVarsToHtml(config, darkMode, themeColors);
    return {
        common: {
            ...themeColors
        },
        ...getOtherColor(config, darkMode)
    };
}
