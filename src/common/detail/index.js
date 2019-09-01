import React, { Component } from 'react'
import {connect} from 'react-redux';
import {actionCreators} from './store'
import {withRouter} from 'react-router-dom'
import {
  DetailWraper
} from './style'
 class Detail extends Component {
  constructor(props){
    super(props);
    this.state={
     id:""
    };
   }
  getId(){
    const index=this.props.location.search.indexOf("=");
    const id=this.props.location.search.slice(index+1);
    this.setState({
      id:id
    })
  }
   componentDidMount(){
    console.log(this.props);
    this.getId();
    this.props.getDetailData();
   }
  render() {
    const {detailDatalist}=this.props;
    return (
      <DetailWraper>
      {/* {this.props.match.params.id} 
         上面是动态路由传参，下面是路由传参的另一种形式,通常用上面这种方式 
        {this.state.id}*/}
        <h3 className="detailTitle">{detailDatalist.get('detailTitle')}</h3>
        <img src={detailDatalist.get('detailImg')} alt="" className="detailImg" />
        {/* dangerouslySetInnerHTML将里面的标签解析 */}
        <p className="detailContent" dangerouslySetInnerHTML={{__html:detailDatalist.get('detailContent')}}>
        </p>
      </DetailWraper>
    )
  }
}
const mapStateToProps=(state)=>{
  return{
    detailDatalist:state.getIn(['detail','detailDatalist'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getDetailData(){
      dispatch(actionCreators.detailData())
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));
//export default connect(mapStateToProps,mapDispatchToProps)(Detail);