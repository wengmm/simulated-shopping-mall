// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pho:18382414749,
    imgurl:"",
    showcamera:false,
    resulturl:"",
    shakeshow:false,
    holeshow:false,
    cotentshow:true,
   
    x:0,
    times:0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  
  holehide(){
    this.setData({     
      holeshow: false,
      cotentshow: true,
    })
  },
  
  shake(){
    wx.startAccelerometer({
      success: (res)=> {
        this.innerAudioContext.src = "http://fjdx.sc.chinaz.com/files/download/sound1/201410/5018.mp3"
        this.setData({
          shakeshow:true
        })
        wx.onAccelerometerChange((res)=>{
          if (this.data.times === 1){
           
            this.innerAudioContext.play()
          }
         // console.log(res)
          if(this.data.times===6){
            this.innerAudioContext.stop()
            this.innerAudioContext.src = "http://fjdx.sc.chinaz.com/Files/DownLoad/sound1/201702/8378.mp3"
            this.innerAudioContext.play()
            wx.stopAccelerometer({             
              success: (res)=> {
               
                this.setData({
                  shakeshow:false,
                  times:0,
                  x:0
                },()=>{                                   
                 wx.showModal({
                    title: '中奖',
                    content: '恭喜中奖请扫码领取',
                    success:()=>{
                     this.setData({                                   
                        cotentshow:false,
                        holeshow: true,
                      })
                      

                    }
                  })
                })
              },
              
            })
          }
          const distance=Math.abs(res.x-this.data.x)
          if(distance>1){
            console.log(distance)
            this.setData({
              times:this.data.times+1,
              x:res.x
            })
          }
        })
        
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  //打开手机地图
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
    this.innerAudioContext = wx.createInnerAudioContext()
   
    this.innerAudioContext.src ="http://fjdx.sc.chinaz.com/files/download/sound1/201410/5018.mp3"
    
  },
  

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 
})