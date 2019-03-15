// pages/home/home.js
Page({
  data: {
    imgUrls: [],
    news:[],
    list: [],
    recommendList:[],
    active:1,
    isshow:false,
    homeStart:0,
    homeisend:false,
    left:0,
    beforedistance:0,
    touchdistance:0,
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500

  },
  show(){
    this.setData({
      isshow:!this.data.isshow
    
    })
  },
  click(e){
    console.log(e.currentTarget.dataset.id)
    this.setData({
      active:e.currentTarget.dataset.id
    })
  },
  // touchstart(e){
  // //  console.log(e)
  //   this.setData({
  //     left: e.touches[0].pageX
  //   },()=>{
  //     console.log(this.data.left, '开始')
  //   })
    
  // },
  
  // touchmove(e) {
  //   const distance = this.data.left-e.touches[0].pageX;
  //   this.setData({
      
  //     touchdistance:-distance
      
  //   },()=>{
  //     console.log(this.data.beforedistance, this.data.touchdistance)
  //   })
  
  // },
  // touchend(e) {
  //   // console.log(e,'jiesu')
  //   this.setData({
  //     beforedistance: this.data.touchdistance+this.data.beforedistance,
  //   },()=>{
  //     console.log(this.data.beforedistance)
  //   })
  // },
  loadmore(){
    console.log(3)
    wx.request({
      url: `http://www.xiongmaoyouxuan.com/api/tab/1/feeds?start=${this.data.homeStart}&sort=0`,
      success:(res)=> {
        console.log(res)
        this.setData({
          recommendList: this.data.recommendList.concat(res.data.data.list),
          homeStart: res.data.data.nextIndex,
          homeisend: res.data.data.isEnd,
        })
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  onLoad:function(){
    wx.request({
      url: 'http://www.xiongmaoyouxuan.com/api/tab/1?start=0',
    
      success: (res)=> {
        if(res.data.code===200){
          this.setData({
            imgUrls: res.data.data.banners
          })
        }           
      },
      fail: function(res) {},
      complete: function(res) {},
    }),
    wx.request({
      url: 'http://www.xiongmaoyouxuan.com/api/tabs?sa=',
     
      success: (res)=> {
      //  console.log(res)
        if(res.data.code===200){
          this.setData({
            news: res.data.data.list.slice(0,8)
          })
        }
        
      },
      fail: function(res) {},
      complete: function(res) {},
    }),
      wx.request({
        url: 'http://www.xiongmaoyouxuan.com/api/tab/2?start=0',
       
        success: (res) => {
         // console.log(res.data.data.categories)
          this.setData({
            list: res.data.data.categories
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      }),
      wx.request({
      url: 'http://www.xiongmaoyouxuan.com/api/tab/1/feeds?start=20&sort=0',
        success: (res) => {
          console.log(res.data)
          this.setData({
            homeStart:res.data.data.nextIndex,
            recommendList: res.data.data.list
          })
        },
        fail: function (res) { },
        complete: function (res) { },
      })  

  }

})
