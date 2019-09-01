import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
  TopicWraper,
  TopicBox,
  TopicItem,
  LoadMore
} from '../style.js';
import {actionCreators} from '../store'
 class Topic extends Component {
  render() {
    const {topicList,loadMore,topicPage}=this.props;
    return (
      <TopicWraper>
        {
          topicList.map((item,index)=>{
            return(
              <Link to={'/detail/'+item.get('id')} key={index}>
              {/* <Link to={'/detail?id='+item.get('id')} key={index}> */}
                <TopicItem>
                    <TopicBox>
                      <h3>{item.get('title')}</h3>
                      <p>{item.get('content')}</p>
                    </TopicBox>
                    <img src={item.get('url')} className="topic-pic" alt="" />
                </TopicItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={()=>loadMore(topicPage)}>
          阅读更多
        </LoadMore>
      </TopicWraper>
    )
  }
  componentDidMount(){
    this.props.getTopicList()
  }
}
const mapStateToProps=(state)=>{
  return{
    topicList:state.getIn(['home','topicList']),
    topicPage:state.getIn(['home','topicPage'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    getTopicList(){
      dispatch(actionCreators.getTopicListData())
    },
    loadMore(page){
      dispatch(actionCreators.getLoadMore(page))
    }
   
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Topic)