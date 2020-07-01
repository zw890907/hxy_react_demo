import request from '@/utils/request';
// import { axios } from "@/utils/request";

/**
 * 获取app应用列表接口
 */
export function getAppList(data) {
    return request.get('/v2/tab/2?start=0');
    // return axios.get('/v2/tab/2?start=0');
}