import axios from 'axios';

const request = function(config){

  //let baseURL = "http://localhost/SDJZC/WechatApplet/Interface";
  let baseURL = "http://123.207.32.32:8000";

  // 创建axios实例
  const instance = new axios.create({
    // 默认请求的根路径
    baseURL:baseURL,
    // 默认请求过期时间5秒
    timeout:5000
  });

  //拦截器
  instance.interceptors.request.use(config=>{
    // console.log("request拦截器success方法");
    return config;
  },err=>{
    console.log("request拦截器failure方法");
    console.log(err);
    return err;
  });

  instance.interceptors.response.use(response=>{
    // console.log("response拦截器的success方法中");
    return response.data
  },err=>{
    // console.log("reponse拦截器failure方法");
    console.log(err);

    return err;
  });

  return instance(config)
}

export default request;


const url = "http://123.207.32.32:8000/home/multidata";
const baseUrl = "http://localhost/SDJZC/WechatApplet/Interface";
const url1 = baseUrl + "/getSwiperData";
const url2 = "http://123.207.32.32:8000/home/data?type=pop&page=1";
const url3 = "http://123.207.32.32:8000/home/data";
const url4 = baseUrl + "/getGoodsData?cid=23&pageindex=1&pagesize=2";
const url5 = baseUrl + "/getGoodsData";
