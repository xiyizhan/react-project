import * as constance from './constance'
import {fromJS} from 'immutable'
const defaultState=fromJS({
    topicList:[],
    topicPage:1,
    recomendList:[]
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case constance.TOPIC:
            return state.set('topicList',fromJS(action.data));
        case constance.TOPICMORE:
            return state.merge({
                'topicList':state.get('topicList').concat(action.data),
                "topicPage":action.nextPage
            })
           // return state.set('topicList',state.get('topicList').concat(action.data))
        case constance.RECOMENDLISTS:
        console.log(action.data);
            return state.set('recomendList',fromJS(action.data));
        default:
            return state;
    }
}