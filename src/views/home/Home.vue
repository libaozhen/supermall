<template>
 <div id="home" class="home">
   <!-- 顶部导航栏 -->
    <NavBar class="home_nav">
      <div slot="center">购物街</div>
    </NavBar>
    <HomeSwiper :banners="banners"></HomeSwiper>
    <RecommendView :recommends="recommends"></RecommendView>
    <TabControl class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
    <GoodsList :goods="showGoods"></GoodsList>
 </div>
</template>

<script>
  // 顶部导航栏组件
  import NavBar from 'components/common/navbar/NavBar.vue';
  // tab页签组件
  import TabControl from 'components/content/tabcontrol/TabControl.vue';
  // 商品组件
  import GoodsList from '../../components/content/goods/GoodsList.vue';

  // 轮播图组件
  import HomeSwiper from './childcomponents/HomeSwiper.vue';
  // 推荐组件
  import RecommendView from './childcomponents/RecommendView.vue';

  import {getSwiperData,getHomeGoods} from 'network/home.js';

  export default {
    name:"Home",
    data(){
      return {
        goodsType:'pop',
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        }
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.goodsType].list
      }
    },
    components:{
      NavBar,
      TabControl,
      GoodsList,
      HomeSwiper,
      RecommendView
    },
    created(){
      // 获取轮播图和推荐数据
      this.getSwiperData();
      // 获取流行商品
      this.getHomeGoods('pop');
      // 获取新款商品
      this.getHomeGoods('new');
      // 获取精选商品
      this.getHomeGoods('sell');

    },
    methods:{
      /**
       * 事件相关方法
       * */
      tabClick(index){
        switch(index){
          case 0:
            this.goodsType = 'pop';
            break;
          case 1:
            this.goodsType = 'new';
            break;
          case 2:
            this.goodsType = 'sell';
            break;
        }
      },
      /**
       * 获取数据相关方法
       * */
      // 获取轮播图和推荐数据
      getSwiperData(){
        getSwiperData().then(res=>{
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      // 获取商品
      getHomeGoods(type){
        const page = this.goods[type].page +1;
        getHomeGoods(type,page).then(res=>{
          console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = page;
        });
      }
    }
  }
</script>

<style>
  .home{
    padding-top: 44px;
    padding-bottom: 49px;
  }
  .home_nav {
    background-color:var(--color-tint);
    color:#fff;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    z-index: 10;
  }

  .tab-control{
    position: sticky;
    top:44px;

  }
</style>
