import * as constance from './constance'
import axios from 'axios'
const getLogin=(login)=>({
    type:constance.LOGIN,
    login
})
export const loginMethods=(user,pass)=>{
    return(dispatch)=>{
        axios.get('/api/login.json?user='+user+"&&pass="+pass).then((res)=>{
            const {loginStatus}=res.data;
           dispatch(getLogin(loginStatus))
        }).catch((error)=>{

        })
    }
}
export const loginOut=()=>({
   type:constance.LOGINOUT,
   value:false
})