<template>
  <div class="cart">
    <!-- 顶部导航栏 -->
    <nav-bar class="navbar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll ref="scroll" class="scroll">
      <!-- 列表 -->
      <cart-list :cart-list="cartList"></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  // 导入顶部导航
  import NavBar from 'components/common/navbar/NavBar.vue';
  import Scroll from 'components/common/scroll/Scroll.vue';

  import CartList from './childcomponents/CartList.vue';
  import CartBottomBar from './childcomponents/CartBottomBar.vue';

  import {mapGetters} from 'vuex';
  export default {
    name:"Cart",
    components:{
      NavBar,
      Scroll,
      CartList,
      CartBottomBar
    },
    computed:{
      // 使用对象展开运算符将 getter 混入 computed 对象中
      ...mapGetters(['cartLength','cartList'])
    },
    activated(){
      this.$refs.scroll.refresh();
    }
  }
</script>

<style scoped>
  .navbar{
    background-color:var(--color-tint);
    color:#fff;
  }
  .scroll{
    position: absolute;
    top:44px;
    bottom:92px;
    left:0;
    right:0;
    overflow: hidden;
  }
</style>
