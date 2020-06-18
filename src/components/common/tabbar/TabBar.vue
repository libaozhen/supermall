<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name:"TabBar"
  }
</script>

<style>
  .tabbar{
    position: fixed;
    bottom: 0;
    left:0;
    right:0;
    height:49px;
    background-color: #f6f6f6;
    display: flex;
    border-top:1px solid #ccc;
  }
</style>
