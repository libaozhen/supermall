<template>
  <div v-if="Object.keys(goods).length>0" class="goods_info">
    <div class="goods_title">{{goods.title}}</div>
    <div class="goods_price">
      <span class="new_price">{{goods.newPrice}}</span>
      <span class="old_price">{{goods.oldPrice}}</span>
      <span class="discount">{{goods.disCount}}</span>
    </div>
    <div class="info_other">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info_services">
      <span class="service_item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        {{goods.services[index-1].name}}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailBaseInfo",
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .goods_info{
    padding:10px;
    border-bottom: 3px solid #eee;
  }
  .goods_title{
    font-size: 18px;
  }
  .goods_price{
    margin-top:10px;
  }
  .goods_price .new_price{
    font-size: 24px;
    color:var(--color-high-text);
  }
  .goods_price .old_price{
    font-size: 14px;
    color:#ccc;
    margin-left:5px;
    text-decoration: line-through;

  }
  .goods_price .discount{
    background-color: var(--color-tint);
    color:#fff;
    border-radius: 6px;
    font-size: 14px;
    padding:2px 6px;
    margin-left:6px;
    line-height: 24px;
  }
  .info_other{
    margin-top:10px;
    display: flex;
    font-size: 14px;
    color:#ccc;
  }
  .info_other span{
    flex: 1;
  }
  .info_other span:nth-last-child(-n+2){
    text-align: center;
  }
  .info_other span:nth-last-child(-n+1){
    text-align: right;
  }
  .info_services{
    font-size: 14px;
    display: flex;
    height: 80px;
    line-height: 80px;
  }
  .info_services .service_item{
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .info_services .service_item:nth-child(1){
    text-align: left;
  }
  .info_services .service_item:nth-last-child(1){
    text-align: right;
  }
  .info_services .service_item img{
    width:14px;
    height:14px;
  }
</style>
