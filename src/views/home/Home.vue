<template>
 <div id="home">
   <!-- 顶部导航栏 -->
    <NavBar class="home_nav">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
 </div>
</template>

<script>
  // 顶部导航栏组件
  import NavBar from 'components/common/navbar/NavBar.vue';
  // 轮播图组件
  import HomeSwiper from './childcomponents/HomeSwiper.vue';
  // 推荐组件
  import RecommendView from './childcomponents/RecommendView.vue';

  import {getSwiperData} from 'network/home.js';

  export default {
    name:"Home",
    data(){
      return {
        banners:[],
        recommends:[]
      }
    },
    components:{
      NavBar,
      HomeSwiper,
      RecommendView
    },
    created(){
      getSwiperData().then(res=>{
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    }
  }
</script>

<style>
  .home_nav {
    background-color:var(--color-tint);
    color:#fff;
  }
</style>
