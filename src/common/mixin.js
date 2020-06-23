import {debounce} from './utils.js'
export const imageLoadMixin = {
  data(){
    return {
      // 图片加载完毕后发出的事件总线函数，方便事件总线卸载该函数
      imageLoadFuc:null
    }
  },
  mounted(){
    //防抖函数
    const refresh = debounce(this.$refs.scroll.refresh,100,false);

    this.imageLoadFuc = ()=>{
      refresh();
    }
    // 监听GoodsList组件发出的事件总线,
    this.$bus.$on('imageLoad',this.imageLoadFuc);
  }
}
