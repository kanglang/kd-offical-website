import React, { Component } from 'react';
import logo from './img/logo.png';
import './css/Header.css';
import { withRouter, NavLink } from 'react-router-dom';
import erweima from './img/erweima.png';

class Header extends Component {    
    constructor(props){
        super(props);
        console.log(this.props)
        this.state=({
            page: ''
        });
    }

    jumpPage=(jumpPage)=>{
        this.setState({page: jumpPage});
        this.props.history.push("/" + jumpPage);
    }

  render() {
      const {page} = this.state;
    return (
      <div className="Header">
        <header className="Header-header">
          <div className="Header-header-left">
            <img src={logo} className="Header-logo" alt="logo" />
            <p className="company-name">康道文化传媒</p>
          </div>
          <div className="Header-header-middle">
            <NavLink activeClassName="active" exact to="/">首页</NavLink>
            <NavLink activeClassName="active" to="/about">关于我们</NavLink>
            <NavLink activeClassName="active" to="/businessShow">产品展示</NavLink>
            <NavLink activeClassName="active" to="/callUs">联系我们</NavLink>
          </div>
          <div className="Header-header-right">
            <img src={erweima} className="Header-erweima" alt="请用手机扫描" title="请用手机扫描" />
          </div>
        </header>
      </div>
    );
  }
}

export default withRouter(Header);
