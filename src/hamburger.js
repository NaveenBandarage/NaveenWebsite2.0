import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu'
import './hamburger.css'
import logo from './naveenlogo.png'
import PDF from './naveencv_compressed.pdf'

 class Hamburger extends React.Component {
  showSettings (event) {
    event.preventDefault();
   //testing to see if i can push from vscode. 
  }
 
  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu right>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="#AboutMeSection"> About</a>
        <a id="contact" className="menu-item" href="#contactMe">Contact</a>
        <a id="cv" className="menu-item" href={PDF}>Resume</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu>
    );
  }
}
export default Hamburger