// pages/class/class.js
const app = getApp();
console.log('app=', app);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    user: []
  },

  showUser(e) {
    const {user} = e.currentTarget.dataset;
    wx.showModal({
      title: user.name + '详细信息',
      content: `注册时间${user.regtime}`,
      success: function (res) {
        console.log(res);
        if (res.confirm) {
          console.log('用户点击主操作')
        } else {
          console.log('用户点击辅助操作')
        }
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function (options) {
    const { id } = options;
    console.log('options=', options);

    const data = await app.request('/api/user', {
      class_id: id
    });

    console.log('student=', data);

    this.setData({
      user: data.data
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