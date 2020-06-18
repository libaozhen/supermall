<template>
  <TabBar>
    <TabBarItem path="/home" activeColor="#e95963">
      <img slot="item-icon"src="~assets/images/tabbar/home.png" alt="">
      <img slot="item-icon-active"src="~assets/images/tabbar/home_on.png" alt="">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category" activeColor="#e95963">
      <img slot="item-icon"src="~assets/images/tabbar/category.png" alt="">
      <img slot="item-icon-active"src="~assets/images/tabbar/category_on.png" alt="">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/cart" activeColor="#e95963">
      <img slot="item-icon"src="~assets/images/tabbar/cart.png" alt="">
      <img slot="item-icon-active"src="~assets/images/tabbar/cart_on.png" alt="">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem path="/profile" activeColor="#e95963">
      <img slot="item-icon"src="~assets/images/tabbar/user.png" alt="">
      <img slot="item-icon-active"src="~assets/images/tabbar/user_on.png" alt="">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar.vue';
  import TabBarItem from 'components/common/tabbar/TabBarItem.vue';
  export default {
    name:"MainTabBar",
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>

<style>
</style>
