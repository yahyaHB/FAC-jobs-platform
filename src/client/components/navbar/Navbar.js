import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Sort from '../admindashborad/sort';

import './navbar.css';

class Navbar extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {
    this.props.propsNav.history.push('/profilesettings');
  }
  render() {

    return (
      <div>
        <div className='navbar'>
          <div className='logo'>
            <img src='/assets/logo.png' className='logo' alt='star' />
          </div>
          {(this.props.allStudents)?
            <Sort students={this.props}/>:<div/>}
          {(this.props.coming==='AdminDashboard')?<div/>:
            <div className='rightSideNav'>
              <i className='far fa-bell bell'></i>
              <div className='dropdown'>
                <i className='fas fa-sliders-h dropbtn'></i>
                <div className='dropdown-content'>
                  <a onClick={this.handleSubmit}>Settings
                    <i className='fas fa-cog settings'></i></a>
                  <a href='/api/v1/logout'>Logout
                    <i className='fas fa-sign-out-alt settings'></i></a>
                </div>
              </div>
            </div>}
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  propsNav: PropTypes.obj,
  allStudents: PropTypes.obj,
  coming: PropTypes.str
};
export default Navbar;
