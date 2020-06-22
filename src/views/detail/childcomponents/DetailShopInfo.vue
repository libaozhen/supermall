<template>
  <div class="shopInfo">
    {{shop.name}}
  </div>
</template>

<script>
  export default {
    name:"DetailShopInfo",
    props:{
      shop:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style>
</style>
