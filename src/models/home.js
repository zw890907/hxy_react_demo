import { getAppList } from '@/api';
import { saveDataCommon } from '@/utils';
// import { message } from 'antd';

export default {
    state: {
        appListData: {}
    },
    reducers: {
        saveData: saveDataCommon
    },
    effects: {
        async getAppListData(data) {
            try {
                const res = await getAppList(data)
                console.log(res)
            } catch(error) {
                console.log(error)
            }
        }
    }
}