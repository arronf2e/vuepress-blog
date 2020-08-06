module.exports = {
  title: 'Tech and Life',
  description: '记录自己的技术成长与生活',
  theme: 'meteorlxy',
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
  },
}