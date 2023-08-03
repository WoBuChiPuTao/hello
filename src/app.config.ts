export default {
  pages: ['pages/index/index', 'pages/calculator/index', 'pages/chat/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    custom: true, // 是否自定义tabbar
    usingComponents: {},
    color: '#aaaaaa', //文字颜色
    selectedColor: '#2E87E4', //文字选中的颜色
    backgroundColor: '#fff', //tab背景色
    borderStyle: 'black', //tabBar上边框颜色
    position: 'bottom', //tabBar位置顶部top或底部bottom
    list: [
      {
        // selectedIconPath: 'images/near_store_selected.png', //选中图标
        // iconPath: 'images/near_store.png', //默认图标
        pagePath: 'pages/index/index', //链接，无需加文件后缀（必填）
        text: '主页', //文字（必填）
      },
      {
        pagePath: 'pages/calculator/index',
        text: '计算',
      },
    ],
  },
};
