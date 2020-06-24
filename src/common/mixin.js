import {debounce} from './utils.js';
import BackTop from 'components/content/backtop/BackTop.vue';
export const imageLoadMixin = {
  data(){
    return {
      // 图片加载完毕后发出的事件总线函数，方便事件总线卸载该函数
      imageLoadFuc:null,
      refresh:null
    }
  },
  mounted(){
    //防抖函数
    this.refresh = debounce(this.$refs.scroll.refresh,300,false);

    this.imageLoadFuc = ()=>{
      this.refresh();
    }
    // 监听GoodsList组件发出的事件总线,
    this.$bus.$on('imageLoad',this.imageLoadFuc);
  }
}


export const backTopMixin = {
  data(){
    return {
      isShowBackTop:false
    }
  },
  components:{
     BackTop
  },
  methods:{
    // 返回顶部点击事件
    backTopClick(){
      // 调用滚动组件的scrollTo方法
      this.$refs.scroll.scrollTo(0,0,500);
    }
  }
}
