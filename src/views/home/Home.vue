<template>
  <h2>首页</h2>
</template>

<script>
  import request  from '@/network/request.js'
  export default {
    name:"Home",
    created(){
      // console.log("created");
      request({
        url:"getSwiperData"
      }).then(res=>{
        console.log(res);
      });
    }
  }
</script>

<style>
</style>
