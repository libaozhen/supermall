<template>
  <div class="scroll_wrapper" ref="scroll_wrapper">
    <div class="scroll_content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll';
  export default {
    name:"Scroll",
    data(){
      return {
        bscroll:null
      }
    },
    props:{
      probeType:{
        type:Number,
        default:0
      },
      pullUpLoad:{
        type:Boolean,
        default:false
      }
    },
    mounted(){
      this.bscroll = new BScroll(this.$refs.scroll_wrapper,{
        probeType:this.probeType,
        click:true,
        // 允许上拉刷新
        pullUpLoad:this.pullUpLoad
      });
      // 监听滚动事件
      this.bscroll.on('scroll',(position)=>{
        this.$emit('scroll',position);
      });
      // 监听上拉刷新事件
      this.bscroll.on('pullingUp',()=>{
        this.$emit('pullingUp')
      });
    },
    methods:{
      // 滚动方法
      scrollTo(x,y,time=300){
        this.bscroll && this.bscroll.scrollTo(x,y,time);
      },
      // 结束本次上拉刷新，否则不进行下一次上拉刷新
      finishPullUp(){
        this.bscroll && this.bscroll.finishPullUp();
      },
      refresh(){
        this.bscroll && this.bscroll.refresh();
      }
    }
  }
</script>

<style scoped>

</style>
