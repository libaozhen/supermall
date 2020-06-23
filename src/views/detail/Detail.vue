<template>
  <div id="detail" class="detail">
    <DetailNavBar></DetailNavBar>
    <Scroll ref="scroll" class="scroll" :probe-type="3" :pull-up-load="true">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailBaseInfo :goods="goods"></DetailBaseInfo>
      <DetailShopInfo :shop="shop"></DetailShopInfo>
      <DetailGoodsInfo :detailInfo="detailInfo" @imageLoad="imageLoad"></DetailGoodsInfo>
      <DetailParamInfo :paramInfo="paramInfo"></DetailParamInfo>
      <DetailCommentInfo :commentInfo="commentInfo"></DetailCommentInfo>
      <RecommendList :goods="recommend"></RecommendList>
    </Scroll>
  </div>
</template>

<script>
  // 滚动组件
  import Scroll from 'components/common/scroll/Scroll.vue'

  import RecommendList from 'components/content/goods/RecommendList.vue'

  import DetailNavBar from './childcomponents/DetailNavBar.vue';
  import DetailSwiper from './childcomponents/DetailSwiper.vue';
  import DetailBaseInfo from './childcomponents/DetailBaseInfo.vue';
  import DetailShopInfo from './childcomponents/DetailShopInfo.vue';
  import DetailGoodsInfo from './childcomponents/DetailGoodsInfo.vue';
  import DetailParamInfo from './childcomponents/DetailParamInfo.vue';
  import DetailCommentInfo from './childcomponents/DetailCommentInfo.vue';

  import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail.js';
  import {imageLoadMixin} from 'common/mixin.js';

  export default {
    name:"Detail",
    mixins:[imageLoadMixin],
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
        recommend:[]
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
      RecommendList
    },
    created(){
      // 获取保存iid
      this.iid = this.$route.query.iid;
      // 获取详情数据
      this.getDetail();
      // 获取推荐数据
      this.getRecommend();
    },
    destroyed(){
      // 清除全局总线事件,在混入文件中定义，mixin.js文件中
      this.$bus.$off('imageLoad',this.imageLoadFuc);
    },
    methods:{
      /**
       * DetailGoodsInfo组件图片加载完毕事件
       * */
      imageLoad(){
        this.$refs.scroll.refresh();
      },
      // 获取详细信息
      getDetail(){
        getDetail(this.iid).then(res=>{
          console.log(res.result);
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
          this.recommend = res.data.list
        });
      }
    },
    watch:{
      $route: {
            handler (){
              const {iid} = this.$route.query;
              console.log(iid);
              // 更新数据
              // 获取保存iid
              this.iid = iid;
              // 获取详情数据
              // this.getDetail();
              // 获取推荐数据
              // this.getRecommend();
            },

            immediate: true
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
    bottom:0;
    left:0;
    right: 0;
    overflow: hidden;
  }
</style>
