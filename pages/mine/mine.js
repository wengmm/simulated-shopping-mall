// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pho:18382414749,
    map: [{ latitude: 30.629057, longitude: 104.082863, iconPath: "/icons/home.png", width: '30rpx', height: '30rpx' }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  location(){
    wx.openLocation({
      latitude: 30.629057,
      longitude: 104.082863,
      name:"模拟商城",
      scale: '14',
      success: function(res) {},
     
    })
  },
  phone(){
    wx.showActionSheet({
      itemList: ["拨打","添加到通讯录","复制"],
      // itemColor: 'red',
      success: (res)=> {
        console.log(res)
        switch(res.tapIndex){
          case 0:
           this.call()
           break;
          case 1:
           this.add()
           break ;
          case 2:
            this.copy()
            break;
          default:
            break;   
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  copy(){
    wx.setClipboardData({
      data: ""+this.data.pho,
      success: function(res) {
        wx.showToast({
          title: '复制成功',                 
         
        })
      },
     
    })
  },
  call(){
    wx.makePhoneCall({
      phoneNumber:''+ this.data.pho,
      success: function(res) {},
    })
  }
  ,
  add(){
    wx.addPhoneContact({         
      remark: '模拟商城',
      mobilePhoneNumber: '18382414749',    
      title: 'boss',
      
    })
  },
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 
})