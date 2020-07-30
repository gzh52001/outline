// custom-tab-bar/custom-tab-bar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    menu:[{
      "text":"首页",
      "pagePath":"/pages/index/index"
    },{
      "text":"我的",
      "pagePath":"/pages/mine/mine"
    },{
      "text":"管理",
      "pagePath":"/pages/manage/manage"
    }],
    currentTab:0
  },
  


  /**
   * 组件的方法列表
   */
  methods: {
    changeTab(e){
      const {item} = e.currentTarget.dataset;
      wx.switchTab({
        url: item.pagePath,
      });
    },

    // 修改当前页面索引值
    changeIndex(path){
      console.log('path=',path)
      const idx = this.data.menu.findIndex((it)=>it.pagePath==='/'+path)
      console.log(idx);
      this.setData({
        currentTab:idx
      })
    }
  },
})
