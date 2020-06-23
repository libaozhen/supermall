<template>
  <div class="comment_info" v-if="Object.keys(commentInfo).length>0">
    <div class="comment_title_box">
      <span class="title">用户评价</span>
      <span class="more">更多>></span>
    </div>
    <div class="comment_user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="comment_text">
      {{commentInfo.content}}
    </div>
    <div class="info-other">
      <span class="date">{{commentInfo.created|showDate}}</span>
      <span>{{commentInfo.style}}</span>
    </div>
    <div class="info-images">
        <img :src="item" alt="" v-for="item in commentInfo.images">
    </div>
  </div>
</template>

<script>
  import {formatDate} from 'common/utils.js';

  export default {
    name:"DetailCommentInfo",
    props:{
      commentInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters:{
      showDate(value){
        let date = formatDate(value,'yyyy-MM-dd hh:ss');
        return date
      }
    }
  }
</script>

<style scoped>
  .comment_info{
    padding-bottom: 30px;
    border-bottom: 3px solid #eee;
  }
  .comment_title_box{
    height:50px;
    line-height: 50px;
    font-size: 16px;
    border-bottom: 1px solid #eee;
  }
  .comment_title_box .title{
    float: left;
    margin-left:10px;
  }
  .comment_title_box .more{
    float: right;
    margin-right: 20px;
  }
  .comment_user{
    height: 70px;
    line-height: 70px;
    padding-left: 10px;
  }
  .comment_user img{
    width:48px;
    height:48px;
    vertical-align: middle;
    border-radius: 50px;
  }
  .comment_user span{
    margin-left:10px;
  }
  .comment_text{
    font-size: 14px;
    padding:5px 10px;
    color:#a3a2a3;
  }
  .info-other{
    font-size: 14px;
    padding:5px 10px;
    color:#a3a2a3;
  }
  .info-other .date{
    margin-right: 10px;
  }
  .info-images{
    padding: 10px;
  }
  .info-images img{
    width:80px;
    margin-right: 6px;
    border-radius: 3px;
  }
</style>
