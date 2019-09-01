import React, { Component } from 'react'
import Banner from './componts/banner'
import Recomend from './componts/recomend'
import Topic from './componts/topic'
import Writer from './componts/writer'
import TwoCode from './componts/twoCode'
import './home.css'
import {
  HomeWrapper,
  RightWrapper,
  LeftWrapper,
  Top
} from './style.js'
 class Home extends Component {
   constructor(props){
     super(props);
     this.state={

     }
     this.top=this.top.bind(this);
   }
  render() {
    return (
      <div className='main'>
        <HomeWrapper>
          <LeftWrapper>
            <Banner/>
            <Topic/>
          </LeftWrapper>
          <RightWrapper>
            <Recomend/>
            <TwoCode/>
            <Writer/>
          </RightWrapper>
          <Top onClick={this.top}>
            回到顶部
          </Top>
        </HomeWrapper>
        </div>
    )
  }
  top(){
    window.scrollTo(0,0)
  }
}
export default Home