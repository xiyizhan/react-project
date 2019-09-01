import * as constance from './constance'
import axios from 'axios'
import {fromJS} from 'immutable'
const topicSearch=(data)=>({
    type:constance.TOPIC,
    data:fromJS(data)
})

export const getTopicListData=()=>{
    return(dispatch)=>{
        axios.get('/api/topicList.json').then((res)=>{
            const {data}=res.data;
            dispatch(topicSearch(data))
        }).catch((error)=>{

        })
    }
}
const topicSearchMore=(data,nextPage)=>({
    type:constance.TOPICMORE,
    data:fromJS(data),
    nextPage:nextPage
})
export const getLoadMore=(page)=>{
    return(dispatch)=>{
        axios.get('/api/topicList.json?topicPage='+page).then((res)=>{
            const {data}=res.data;
            dispatch(topicSearchMore(data,page+1))
        }).catch((error)=>{
        })
    }
}
const getRecomendData=(data)=>({
    type:constance.RECOMENDLISTS,
    data
})
export const getRecomendLists=()=>{
    return(dispatch)=>{
        axios.get('/api/recomend.json').then(res=>{
            const {data}=res.data;
            dispatch(getRecomendData(data))
        }).catch(error=>{

        })
    }
}
