//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    classList:[],
    categories:[],
    categoryIndex:0,
    cities:[],
    cityIndex:0,
  },
  changeCategory(e){

    this.setData({
      categoryIndex:e.detail.value
    })
  },
  changeCity(e){

    this.setData({
      cityIndex:e.detail.value
    })
  },
  goto(){
    wx.redirectTo({
      url:'/pages/logs/logs'
    })
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

        const categories = Array.from(new Set(data.data.map(item=>item.category)));
        const cities = Array.from(new Set(data.data.map(item=>item.city)));

        console.log('categories=',categories);
        
        this.setData({
          classList:data.data,
          categories,
          cities
        })
      },
      fail(){
       
      },
      complete(){
        wx.hideLoading()
      }
    })
  },

})
