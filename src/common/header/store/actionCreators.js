import * as constance from './constance'
import axios from 'axios'
import {fromJS} from 'immutable'
const hotSearch=(data)=>({
    type:constance.SEARCH_HOT,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
})
export const changeDataList=(page)=>({
    type:constance.CHANGEPAGE,
    page
})
export const searchFocus=()=>({
    type:constance.SEARCH_FOCUS
})
export const searchBlur=()=>({
    type:constance.SEARCH_BLUR
})
export const mouseEnter=()=>({
    type:constance.MOUSEENTER
})
export const mouseLeave=()=>({
    type:constance.MOUSELEAVE
})

export const getListData=()=>{
    return(dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const {data}=res.data;
            dispatch(hotSearch(data))
        }).catch((error)=>{

        })
    }
}