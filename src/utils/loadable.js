/** 
 * 路由懒加载
*/
import React from 'react';
import Loadable from 'react-loadable';
import loadingImg from '@/common/images/defLoading.gif'

export default (loader) => {
    return Loadable({
        loader,
        loading() {
            return (
                <div>
                    {/* <span>正在加载...</span> */}
                    <img src={loadingImg} alt="" />
                </div>
            )
        },
    });
}