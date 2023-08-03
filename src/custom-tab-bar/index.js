Component({
  data: {
    selected: 0,
    color: '#7A7E83',
    selectedColor: '#31869B',
    fontWeight: 'bold',
    list: [
      {
        current: 0,
        pagePath: 'pages/index/index',
        text: '首页',
        iconPath: 'asset/images/home_icon.png',
        selectedIconPath: 'asset/images/home_selected.png',
      },
      {
        current: 1,
        pagePath: 'pages/calculator/index',
        text: '计算',
        iconPath: 'asset/images/hastag_icon.png',
        selectedIconPath: 'asset/images/hastag_selected.png',
      },
      {
        current: 2,
        pagePath: 'pages/chat/index',
        text: '聊天',
        iconPath: 'asset/images/wechat_icon.png',
        selectedIconPath: 'asset/images/wechat_selected.png',
      },
    ],
  },
  attached() {},
  methods: {
    switchTab(e) {
      console.log(e);
      const path = e.currentTarget.dataset.path;
      const idx = e.currentTarget.dataset.index;
      wx.switchTab({
        url: path,
      });
      this.setData({
        selected: idx,
      });
    },
  },
});
