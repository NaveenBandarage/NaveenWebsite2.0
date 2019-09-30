import React from 'react'
import './navbar.css'
import logo from './naveenlogo.png'

const navbar = () =>{

    return(
        <header className='navbar'>
        <nav className='navbarnav'>
         
            <div className='navbarlogo'> <img className="logoImage" src={logo} width="64" height="64"></img></div>
            <div className='spacing'></div>
            <div className="navitems">
                <ul>
                    <li><a href="#AboutMeSection"> About</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href ="/" target = "_blank">Resume</a></li>

                </ul>
            </div>
        </nav>
        </header>


    );
}
export default navbar