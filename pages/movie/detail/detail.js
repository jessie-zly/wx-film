// pages/movie/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '', // 电影详情id
    filmDetail: {} // 电影详情
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 弹窗动画
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      mask: true,
      duration: 2000
    });
    // 参数处理
    console.log('options', options);
    this.setData({
      id: options.id
    });
    // 获取详情
    wx.request({
      url: 'https://douban.uieee.com/v2/movie/subject/' + this.data.id,
      // url: 'https://m.maizuo.com/v4/api/film/4280', // 卖座网测试
      method: 'GET',
      header: {
        'content-type': 'json'
      },
      success: res => {
        this.setData({
          filmDetail: res.data
        });
        console.log('filmDetail', this.data.filmDetail);
      },
      complete() {
        wx.hideToast();
      }
    });

  },

  //
  castDetail() {
    console.log('演员信息');
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})