import * as constance from './constance'
import {fromJS} from 'immutable'
const defaultState=fromJS({
   login:false
})
export default (state=defaultState,action)=>{
    switch(action.type){
        case constance.LOGIN:
            return state.set('login',fromJS(action.login));
        case constance.LOGINOUT:
            return state.set('login',false);
        default:
            return state;
    }
}