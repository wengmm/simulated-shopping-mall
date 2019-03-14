// pages/mall/mall.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    sidebar:[],
    products:[],
    current:1,
    start: 20,
    isend:false,
  },

  getonload(){
    wx.request({
      url: `http://www.xiongmaoyouxuan.com/api/tab/${this.data.current}/feeds?start=${this.data.start}&sort=0`,
      success: (res)=>{
        this.setData({
          products: this.data.products.concat(res.data.data.list),
          start: res.data.data.nextIndex,
          isend:res.data.data.isEnd,
        })       
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  getdata(){
    wx.request({
      url: `http://www.xiongmaoyouxuan.com/api/tab/${this.data.current}/feeds?start=20&sort=0`,
      success: (res) => {
        console.log(res)
        this.setData({
          products: res.data.data.list,
          start:res.data.data.nextIndex,
          isend: res.data.data.isEnd,
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  
  changenav(e){
    this.setData({
      current: e.currentTarget.dataset.id

    },()=>{
      this.getdata()
    })
  },
  onLoad: function (options) {
    wx.request({
      url: 'http://www.xiongmaoyouxuan.com/api/tabs?sa=',
     
      success: (res)=> {
        console.log(res)
        this.setData({
          sidebar:res.data.data.list
        }, () => {
          this.getdata()
        })
      },
      fail: function(res) {},
      complete: function(res) {},
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
   // console.log(this.data.list)
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