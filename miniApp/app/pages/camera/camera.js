// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path:''
  },
  onError(e){
    console.log('err=',e);
  },
  takePhoto(){
    const cmr = wx.createCameraContext();

    cmr.takePhoto({
      success:({tempImagePath})=>{
        console.log('path=',tempImagePath);
        wx.saveImageToPhotosAlbum({
          filePath:tempImagePath,
          success(){
            wx.showToast({
              title:'保存成功'
            })
          }
        })
        this.setData({
          path:tempImagePath
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success (res) {
        console.log('auth=',res.authSetting)

        if(!res.authSetting['scope.camera']){
          // 如用户未授权，则主动请求权限
          wx.authorize({
            scope: 'scope.camera',
            success () {
              // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
              console.log('授权成功');

              // 这里进行相应操作
            }
          })
        }else{
          // 这里进行相应操作
        }

      }
    })
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