<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item,index) in banners">
      <a :href="item.link"><img :src="item.image" @load="swiperImageLoad"/></a>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  // 局部引用vue-awesome-swiper组件
  import 'swiper/css/swiper.css';
  import {Swiper,SwiperSlide} from 'vue-awesome-swiper';

  export default {
    name:"HomeSwiper",
    data(){
      return {
        // 图片是否加载完毕
        imageIsLoad:false,
        swiperOption: {
          autoplay:true,
          speed: 300,
          loop: true,//开启循环模式
          initialSlide:1,//默认显示第一张图
          pagination: {
            el:".swiper-pagination", //分页器作用对象
            clickable: true //分页器小圆点是否可点击
          }
        }
      }
    },
    props:{
      banners:{
        type:Array,
        // 对象和数组返回默认值这里必须是函数
        default(){
          return []
        }
      }
    },
    components:{
      Swiper,
      SwiperSlide
    },
    methods:{
      swiperImageLoad(){
        // 因为home.vue中要计算tabcontrol的offsetTop属性，只要一张图片加载完毕就可以获取到正确的
        // 所以只发射一次事件就可以了
        if(!this.imageIsLoad){
          this.$emit('swiperImageLoad');
          this.imageIsLoad = true;
        }
      }
    }
  }
</script>

<style>
  .swiper-slide img{
    width:100%;
  }
</style>
