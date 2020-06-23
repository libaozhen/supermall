<template>
  <div class="shopInfo" v-if="Object.keys(shop).length>0">
    <div class="shop_head">
      <img :src="shop.log" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop_other">
      <div class="shop_other_left">
        <div class="left_sells">
          <div class="sell_num">{{shop.sells|showSells}}</div>
           <div class="sell_title">总销量</div>
        </div>
        <div class="left_all">
          <div class="all_num">{{shop.goodsCount}}</div>
          <div class="all_title">全部宝贝</div>
        </div>
      </div>
      <div class="shop_other_right">
        <div v-for="(item,index) in shop.score" class="right_item">
          <div class="right_item_title">{{item.name}}</div>
          <div class="right_item_score" :class="item.isBetter?'high_color':'low_color' ">{{item.score}}</div>
          <div class="right_item_level" :class="item.isBetter?'high_bg':'low_bg' ">{{item.isBetter|showLevel}}</div>
        </div>
      </div>
    </div>
    <div class="inShop_box">
      <span class="inShop">进店逛逛</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showSells(value){
        return value + "万";
      },
      showLevel(value){
        let level = "低";
        if(value){
          level = "高";
        }
        return level
      }
    }
  }
</script>

<style scoped>
  .shopInfo{
    padding:0 10px;
    border-bottom: 3px solid #eee;
  }
  .shop_head{
    vertical-align: center;
    height:80px;
    line-height: 80px;
    font-size: 18px;
  }
  .shop_head img{
    width:48px;
    height:48px;
    vertical-align:middle;
    margin-right:10px;
  }
  .shop_other{
    height: 80px;
    display: flex;
  }
  .shop_other .shop_other_left{
    flex:1;
    display: flex;
    align-items: center;

  }
  .shop_other .shop_other_left .left_sells{
    flex:1;
    text-align: center;
  }
  .shop_other .shop_other_left .left_sells .sell_num{
    font-size: 18px;
  }
  .shop_other .shop_other_left .left_sells .sell_title{
    font-size: 16px;
    margin-top:5px;
  }

  .shop_other .shop_other_left .left_all{
    flex:1;
    text-align: center;
    border-right: 1px solid #ccc;
  }
  .shop_other .shop_other_left .left_all .all_num{
    font-size: 18px;
  }
  .shop_other .shop_other_left .left_all .all_title{
    font-size: 16px;
    margin-top:5px;
  }
  .shop_other .shop_other_right{
    flex:1;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
  .shop_other .shop_other_right .right_item{
    margin-top:10px;
    display: flex;
  }
  .shop_other .shop_other_right .right_item .right_item_title{
    flex:1;
  }
  .shop_other .shop_other_right .right_item .right_item_score{
    width:60px;
    padding-left:6px;
  }
  .shop_other .shop_other_right .right_item .right_item_level{
    width:20px;
  }
  .low_color{
    color:#008000;
  }
  .high_color{
    color:var(--color-high-text);
  }

  .low_bg{
    background-color: #008000;
    text-align: center;
    color:#fff;
  }
  .high_bg{
    background-color: var(--color-high-text);
    text-align: center;
    color:#fff;
  }

  .inShop_box{
    height: 80px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .inShop_box .inShop{
    width:180px;
    height:30px;
    border-radius: 5px;
    line-height: 30px;
    background-color: #f2f4fb;
    text-align: center;
    vertical-align: middle;
  }
</style>
