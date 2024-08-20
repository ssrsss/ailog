import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/ailog/',
  title: "Convers AI",
  description: "国内首批对接ChatGPT的双千亿级大语言模型，提供多元化服务。",
  themeConfig: {
    logo: "logo.svg",
    outlineTitle: "文章目录",
    outline: [2, 6],
    i18nRouting: true,
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      { text: '免费使用', link: '/ling' },
      { text: '产品介绍', link: '/features' },
      { 
        text: '功能使用示例', 
        items: [
          { text: '图像识别', link: '/api-examples' },
          { text: '音乐创作', link: '/api-examples' },
          { text: '论文降重', link: '/api-examples' },
          { text: '代码生成', link: '/api-examples' },
          { text: '代码解释器', link: '/api-examples' },
          { text: 'PPT大纲生成', link: '/other-examples' },
          { text: 'Excel表格处理', link: '/markdown-examples' }
          
        ]
      }
    ],
    
    sidebar: false, // 关闭侧边栏
    aside: "left", // 设置右侧侧边栏在左侧显示
    footer: {
      copyright: "Copyright © 2024 Convers AI",
    }
  }
})
