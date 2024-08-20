import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Convers AI",
  head: [['link', { rel: 'icon', href: 'favicon.ico'}]],
  description: "国内首批对接ChatGPT的双千亿级大语言模型，提供多元化服务。",
  themeConfig: {
    logo: "logo.svg",
    outlineTitle: "文章目录",
    outline: [2, 6],
    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      { text: '免费使用', link: '/ling' },
      { text: '产品介绍', link: '/features' },
      { 
        text: '功能使用示例', 
        items: [
          { text: '图像识别', link: '/s1' },
          { text: '音乐创作', link: '/s2' },
          { text: '代码生成', link: '/s3' },
          { text: 'PPT演示文档生成', link: '/s4' },
          { text: 'Excel表格处理', link: '/s5' }
          
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
