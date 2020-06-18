import axios from 'axios';

const request = function(config){

  let baseURL = "http://localhost/SDJZC/WechatApplet/Interface";

  // 创建axios实例
  const instance = new axios.create({
    // 默认请求的根路径
    baseURL:baseURL,
    // 默认请求过期时间5秒
    timeout:5000
  });

  //拦截器
  instance.interceptors.request.use(config=>{
    console.log("request拦截器success方法");
    return config;
  },err=>{
    console.log("request拦截器failure方法");
    console.log(err);
    return err;
  });

  instance.interceptors.response.use(response=>{
    console.log("response拦截器的success方法中");
    return response.data
  },err=>{
    console.log("reponse拦截器failure方法");
    console.log(err);

    return err;
  });

  return instance(config)
}

export default request;
