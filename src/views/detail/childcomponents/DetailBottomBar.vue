<template>
  <div class="bottom_bar">
    <div class="service_box">
      <i class="bottom_icon service"></i>
      <span>客服</span>
    </div>
    <div class="shop_box">
      <i class="bottom_icon shop"></i>
      <span>店铺</span>
    </div>
    <div class="coll_box">
      <i class="bottom_icon coll"></i>
      <span>收藏</span>
    </div>
    <div class="cart" @click="addIntoCart">加入购物车</div>
    <div class="buy">购买</div>
  </div>
</template>

<script>
  export default {
    name:"DetailBottomBar",
    methods:{
      addIntoCart(){
        this.$emit('addIntoCart');
      }
    }
  }
</script>

<style scoped>
  .bottom_bar{
    height: 49px;
    background-color:#fff;
    position: fixed;
    left:0;
    right:0;
    bottom: 0;
    display: flex;
    border-top:1px solid #ddd;
  }
  .bottom_bar i {
    display: block;
    width:28px;
    height: 28px;
  }
  .bottom_bar span{
    font-size:14px;
  }
  .bottom_icon{
    background: url('~assets/images/detail/detail_bottom.png') no-repeat 0 0;
    background-size: 100%;
  }
  .service_box{
    width:70px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .service_box .service{
    background-position: 0 -66px;
  }
  .shop_box{
    width:70px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .shop_box .shop{
    background-position: 0 -124px;
  }
  .coll_box{
    width:70px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
  }
  .coll_box .coll{
    background-position: 0 0px;
  }
  .cart{
    flex:1;
    text-align: center;
    background-color: #ffdd10;
    height: 49px;
    line-height: 49px;
    font-weight: bold;
  }
  .buy{
    flex:1;
    text-align: center;
    background-color: var(--color-tint);
    color:#fff;
    height: 49px;
    line-height: 49px;
    font-weight: bold;
  }
</style>
