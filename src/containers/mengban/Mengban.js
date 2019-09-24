import React, { Component } from 'react';
import './css/Mengban.css';
import { withRouter, NavLink } from 'react-router-dom';

class Mengban extends Component {    
    constructor(props){
        super(props);
        console.log(this.props)
        this.state=({
            page: ''
        });
    }
  goGovWebkit(){
    document.getElementById("Mengban").style.display = "none";
  }
  render() {
    return (
      <div className="Mengban" id="Mengban">
        <div>
          <i className="part1-logo"></i>
          <span className="Mengban-part1">康道文化传媒</span>
        </div>
        {/* <div className="Mengban-part1">
          <p>梦上高原欢迎您</p>
        </div> */}
        <p className="Mengban-part2" onClick={this.goGovWebkit.bind(this)}>进入&nbsp;&nbsp;<span className="transone">></span>&nbsp;<span className="transtwo">></span></p>
        <div className="Mengban-part3">
          <i className="part3-gongzhonghao" title="微信公众号"></i>
          <i className="part3-xiaochengxu" title="微信小程序"></i>  
        </div>
      </div>
    );
  }
}

export default withRouter(Mengban);
