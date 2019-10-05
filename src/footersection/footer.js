import React from 'react';
//import GitHub from './footersection/github.png';
import Twitter from 'src/footersection/github.png'
import Spotify from 'src/footersection/github.pngg'
import Instagram from 'src/footersection/github.png'
import LinkedIn from 'src/footersection/github.pngg'
const footerPart = () =>{

    return(

       <div id="AboutMeSection">
                 <div class="overlay-effect"></div>
                <ul id='overlay'>
                    <li className="linkedin"><a href="https://www.linkedin.com/in/naveenbandarage/" target = "_blank"><img className="linkedin"src={LinkedIn} width="32" height="32" ></img></a></li>
                    <li className="twitter"><a href="https://twitter.com/naveenbandarage" target = "_blank"><img className="twitter"src={Twitter} width="32" height="32" ></img></a></li>
                    {/* <li className="github"><a href="https://github.com/thebanterage/" target = "_blank"><img className="github"src={GitHub} width="32" height="32" ></img></a></li> */}
                    <li className="instagram"><a href="https://www.instagram.com/naveenbandarage/" target = "_blank"><img className="instagram"src={Instagram} width="32" height="32" ></img></a></li>
                    <li className="spotify"><a href="https://open.spotify.com/user/naveen.bandarage?si=vg_7-oZxR52MbBvCdKdFRg" target = "_blank"><img className="github"src={Spotify} width="32" height="32" ></img></a></li>
                </ul>
                <div class="overlay">  </div>
                <p>Otherwise feel free to flick me an email.</p>
                <p><b><a href="mailto:bandaragenaveen@gmail.com"> 
bandaragenaveen@gmail.com</a></b></p>
<div className="sitemaker">
            <p>This site was made with: <a href="https://reactjs.org/">
React</a></p>
<p>Icons made by Freepik from www.flaticon.com</p>
          </div>
                </div>   

    );
}
export default footerPart
