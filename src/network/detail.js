import request from './request.js';
// 获取详情数据
export function getDetail(iid){
  return request({
    url:"detail",
    params:{
      iid
    }
  })
}

// 获取详情数据
export function getRecommend(){
  return request({
    url:"recommend"
  })
}

export class Goods{
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.disCount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
    this.realPrice = itemInfo.lowPrice;
  }
}


export class Shop{
  constructor(shopInfo) {
    this.log = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}


export class GoodsParam {
  constructor(info,rule){
    this.images = info.images? info.images[0]:'';
    this.infos = info.set;
    this.size = rule.tables;
  }
}
