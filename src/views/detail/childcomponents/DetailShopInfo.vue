<template>
  <div class="shopInfo">
    <div class="shop_head">
      <img :src="shop.log" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop_other">
      <div class="shop_other_left">
        <div class="left_sells">
          {{shop.sells|showSells}}
        </div>
        <div class="left_all">
          {{shop.goodsCount}}
        </div>
      </div>
      <div class="shop_other_right">

      </div>
    </div>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表21</li>
      <li>列表22</li>
      <li>列表23</li>
      <li>列表24</li>
      <li>列表25</li>
      <li>列表26</li>
      <li>列表27</li>
      <li>列表28</li>
      <li>列表29</li>
      <li>列表30</li>
    </ul>
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
      }
    }
  }
</script>

<style scoped>
  .shopInfo{
    padding:0 10px;
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
    border:1px solid red;
    height: 80px;
    display: flex;
  }
  .shop_other .shop_other_left{
    flex:1;
    display: flex;
    align-items: center;
    border: 1px solid red;
  }
  .shop_other .shop_other_left .left_sells{
    flex:1;
    text-align: center;
    border: 1px solid green;
  }
  .shop_other .shop_other_left .left_all{
    flex:1;
    text-align: center;
    border: 1px solid green;
  }
  .shop_other .shop_other_right{
    flex:1;
    border: 1px solid red;
  }
</style>
