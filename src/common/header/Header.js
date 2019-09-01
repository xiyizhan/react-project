import React, { Component }  from 'react'
import {connect} from 'react-redux';
import {actionCreators} from './store'
import {actionCreators as loginActionCreators} from '../login/store'
import {Link,withRouter} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Input,
    Addition,
    Button,
    SearchWrap,
    HotSearch,
    SearchTitle,
    SearchItem,
    SearchItemWrap,
} from './style.js'
class Header extends Component {
  getList(){
    const {flag,list,page,totalPage,mouseEnterEvent,mouseLeaveEvent,show,changeData}=this.props;
    const jsList=list.toJS();
    const newList=[];
    for(let i =(page-1)*10;i<page*10;i++){
      if(jsList[i]){
        newList.push(<SearchItem key={jsList[i]}>{jsList[i]}</SearchItem>)
      }
    }
    if(flag || show){
      return(
        <HotSearch onMouseEnter={mouseEnterEvent} onMouseLeave={mouseLeaveEvent}>
          <SearchTitle className="titleLeft">热门搜索</SearchTitle>
          <SearchTitle className="titleRight" onClick={()=>changeData(page,totalPage,this.spinIcon)}><span ref={(icon)=>{this.spinIcon=icon}} className='icon iconfont spin'>&#xe637;</span>换一批</SearchTitle>
          
          <SearchItemWrap>
            {newList}
          </SearchItemWrap>
        </HotSearch>
      )
    }else{
      return null;
    }
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    const {flag,focusHandleInput,blurHandleInput,list,login,back,history}=this.props;
    console.log(login)
    return (
      <HeaderWrapper>
        <Link to="/home">
           <Logo />
        </Link>
        
       <Nav>
         <NavItem className="left active">首页</NavItem>
         <NavItem className="left">下载App</NavItem>
         <NavItem className="right">Aa</NavItem>
             {
              /*
              下面是执行代码之后又进行路由跳转
               login?<NavItem className="right" onClick={()=>{back();history.push('/aa')}}>退出</NavItem>: <Link to='/login'><NavItem className="right">登录</NavItem></Link> 
               */ 
              login?<NavItem className="right" onClick={back}>退出</NavItem>: <Link to='/login'><NavItem className="right">登录</NavItem></Link>
            } 
         <SearchWrap>
            <Input className={flag?'focused':''} onFocus={()=>focusHandleInput(list)} onBlur={blurHandleInput}></Input>
            <span className={flag?'focused icon iconfont zoom':'icon iconfont zoom'}>&#xe623;</span>
            {this.getList()}
         </SearchWrap>
       </Nav>
       <Addition>
          <Link to="/register">
            <Button className='reg'>注册</Button>
          </Link>
          <Link to="/write"><Button className="writting"><span className="icon iconfont">&#xe624;</span>写文章</Button></Link>
       </Addition>
      </HeaderWrapper>
    )
  }
}
/* react-redux实现的 */
const mapStateToProps=(state)=>{
  return{
    //下面两个是等效的
    //flag:state.get('header').get('flag')
    flag:state.getIn(['header','flag']),
    list:state.getIn(['header','list']),
    page:state.getIn(['header','page']),
    totalPage:state.getIn(['header','totalPage']),
    show:state.getIn(['header','show']),
    login:state.getIn(['login','login'])
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
    /* 搜索输入框获取焦点事件 */
    focusHandleInput(list){
      /* 判断list是否有值，减少不必要的数据请求 */
      if(list.size===0){
        dispatch(actionCreators.getListData())
      }
      dispatch(actionCreators.searchFocus())
    },
    /* 搜索输入框实焦事件 */
    blurHandleInput(){
      dispatch(actionCreators.searchBlur())
    },
    /* 鼠标移入热搜事件 */
    mouseEnterEvent(){
      dispatch(actionCreators.mouseEnter())
    },
     /* 鼠标移出热搜事件 */
    mouseLeaveEvent(){
      dispatch(actionCreators.mouseLeave())
    },
    /* 点击换一批事件 */
    changeData(page,totalPage,spinIcon){
      /*旋转动画*/
      let spinDeg=spinIcon.style.transform.replace(/[^0-9]/ig,'');
      if(spinDeg){
        spinDeg=parseInt(spinDeg,10);
      }else{
        spinDeg=0
      }
      spinIcon.style.transform='rotate('+(spinDeg+360)+'deg)'
        /*加载下一页数据*/
      if(page<totalPage){
        dispatch(actionCreators.changeDataList(page+1))
      }else{
        dispatch(actionCreators.changeDataList(1))
      }
      
    },
    back(){
     dispatch(loginActionCreators.loginOut());
    }
  }
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Header))
//export default connect(mapStateToProps,mapDispatchToProps)(Header)