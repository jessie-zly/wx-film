// api 封装
const getData = (method = 'GET', url, data = {}, filmList = {}) => {
	wx.request({
		url: url,
		data: data,
		header: {
			'content-type': 'json'
		},
		method: method,
		success: function(res) {
			this.setData({
				filmList: res.data
			});
		},
		fail: function() {
			// fail
		},
		complete: function(res) {
			// complete
			wx.hideToast();
		},
	})
}

module.exports = {
	getData
}