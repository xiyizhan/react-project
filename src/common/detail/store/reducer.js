import * as constance from './constance'
import {fromJS} from 'immutable'
const defaultState=fromJS({
    detailDatalist :{}
 });
export default (state=defaultState,action)=>{
     switch(action.type){
        case constance.DETAIL:
        return state.set('detailDatalist',fromJS(action.data))
        default:
        return state;
     }
}