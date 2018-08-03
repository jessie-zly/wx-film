// pages/movie/index/index.js
const app =getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    playingList:{}, // 热映
    comingList:{}, // 即将上映
    classicalList:{}, // 精选
		url:{
			in_theaters: '', // 正则热映
			coming_soon: '', // 即将上映
			top250: '' // top250
		}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
		// 弹窗动画
		wx.showToast({
			title: '加载中',
			icon: 'loading',
			mask: true,
			duration: 2000
		});
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/in_theaters?start=0&&count=10',
      method: 'GET',
      header:{
        'content-type':'json'
      },
      success: res => {
        console.log(res)
        this.setData({
          playingList: res.data
        });
      },
			complete: function () {
				// complete
				wx.hideToast();
			}
    });
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