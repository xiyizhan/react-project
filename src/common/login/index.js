import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import './style.css'
import { actionCreators } from './store';
class Login extends Component {
  render() {
    const {login,loginData}=this.props;
    if(!loginData){
      return (
        <div className="loginBox">
            <div className="loginInner">
               <input type="text" className="user" placeholder="账号" ref={(input)=>{this.user=input}} /><br />
               <input type="password" placeholder="密码" className="password" ref={(input)=>{this.password=input}} /> 
               <button className="btn" onClick={()=>login(this.user,this.password)}>登录</button>
            </div>
        </div>
      )
    }else{
      return(
        <Redirect to='/' />
      )
    }
  }
}
const mapStateToProps=(state)=>{
  return{
    loginData:state.getIn(['login','login']),
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
      login(userEle,passwordEle){
        dispatch(actionCreators.loginMethods(userEle.value,passwordEle.value))
      }
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)