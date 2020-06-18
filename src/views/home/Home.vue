<template>
 <div id="home">
   <!-- 顶部导航栏 -->
    <NavBar class="home_nav">
      <div slot="center">购物街</div>
    </NavBar>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide v-for="(item,index) in banners">
        <a :href="item.link"><img :src="item.image"/></a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
 </div>
</template>

<script>
  // 顶部导航栏组件
  import NavBar from 'components/common/navbar/NavBar.vue';

  // 局部引用swiper组件
  import 'swiper/css/swiper.css';
  import { Swiper,SwiperSlide } from 'vue-awesome-swiper';

  import {getSwiperData} from 'network/home.js';

  export default {
    name:"Home",
    data(){
      return {
        banners:[],
        recommends:[],
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
    components:{
      NavBar,
      Swiper,
      SwiperSlide
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

  .swiper-slide img{
    width:100%;
  }
</style>
