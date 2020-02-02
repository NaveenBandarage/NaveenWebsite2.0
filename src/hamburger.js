import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import './hamburger.css'

 class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
   //testing to see if i can push
  }
 
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
export default Hamburger