<template>
  <div class="goods_detai_info">
    <div class="detail_top">
       {{detailInfo.desc}}
    </div>
    <div v-for="(item,index) in detailInfo.detailImage" class="detail_img">
      <div class="img_title">{{item.key}}</div>
      <div v-for="(item1,index1) in item.list" class="img_box">
        <img :src="item1" alt="" @load="imageLoad">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailGoodsInfo",
    data(){
      return {
        imageCounter:0,
        imageLength:0
      }
    },
    props:{
      detailInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    methods:{
      imageLoad(){
        this.imageCounter++;
        // 加载完最后一张后发射事件，刷新Better-Scroll组件
        if(this.imageCounter===this.imageLength){
          this.$emit('detailImageLoad');
        }
      }
    },
    watch:{
      detailInfo(){
        for(let item of this.detailInfo.detailImage){
          if( item.list){
            this.imageLength += item.list.length;
          }
        }
      }
    }
  }
</script>

<style scoped>
  .goods_detai_info{

  }
  .goods_detai_info .detail_top{
    padding:40px 10px;
    font-size: 16px;
  }
  .goods_detai_info .detail_img {

  }
  .goods_detai_info .detail_img .img_title{
    padding:10px;
    font-size: 18px;
    font-weight: bold;
  }
  .goods_detai_info .detail_img .img_box{
    padding:0 10px;
  }
  .goods_detai_info .detail_img .img_box img{
    width: 100%;
    margin-bottom:5px;
    vertical-align: middle;
  }

</style>
