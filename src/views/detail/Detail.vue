<template>
  <div id="detail">
    <DetailNavBar></DetailNavBar>
    <DetailSwiper :topImages="topImages"></DetailSwiper>
    <DetailBaseInfo :goods="goods"></DetailBaseInfo>
    <DetailShopInfo :shop="shop"></DetailShopInfo>
  </div>
</template>

<script>
  import DetailNavBar from './childcomponents/DetailNavBar.vue';
  import DetailSwiper from './childcomponents/DetailSwiper.vue';
  import DetailBaseInfo from './childcomponents/DetailBaseInfo.vue';
  import DetailShopInfo from './childcomponents/DetailShopInfo.vue';

  import {getDetail,Goods,Shop} from 'network/detail.js';

  export default {
    name:"Detail",
    data(){
      return {
        iid:null,
        // 顶部图片
        topImages:[],
        goods:{},
        shop:{}
      }
    },
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo
    },
    created(){
      // 获取保存iid
      this.iid = this.$route.query.iid;
      // 获取详情数据
      this.getDetail();
    },
    methods:{
      // 获取详细信息
      getDetail(){
        getDetail(this.iid).then(res=>{
          const data = res.result;
          // 顶部图片
          this.topImages = data.itemInfo.topImages;

          this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);

          this.shop = new Shop(data.shopInfo);
        });
      }
    }
  }
</script>

<style>

</style>
