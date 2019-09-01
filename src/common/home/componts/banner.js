import React, { Component } from 'react'
import {
  BannerWrapper
} from '../style.js'
import { Carousel } from 'antd';
 class Banner extends Component {
  render() {
    return (
      <BannerWrapper>
        <Carousel autoplay>
          <div> <img alt="" src="//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/></div>
          <div> <img alt="" src="//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/></div>
          <div> <img alt="" src="//upload.jianshu.io/admin_banners/web_images/4614/860581df72e818f1c4046b077f6e20ea2069c6ca.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/></div>
          <div> <img alt="" src="//upload.jianshu.io/admin_banners/web_images/4615/62909ce23863ac5f6a1454c7ba407b85af0a17db.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/></div>
          <div> <img alt="" src="//upload.jianshu.io/admin_banners/web_images/4592/2cbadf9347d69cfc140daf64de887fda0e361bcc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/></div>
        </Carousel>
      </BannerWrapper>
    )
  }
}
export default Banner