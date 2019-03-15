// pages/detail/detail.js
const app=getApp()
Page({
  data: {
    detailid:1,
    productdetail:{},
    
  },
  addtocar(e){
   console.log(e)
   // app.storeAddCart()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获得当前页路由，page数组两个值一个前一页一个当前页
    const page=getCurrentPages();
    this.setData({
      detailid: page[1].options.id
    },()=>{
      wx.request({
        url: `http://www.xiongmaoyouxuan.com/api/detail?id=${this.data.detailid}&normal=1&sa=`,
        success: (res) => {
          this.setData({
            productdetail:res.data.data
          },()=>{
            console.log(this.data.productdetail)
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })
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