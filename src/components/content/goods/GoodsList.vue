<template>
  <div class="goods_box">
    <div class="goods_item" v-for="(item,index) in goods" :key="index">
       <img :src="item.show.img" alt="">
       <div class="goods_info">
          <p>{{item.title}}</p>
          <span class="price">￥{{item.price}}</span><span class="collect">{{item.cfav}}</span>
       </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"GoodsList",
    props:{
      'goods':{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .goods_box{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding:4px;
  }
  .goods_box .goods_item{
    width:48%;
  }
  .goods_box .goods_item img{
    width: 100%;
    border-radius:5px;
  }
  .goods_box .goods_item .goods_info{

  }
 .goods_box .goods_item .goods_info p{
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
 }
 .price{
    color:var(--color-high-text);
 }
 .collect::before{
    content:'';
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('~assets/images/home/collect.png') no-repeat 0px 5px;
 }
</style>
