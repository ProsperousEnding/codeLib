import request from "@/request/index.js"

/**
 * @description 获取导航网站
 */
export function getNavWebsite(data){
    return request({
        method:"post",
        url:'/website/nav',
        data:data,
    });
}
