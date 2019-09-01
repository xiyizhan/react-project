import * as constance from './constance'
import {fromJS} from 'immutable'
const defaultState=fromJS({
   flag:false,
   show:false,
   list:[],
   page:1,
   totalPage:1
})
export default (state=defaultState,action)=>{
     /*if(action.type===constance.SEARCH_FOCUS){
        //immutable可以有效避免不小心手动修改state的值
        //immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('flag',true)
        return{
            flag:true
        } 
    }
    if(action.type===constance.SEARCH_BLUR){
        return state.set('flag',false)
    }
    if(action.type===constance.SEARCH_HOT){
        return state.set('list',action.data)
    }
    return state;*/
    switch(action.type){
        case constance.SEARCH_FOCUS:
            return state.set('flag',true)
        case constance.SEARCH_BLUR:
            return state.set('flag',false)
        case constance.SEARCH_HOT:  
            return state.set('list',action.data).set('totalPage',action.totalPage)
        case constance.MOUSEENTER: 
            return state.set('show',true)
        case constance.MOUSELEAVE : 
            return state.set('show',false)
        case constance.CHANGEPAGE : 
            return state.set('page',action.page)
        default:
            return state;
    }
}