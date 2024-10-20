import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Panada Master",
  description: "panada master docs",
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/solution/solution1' }
    ],

    sidebar: [
      {
        text: "Solution",
        items: [
          {
            text: "Solution 1", link: "/solution/solution1",
            items: [
              { text: "TG Mini App", link: "/solution/solution1-tg" },
              { text: "Service", link: "/solution/solution1-service" },
              { text: "安全通讯", link: "/solution/solution1-security" },
              { text: "运维相关", link: "/solution/solution1-server-ops" },
              // { text: "Unity", link: "/solution/solution1-unity" },
            ]
          },
        ]
      },
      {
        text: "TG bridge",
        items: [
          { text: "Intro", link: "/tg_bridge/intro" },
          {
            text: "Bridge", link: "/tg_bridge/bridge",
            items: [
              { text: "Unity to H5", link: "/tg_bridge/bridge/u2h" },
              { text: "H5 to Unity", link: "/tg_bridge/bridge/h2u" }
            ]
          }, {
            text: "Adaptation", link: "/tg_bridge/adaptation"
          }
        ]
      },
      {
        text: "Service",
        items: [
          { text: "Intro", link: "/service/intro" },
          {
            text: "Basics",
            link: "/service/basics",
            items: [
              { text: "Database", link: "/service/database" },
              { text: "Redis", link: "/service/redis" },
              { text: "Cron", link: "/service/cron" }
            ]
          },
          {
            text: "Internal",
            link: "/service/internal",
            items: [
              { text: "Account Manager", link: "/service/accountManager" },
              { text: "Asset Manager", link: "/service/assetManager" },
              { text: "Task Manager", link: "/service/taskManager" },
              { text: "Stamina System", link: "/service/stamina" }
            ]
          }
        ]
      },
      {
        text: "Product Documentation",
        items: [
          { text: "TODO", link: "/product/intro" }
        ]
      },
      {
        text: "Roadmap",
        items: [
          { text: "TODO", link: "/roadmap/intro" }
        ]
      },
      {
        text: "Assets",
        link: "/assets/intro"
      },

    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
