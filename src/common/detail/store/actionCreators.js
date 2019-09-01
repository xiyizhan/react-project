import axios from 'axios'
import * as constance from './constance'
const detailList=(data)=>({
    type:constance.DETAIL,
    data
})
export const detailData=()=>{
    return (dispatch)=>{
        axios.get('/api/detail.json').then((res)=>{
            const {data}=res.data;
            dispatch(detailList(data))
        }).catch((error)=>{

        })
    }
}