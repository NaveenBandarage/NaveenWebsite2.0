import React from 'react'
import './contactMe.css'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import SocialMediaIcons from 'react-social-media-icons';

const socialMediaIcons = [

    {
      url: 'https://github.com/thebanterage',
      className: 'fa-github',
    },
    {
      url: 'https://www.linkedin.com/in/naveenbandarage/',
      className: 'fa-linkedin',
    },
    {
        url: 'https://twitter.com/naveenbandarage',
        className: 'fa-twitter',
      },
    {
      url: 'https://www.instagram.com/naveenbandarage/',
      className: 'fa-instagram',
    },
    {
        url: 'https://open.spotify.com/user/naveen.bandarage?si=CnApMUV6Rw6lnS5x5PccTAs',
        className: 'fa-spotify',
      },
  ];

const ContactMe = ()=>{
    
    return (

<div>
    <h1>Contact Me</h1>
    <p>This is some text for the contact section here.</p>
 
    <SocialMediaIcons
  icons={socialMediaIcons}
  iconSize={'1.5em'}
  iconColor={'#fa163f'} //change colours here
/>


</div>
    );
}

export default ContactMe