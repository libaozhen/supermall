<template>
  <div class="goods_box">
    <div class="goods_item" v-for="(item,index) in goods" :key="index" @click="goToDetail(item.iid)">
       <!-- <img :src="item.show.img" alt="" @load="imageLoad"> -->
       <img v-lazy="item.show.img" alt="" @load="imageLoad">
       <div class="goods_info">
          <p>{{item.title}}</p>
          <span class="price">￥{{item.price}}</span><span class="collect">{{item.cfav}}</span>
       </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"GoodsList",
    props:{
      'goods':{
        type:Array,
        default(){
          return []
        }
      }
    },
    computed:{

    },
    methods:{
      imageLoad(){
        // 方式一
        // this.$emit('imageLoad');
        // 如果是多个子组件，不能直接发送事件到home，则可以利用事件总线方式传递
        this.$bus.$emit('imageLoad');
      },
      // 跳转到详情页
      goToDetail(iid){
        // console.log(iid);
        this.$router.push({
          path:'/detail',
          query:{
            iid
          }
        });
      }
    }
  }
</script>

<style>
  .goods_box{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    padding:4px;
  }
  .goods_box .goods_item{
    width:48%;
  }
  .goods_box .goods_item img{
    width: 100%;
    border-radius:5px;
  }
  .goods_box .goods_item .goods_info{

  }
 .goods_box .goods_item .goods_info p{
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
 }
 .price{
    color:var(--color-high-text);
 }
 .collect::before{
    content:'';
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('~assets/images/home/collect.png') no-repeat 0px 5px;
 }
</style>
