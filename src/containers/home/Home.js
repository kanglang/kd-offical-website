import React, { Component } from 'react';
import './css/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        
        <div className="Home-one">
          <p>重庆, 科技之都，魅力之都！</p>
        </div>
        <div className="Home-two">
          <p>- 重庆康道文化传媒 -</p>
          <p className="h-indent">重庆康道文化传媒是国内领先的社区服务生活平台运营商和解决方案提供商, 是以智慧城市建设为主要方向，以信息产业的前沿技术为主攻领域，以应用于社区创新业态为突破口的服务型传媒公司。</p>
        </div>
        <div className="Home-three">- 当前业务 -</div>
        <div className="Home-three-img">
          <p>微信小程序</p>
          <p>微信公众号</p>
          <p>手机App开发</p>
          <p>网站开发</p>

        </div>
        <div className="Home-four">-- 愿景展望 --</div>
        <div className="Home-four-img">
          <p>商务咨询</p>
          <p>广告设计</p>
          <p>翻译服务</p>
          <p>形象设计</p>
        </div>
        <div className="Home-four">
          <p></p>
          <p>谓之动西</p>
          <p>谓之动西</p>
          <p>谓之动西</p>
        </div>
      </div>
    );
  }
}

export default Home;
