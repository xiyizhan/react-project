import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
 class Writting extends Component {
  render() {
    const {loginData}=this.props;
    if(loginData){
      return (
        <div>
          xie
        </div>
      )
    }else{
      return <Redirect to="/login" />
    }
   
  }
}
const mapStateToProps=(state)=>{
  return{
    loginData:state.getIn(['login','login']),
  }
}
export default connect(mapStateToProps,null)(Writting) 