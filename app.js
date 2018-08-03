//app.js
App({
  onLaunch: function() {
    // 获取设备信息
    wx.getSystemInfo({
      success: res => {
        console.log('systemInfo res -> ',res)
        this.globalData.systemInfo.windowWidth = res.windowWidth;
        this.globalData.systemInfo.windowHeight = res.windowHeight;
      }
    });
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        console.log('登录成功')
      }
    });
    // 获取用户信息
    wx.getSetting({
      success: res => {
        const _this = this;
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              console.log('app res -> ',res)
              // 可以将 res 发送给后台解码出 unionId
              _this.globalData.userInfo = res.userInfo

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
  globalData: {
    // 设备信息
    systemInfo: {
      windowWidth: 0,
      windowHeight: 0,
    },
    // 用户信息
    userInfo: {}
  }
})