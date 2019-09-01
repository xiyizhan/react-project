import React, { Component } from 'react'
import '../home.css'
 class twoCode extends Component {
  render() {
    return (
      <div>
          <div className="twoCodeWrapper">
              <img alt="" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" className="twocode" />
              <div className="twocodecontent">
                  <p className="twocodeTop">
                      下载简书手机APP >
                  </p>
                  <p className="twocodeBottom">随时随地发现和创作内容</p>
              </div>
          </div>
      </div>
    )
  }
}
export default twoCode;