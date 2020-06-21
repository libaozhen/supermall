import request from './request.js'

// 获取轮播图和推荐数据
export function getSwiperData(){
  return request({
    url:"/home/multidata"
  })
}
// 首页获取商品
export function getHomeGoods(type,page){
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}
