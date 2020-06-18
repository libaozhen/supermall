<template>
 <div id="home">
    <NavBar class="home_nav">
      <div slot="center">购物街</div>
    </NavBar>
 </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
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
      NavBar
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
