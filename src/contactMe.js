import React from 'react'
import './contactMe.css'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import SocialMediaIcons from 'react-social-media-icons';

const socialMediaIcons = [

    {
      url: 'https://github.com/thebanterage',
      className: 'fa-github',
    },
    {},
    {
      url: 'https://www.linkedin.com/in/naveenbandarage/',
      className: 'fa-linkedin',
    },
    {},
    {
        url: 'https://twitter.com/naveenbandarage',
        className: 'fa-twitter',
      },
      {},

    {
      url: 'https://www.instagram.com/naveenbandarage/',
      className: 'fa-instagram',
    },
    {},

    {
        url: 'https://open.spotify.com/user/naveen.bandarage?si=CnApMUV6Rw6lnS5x5PccTAs',
        className: 'fa-spotify',
      },
      {},

      {
        url: 'https://www.youtube.com/channel/UCuoL1lIDkSIyMKpDgGAUqhA?sub_confirmation=1',
        className: 'fa-youtube',
      },
  ];

const ContactMe = ()=>{
    
    return (

<div id="contactMe">
    <h1 >Contact Me</h1>
    <p>If you want to find me online these place are where I reside online.</p>
 
    <SocialMediaIcons
  icons={socialMediaIcons}
  iconSize={'1.5em'}
  
  iconColor={'#fa163f'} //change colours here
/>
<p>Otherwise feel free to flick me an email. <br></br>
                <b><a href="mailto:bandaragenaveen@gmail.com">
bandaragenaveen@gmail.com</a></b></p>

</div>
    );
}

export default ContactMe