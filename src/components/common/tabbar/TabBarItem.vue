<template>
  <div class="tabbar_item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div v-else>
       <slot name="item-icon"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name:"TabBarItem",
    data(){
      return {
        // isActive:true
      }
    },
    props:{
      // 跳转路径
      path:{
        type:String,
        default:""
      },
      // 激活的页签文本颜色
      activeColor:{
        type:String,
        default:"#e95963"
      }
    },
    computed:{
      // 当前tab页签是否是激活状态，判断一下当前的路由的路径和接收的path路径是否相同
      // 相同则证明点击的是该tab页签，则该页签应该处于激活状态
      isActive(){
        return this.$route.path.indexOf(this.path)!=-1?true:false;
      },
      activeStyle(){
        return this.isActive?{color:this.activeColor}:{};
      }
    },
    methods:{
      // tab点击事件
      itemClick(){
        //console.log('itemClick');
        this.$router.push(this.path);
      }
    }
  }
</script>

<style>
  .tabbar_item{
    flex:1;
    text-align: center;
    font-size: 14px;
  }
  .tabbar_item img{
    width:24px;
    height:24px;
    vertical-align:middle;
    margin-top:3px;
    margin-bottom: 2px;
  }
  .active{
    color:#e95963;
  }
</style>
