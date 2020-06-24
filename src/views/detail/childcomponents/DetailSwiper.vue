<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(item,index) in topImages" :key="index">
      <img :src="item" @load="imageLoad"/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  // 局部引用vue-awesome-swiper组件
  import 'swiper/css/swiper.css';
  import {Swiper,SwiperSlide} from 'vue-awesome-swiper';

  export default{
    name:"DetailSwiper",
    data(){
      return {
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
      topImages:{
        type:Array,
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
      imageLoad(){
        this.$emit('detailImageLoad');
      }
    }
  }
</script>

<style scoped>
  .swiper {
    height: 300px;
  }
  .swiper-slide img{
    width:100%;
  }
</style>
