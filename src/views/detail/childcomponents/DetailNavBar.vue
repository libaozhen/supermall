<template>
  <div>
    <NavBar class="navbar">
      <div slot="left" class="left" @click="goBack">
        <img src="~assets/images/common/back.svg" alt="">
      </div>
      <div slot="center" class="title_box">
        <div
          class="title_box_item"
          v-for="(item,index) in titles"
          :class="{title_active:currentIndex===index}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
      <div slot="right"></div>
    </NavBar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar.vue';
  export default {
    name:"DetailNavBar",
    data(){
      return {
        titles:['商品','参数','评论','推荐'],
        currentIndex:0
      }
    },
    components:{
      NavBar
    },
    methods:{
      itemClick(index){
        this.currentIndex = index;
        this.$emit('titleClick',index);
      },
      goBack(){
        this.$router.push({
          path:'/home'
        });
      }
    }
  }
</script>

<style scoped>
  .title_box{
    display: flex;
    text-align: center;
    font-size: 14px;
  }
  .title_box_item{
    flex:1;
  }
  .title_active{
    color:var(--color-high-text)
  }
  .left img{
    vertical-align:center;
    width:24px;
    margin-top:10px;
  }
</style>
