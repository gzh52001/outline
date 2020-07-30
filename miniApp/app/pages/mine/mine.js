// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'laoxie',
    classList:[{
      id:'001',
      name:'2001',
      category:'h5',
      student:['laoxie','jingjing','laoxia'],
      city:'GZ'
    },{
      id:'002',
      name:'2002',
      category:'h5',
      student:'linjie', //'linjie'.split('')
      city:'GZ'
    },{
      id:'003',
      name:'2003',
      category:'h5',
      city:'GZ'
    },{
       id:'004',
      name:'2004',
      category:'h5',
      city:'GZ'
    }],
    categories:['h5','java','云计算','网络安全','UI'],
    categoryIndex:0,
    currentRegion: ['广东省', '广州市', '天河区'],
  },

  changeCategory(e){
    console.log('category:',e.detail)

    this.setData({
      categoryIndex:e.detail.value
    })
  },

  regionChange(e){
    console.log('currentRegion=',e.detail.value)
    this.setData({
      currentRegion:e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    const currentPage = getCurrentPages();
    const tabbar = this.getTabBar();
    tabbar.changeIndex(currentPage[0].route)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})