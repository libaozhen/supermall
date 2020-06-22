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

      if(this.probeType===2||this.probeType===3){
        // 监听滚动事件
        this.bscroll.on('scroll',(position)=>{
          this.$emit('scroll',position);
        });
      }

      if(this.pullUpLoad){
        // 监听上拉刷新事件
        this.bscroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        });
      }
    },
    destroyed(){
      // console.log('Scroll.vue destroyed');
      this.bscroll && this.bscroll.destroy();
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
         // console.log('=====');
        this.bscroll && this.bscroll.refresh();
      },
      getScrollY(){
        return this.bscroll?this.bscroll.y:0
      }
    }
  }
</script>

<style scoped>

</style>
