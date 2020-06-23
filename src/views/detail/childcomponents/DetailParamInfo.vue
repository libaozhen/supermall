<template>
  <div class="detailParamInfo" v-if="Object.keys(paramInfo).length>0">
    <div v-for="(table,index) in paramInfo.size" :key="index">
      <table class="param_table">
        <tr v-for="(itemTr,indexTr) in table" :key="indexTr">
          <td v-for="(itemTd,indexTd) in itemTr" :key="indexTd">
            {{itemTd}}
          </td>
        </tr>
      </table>
    </div>
    <table class="param_table">
      <tr v-for="(itemTr,indexTr) in paramInfo.infos" :key="indexTr">
        <td :style="indexTd==='value'?'color:var(--color-high-text)':''" v-for="(itemTd,indexTd) in itemTr" :key="indexTd">
         {{itemTd}}
        </td>
      </tr>
    </table>
    <div class="param_image" v-if="paramInfo.image!=''">
      <img :src="paramInfo.image" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    name:"DetailParamInfo",
    props:{
      paramInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .detailParamInfo{
    padding:0 10px;
    font-size: 14px;
  }
  .param_table{
    width:100%;
  }
  .param_table tr td:nth-child(1){
    width:150px;
  }
  .param_table tr td{
    height:50px;
    border-bottom: 1px solid #eee;
  }
  .param_image img{
    width:100%;
  }
</style>
