import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import{
  RecomendWraper
}from '../style'
import {actionCreators} from '../store'
 class Recomend extends Component {
   componentDidMount(){
     this.props.getRecomendListsMethod()
   }
  render() {
    const {recomendList}=this.props;
    return (
      <RecomendWraper>
        <ul>
          {
            recomendList.map((item,index)=>{
              return(
                <li key={item.get('id')}>
                  <Link  to={item.get('path') }>
                    <img src={item.get('src')} alt="" />
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </RecomendWraper>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    recomendList:state.getIn(['home','recomendList'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getRecomendListsMethod(){
      dispatch(actionCreators.getRecomendLists())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Recomend)