<template>
  <div id="detail" class="detail">
    <DetailNavBar ref="detalNavBar" @titleClick="titleClick"></DetailNavBar>
    <Scroll ref="scroll" class="scroll" :probe-type="3" :pull-up-load="true" @scroll="scroll">
      <DetailSwiper :topImages="topImages" @detailImageLoad="detailImageLoad"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @detailImageLoad="detailImageLoad"></DetailGoodsInfo>
      <DetailParamInfo ref="paramInfo" :paramInfo="paramInfo" @detailImageLoad="detailImageLoad"></DetailParamInfo>
      <DetailCommentInfo ref="commentInfo" :commentInfo="commentInfo"></DetailCommentInfo>
      <RecommendList ref="recomment" :goods="recommend" @detailImageLoad="detailImageLoad"></RecommendList>
    </Scroll>
    <!-- 回到顶部 -->
    <BackTop @click.native="backTopClick" v-show="isShowBackTop"></BackTop>
    <detail-bottom-bar @addIntoCart="addIntoCart"></detail-bottom-bar>
  </div>
</template>

<script>
  /**
   * 公共组件
   *
   */
  // 滚动组件
  import Scroll from 'components/common/scroll/Scroll.vue'
  // 导入推荐组件
  import RecommendList from 'components/content/goods/RecommendList.vue'
  /**
   * 子组件
   *
   */
  // 导入子组件
  import DetailNavBar from './childcomponents/DetailNavBar.vue';
  import DetailSwiper from './childcomponents/DetailSwiper.vue';
  import DetailBaseInfo from './childcomponents/DetailBaseInfo.vue';
  import DetailShopInfo from './childcomponents/DetailShopInfo.vue';
  import DetailGoodsInfo from './childcomponents/DetailGoodsInfo.vue';
  import DetailParamInfo from './childcomponents/DetailParamInfo.vue';
  import DetailCommentInfo from './childcomponents/DetailCommentInfo.vue';
  import DetailBottomBar from './childcomponents/DetailBottomBar.vue';
  /**
   * 方法
   *
   */
  import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail.js';
  import {debounce} from 'common/utils.js';
  // 导入混入
  import {imageLoadMixin,backTopMixin} from 'common/mixin.js';

  // 导入vuex的映射
  import {mapActions} from 'vuex';

  export default {
    name:"Detail",
    mixins:[imageLoadMixin,backTopMixin],
    data(){
      return {
        iid:null,
        // 顶部图片
        topImages:[],
        goods:{},
        shop:{},
        detailInfo:{},
        paramInfo:{},
        commentInfo:{},
        recommend:[],
        titleTopYs:[0,600,800,1200],
        // 获取topY的方法
        getTopYs:null
      }
    },
    components:{
      Scroll,
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommentInfo,
      RecommendList,
      DetailBottomBar
    },
    created(){
      // 获取保存iid
      this.iid = this.$route.query.iid;
      // 获取详情数据
      this.getDetail();
      // 获取推荐数据
      this.getRecommend();

      // 对获取titleTopYs值做一个防抖
      this.getTopYs = debounce(()=>{
        this.titleTopYs=[];
        // 商品offsetTop
        this.titleTopYs.push(0);
        // 参数offsetTop
        this.titleTopYs.push(this.$refs.paramInfo.$el.offsetTop);
        // 评论offsetTop
        this.titleTopYs.push(this.$refs.commentInfo.$el.offsetTop);
        //推荐offsetTop
        this.titleTopYs.push(this.$refs.recomment.$el.offsetTop);
      },300,false);
    },
    methods:{
      // 展开映射
      ...mapActions(['addCart']),
      /**
       * 事件
       * */
       // scroll滚动事件
       scroll(position){
          let y = -position.y;
          if(y<this.titleTopYs[1]){
             this.$refs.detalNavBar.currentIndex = 0;
          }else if(y<this.titleTopYs[2]){
             this.$refs.detalNavBar.currentIndex = 1;
          }else if(y<this.titleTopYs[3]){
             this.$refs.detalNavBar.currentIndex = 2;
          }else{
            this.$refs.detalNavBar.currentIndex = 3;
          }

          // 判断返回顶部是否显示
          this.isShowBackTop = -position.y>1000;
       },
       // 详情页面所有子组件图片加载完毕回调事件
       detailImageLoad(){
          this.refresh();
          this.getTopYs();
       },
      // 标题头部点击事件
      titleClick(index){
        // console.log(index);
        this.$refs.scroll.scrollTo(0,-this.titleTopYs[index],300);
      },
      // 添加到购物车点击事件
      addIntoCart(){
        // 获取购物车需要展示的信息
        const goods = {};
        goods.image = this.topImages[0];
        goods.title = this.goods.title;
        goods.desc = this.goods.desc;
        goods.price = this.goods.realPrice;
        goods.iid = this.iid;
        // 数量
        goods.count = 1;
        // 购物车中是否被选中
        goods.checked = false;

        // 调用vuex中action的方法
        // this.$store.dispatch('addCart',goods).then(res=>{
        //   console.log(res);
        // });
        // 直接调用映射的action方法
        this.addCart(goods).then(res=>{
          console.log(res);
          this.$toast.show('加入购物车成功',2000);
        });
      },
      /**
       *方法
       * */
      // 获取详细信息
      getDetail(){
        getDetail(this.iid).then(res=>{
          // console.log(res.result);
          const data = res.result;
          // 顶部图片的轮播数据
          this.topImages = data.itemInfo.topImages;
          // 获取商品信息
          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);
          // 获取商铺信息
          this.shop = new Shop(data.shopInfo);
          // 商品详情信息
          this.detailInfo = data.detailInfo;
          // 商品参数信息
          this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);
          // 评论信息
          if(data.rate.cRate!=0){
            this.commentInfo = data.rate.list[0];
          }
        });
      },
      // 获取推荐信息
      getRecommend(){
        getRecommend().then(res=>{
          // console.log(res);
          this.recommend = res.data.list
        });
      }
    },
    watch:{
      $route(to,from){
        const {iid} = this.$route.query;
         console.log('================================'+iid);
         // 更新数据
         // 获取保存iid
         this.iid = iid;
         this.iid = '1m1d2os';
         // 获取详情数据
         this.getDetail();
         // 获取推荐数据
         this.getRecommend();
         // 滚动到顶部
         this.$refs.scroll.scrollTo(0,0,0);
      }
    }
  }
</script>

<style scoped>
.detail{
    height: 100vh;
    position: relative;
    background-color: #fff;
    z-index: 9;
  }
  .scroll{
    position: absolute;
    top:44px;
    bottom:49px;
    left:0;
    right: 0;
    overflow: hidden;
  }
</style>
