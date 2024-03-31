import axios from "axios";
//为拦截器报错所用的弹框，如不需要可以不导入
import { useMessage } from "naive-ui";
const message = useMessage();

const service=axios.create({
    baseURL: 'http://localhost:8980', //基本路径，后面可直接写/方法即可
    withCredentials: false, // 异步请求携带cookie
    // 设置请求头
    headers: {
        // 设置后端需要的传参类型
        // 'Content-Type': 'application/json;charset=UTF-8',
        // 'token': 'your token',
        // 'X-Requested-With': 'XMLHttpRequest',  
         "Access-Control-Allow-Origin": "*",
    },
      //设置请求超时时间
    timeout: 1000*60*5,
});

//*可选
//请求拦截器
service.interceptors.request.use((request)=>{
    console.log("request：",request);
    //配置请求头
    // request.headers.common['Authorization']=window.sessionStorage.getItem('token')===null? null : window.sessionStorage.getItem('token')
   //一定要把处理过的request返回
    return request;
 },
 err=>Promise.reject(err)
 );
 //响应拦截器
 service.interceptors.response.use((response)=>{
    //获取接口返回结果
    const res=response.data
    console.log("response：",response);
    if(res.code===200){
        return res;
    }else{
        message.error(res.data||'网络异常')
        return res;
    }
        // console.log("response：",response);
        // return response;
    },
    (err)=>Promise.reject(err)
 );
 export default service;