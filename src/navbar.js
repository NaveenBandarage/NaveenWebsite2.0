import React from 'react'
import './navbar.css'
import logo from './naveenlogo.png'

const navbar = () =>{

    return(

       <div id="navbar">
      <img className="logoImage" src={logo} width="64" height="64"></img>
        </div>   

    );
}
export default navbar