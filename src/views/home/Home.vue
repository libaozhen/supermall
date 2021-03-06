<template>
 <div id="home" class="home">
   <!-- 顶部导航栏 -->
    <NavBar class="home_nav">
      <div slot="center">购物街</div>
    </NavBar>
    <TabControl ref="tabcontrol_top" v-show="isTabControlShow" class="tab-control on-top" :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
    <!-- 滚动区域 -->
    <Scroll class="scroll" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="handleScroll" @pullingUp="loadMore">
      <HomeSwiper :banners="banners" @swiperImageLoad="swiperImageLoad"></HomeSwiper>
      <RecommendView :recommends="recommends"></RecommendView>
      <TabControl ref="tabcontrol_content"  class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></TabControl>
      <GoodsList :goods="showGoods" @imageLoad="imageLoad"></GoodsList>
    </Scroll>
    <!-- 回到顶部 -->
    <BackTop @click.native="backTopClick" v-show="isShowBackTop"></BackTop>
 </div>
</template>

<script>
  // 顶部导航栏组件
  import NavBar from 'components/common/navbar/NavBar.vue';
  import Scroll from 'components/common/scroll/Scroll.vue';

  // tab页签组件
  import TabControl from 'components/content/tabcontrol/TabControl.vue';
  // 商品组件
  import GoodsList from 'components/content/goods/GoodsList.vue';
  import BackTop from 'components/content/backtop/BackTop.vue'

  // 轮播图组件
  import HomeSwiper from './childcomponents/HomeSwiper.vue';
  // 推荐组件
  import RecommendView from './childcomponents/RecommendView.vue';

  import {getSwiperData,getHomeGoods} from 'network/home.js';
  // 导入工具js文件
  import {debounce} from 'common/utils.js'
  import {imageLoadMixin,backTopMixin} from 'common/mixin.js'

  export default {
    name:"Home",
    mixins:[imageLoadMixin,backTopMixin],
    data(){
      return {
        goodsType:'pop',
        banners:[],
        recommends:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        isTabControlShow:false,
        // tabcontrol 的offsettop属性值
        tabOffSetTop:0,
        saveY:0
      }
    },
    computed:{
      showGoods(){
        return this.goods[this.goodsType].list
      }
    },
    components:{
      NavBar,
      Scroll,
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
    activated(){
      // console.log("activated");
      this.$refs.scroll.scrollTo(0,this.saveY,0);
      this.$refs.scroll.refresh();
    },
    deactivated(){
      // 保存scroll的y值
      this.saveY = this.$refs.scroll.getScrollY();
      // 清除全局总线事件,在混入文件中定义，mixin.js文件中
      this.$bus.$off('imageLoad',this.imageLoadFuc);
    },
    destroyed(){
      console.log('Home组件销毁');
    },
    methods:{
      // 防抖函数
      debounce(func, wait) {
        let timer;
        return function() {
          let context = this; // 注意 this 指向
          let args = arguments; // arguments中存着e

          if (timer) clearTimeout(timer);

          timer = setTimeout(() => {
            func.apply(this, args)
          }, wait);
        }
      },
      /**
       * 事件相关方法
       * */
      //tab页签点击事件
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
        // 同时修改掉两个组件的current_index,使两个组件的选中状态一致。
        this.$refs.tabcontrol_top.current_index = index;
        this.$refs.tabcontrol_content.current_index = index;
        // 如果有吸顶效果后，点击页签，则显示从开始的第一张显示
        this.$refs.scroll.scrollTo(0,-this.tabOffSetTop,0);
      },
      // Scroll组件滚动事件
      handleScroll(position){
        // 判断返回顶部是否显示
        this.isShowBackTop = -position.y>1000;
        // console.log(position);
        // 显示与隐藏顶部的tabcontrol
        if(-position.y>this.tabOffSetTop){
          this.isTabControlShow = true;
        }else{
          this.isTabControlShow = false;
        }
      },
      // 上拉加载更多
      loadMore(){
        // console.log('上拉加载更多');
        this.getHomeGoods(this.goodsType);
      },
      // GoodsList组件中每张图片加载完毕后的回调函数
      imageLoad(){
        this.$refs.scroll.refresh();
      },
      // 轮播图某张图片加载完事件
      // 加载完毕后获取tabControl的offsetTop
      swiperImageLoad(){
        this.tabOffSetTop = this.$refs.tabcontrol_content.$el.offsetTop;
        // console.log(this.tabOffSetTop);
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
          // console.log(res);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page = page;

          // 结束本次上拉刷新
          // this.$refs.scroll.finishPullUp();
          setTimeout(()=>{
            // 结束本次上拉刷新
            this.$refs.scroll && this.$refs.scroll.finishPullUp();
          },2000);
        });
      }
    }
  }
</script>

<style scoped>
  .home{
    height: 100vh;
    padding-top: 44px;
    padding-bottom: 49px;
    position: relative;
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
  .scroll{
    position: absolute;
    left:0;
    right: 0;
    top:44px;
    bottom:49px;
    overflow: hidden;
  }
  .on-top{
    position:fixed;
    top:44px;
    left:0px;
    right:0px;
    z-index: 9;
  }
</style>
