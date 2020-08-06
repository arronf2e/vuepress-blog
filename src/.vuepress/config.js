module.exports = {
  title: 'Tech and Life',
  description: '记录自己的技术成长与生活',
  theme: 'meteorlxy',

  plugins: [
    ['@vuepress/google-analytics', {
      ga: 'UA-169905882-1',
    }],
  ],

  themeConfig: {
    lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),
    nav: [
      { text: '首页', link: '/', exact: true },
      { text: '文章', link: '/posts/', exact: false },
      { text: '关于我', link: '/about/', exact: false },
      { text: 'Github', link: 'https://github.com/arronf2e' },
    ],
    // 是否显示页面中的文章标题
    header: {
      showTitle: true,
    },
    comments: {
      platform: 'github', // 可选，默认使用 'github'，还可以选择 'gitlab', 'bitbucket'。详情参考 Vssue 文档
      owner: 'arronf2e',
      repo: 'vuepress-blog',
      clientId: 'c4fd300401c78cf579bd',
      clientSecret: 'f49c814db9b9c218592e24fcdff3c308b9892665',
      autoCreateIssue: process.env.NODE_ENV !== 'development', // 可选，这样设置可以在开发环境下不自动创建 Issue
    },
    footer: {
      poweredBy: true,
      poweredByTheme: true,
      custom: 'Copyright 2018-present <a href="https://github.com/arronf2e" target="_blank">arronf2e</a> | MIT License',
    },
    personalInfo: {
      nickname: 'Arron',
      description: 'Happy Coding<br/>Happy Life',
      email: 'arronf2e@163.com',
      location: 'Shanghai',
      avatar: 'https://avatars1.githubusercontent.com/u/15780058?s=460&u=d03ae559e1f2b4ceb442f34574773b1e0794c254&v=4',
      sns: {
        github: {
          account: 'arronf2e',
          link: 'https://github.com/arronf2e',
        },
        juejin: {
          account: 'arronf2e',
          link: 'https://juejin.im/user/1538972006495022',
        },
      },
      infoCard: {
        headerBackground: {
          // url: '/assets/img/header-image-01.jpg',
          useGeo: true,
        },
      },
      lastUpdated: true,
    }
  },
}