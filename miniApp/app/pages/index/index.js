//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  onLoad: function (options) {
    console.log('index.onLoad',options)
  },
  onUnload: function () {
    console.log('index.onUnload')
  },
  onShow(){
    console.log('index.onShow')
  },
  onHide(){
    console.log('index.onHide')
  },
  onReady(){
    console.log('index.onReady');

    // 在onReady中发起ajax
    // console.log(window)

    // 获取所有班级
    wx.showLoading({
      title:'小哥哥不着急...'
    })
    wx.request({
      url:'http://api.qfh5.cn/api/class',
      success:({data})=>{
        console.log('data=',data);

      },
      fail(){
       
      },
      complete(){
        wx.hideLoading()
      }
    })
  },
  goto(){
    wx.redirectTo({
      url:'/pages/logs/logs'
    })
  }
})
