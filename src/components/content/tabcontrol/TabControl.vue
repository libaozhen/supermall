<template>
  <div class="tab-control">
    <div class="tab-control-item" v-for="(item,index) in titles" @click="itemClick(index)">
      <span :class="{'tab-control-active':index==current_index?true:false}">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:"TabControl",
    data(){
      return {
        current_index:0
      }
    },
    props:{
      titles:{
        type:Array,
        default(){
          return []
        }
      }
    },
    computed:{
      isActive(index){
        console.log(index);
        return true
      }
    },
    methods:{
      itemClick(index){
        this.current_index = index;
        this.$emit('tabClick',index);
      }
    }
  }
</script>

<style>
  .tab-control {
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 16px;
    background-color: #fff;
  }
  .tab-control-item{
    flex:1;
  }

   .tab-control-item span{
       padding:5px 20px;
   }
  .tab-control-item .tab-control-active{
    color:var(--color-high-text);
    border-bottom: 3px solid var(--color-tint);
  }
</style>
