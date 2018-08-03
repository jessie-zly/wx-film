// url 封装

const url = {
	baseURL: 'https://douban.uieee.com', // base
	in_theaters: '/v2/movie/in_theaters?start=0&&count=10', // 正则热映
	coming_soon: '/v2/movie/coming_soon', // 即将上映
	top250: '/v2/movie/top250' // top250
}
export default url;