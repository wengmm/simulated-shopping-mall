//app.js
//app里的东西其他页面都能用 吧store放这里其他页面就能通过const app=getApp()使用
import store, {addCart} from './redux/store.js'
//console.log(store.getState().cart)
App({
  store,
  storeAddCar(product){
    store.dispatch(addCart(product))
  },
  getmount(){
    const counts = store.getState().cart.reduce((result, item) => {
      result += item.count
      return result
    }, 0)
    return counts
  },
  setcount(){
    const cart = store.getState().cart
    const count=cart.reduce((result,item)=>{
       result+=item.count
       return result
    },0)
    console.log(count)
    wx.setTabBarBadge({
      index: 2,
      text: "" + count,
      success: function(res) {},
    
    })
  },
  onLaunch: function () {
    this.setcount()
    // 监听
    store.subscribe(this.getmount)
    store.subscribe(this.setcount)
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  onLoad: function (options) {
   
  },
  globalData: {
    userInfo: null
  }
})