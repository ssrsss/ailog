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
      { 
        text: '桌面端下载', 
        items: [
          { text: 'Windows桌面端 (正常窗口版)', link: 'https://tc.yjie.fun/ConversAI-Win64-%E6%AD%A3%E5%B8%B8%E7%AA%97%E5%8F%A3%E7%89%88.zip' },
          { text: 'Windows桌面端 (窗口置顶版)', link: 'https://tc.yjie.fun/ConversAI-Win64-%E9%A1%B6%E9%83%A8%E7%AA%97%E5%8F%A3%E7%89%88.zip' },
          { text: 'iOS桌面端 (需要Safari浏览器下载)', link: 'https://cx.yjie.fun/ConversAI%20iOS%E6%8F%8F%E8%BF%B0%E6%96%87%E4%BB%B6.mobileconfig' },
          { text: '安卓桌面端', link: 'https://tc.yjie.fun/ConversAI_1.0.apk' },
          { text: 'MacOS桌面端', link: 'https://tc.yjie.fun/ConversAI-MacOS-x64.zip' }
        ]
      },
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
