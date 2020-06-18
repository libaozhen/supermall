<template>
  <div class="recommendbox">
     <div class="recommend-item" v-for="(item,index) in recommends">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}}</div>
        </a>
     </div>
  </div>
</template>

<script>
  export default {
    name:"RecommendView",
    props:{
      recommends:{
        type:Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style>
  .recommendbox{
    display:flex;
    text-align: center;
    font-size: 14px;
    border-bottom: 10px solid #eee;
    padding:8px 0 30px;
  }
  .recommendbox .recommend-item{
    flex:1;
  }
  .recommendbox .recommend-item img{
    width:80%;
    margin-top: 10px;
    margin-bottom:10px;
  }
</style>
