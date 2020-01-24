import React, { useState, useEffect } from 'react';
import IconStar from './star'
import IconFork from './fork'
import './githubProject.css';

const Footer = () => {
    const [githubInfo, setGitHubInfo] = useState({
      stars: null,
      forks: null,
    });
  
    useEffect(() => {
      if (process.env.NODE_ENV !== 'production') {
        return;
      }
      fetch('https://api.github.com/repos/thebanterage/NaveenShopBot')
        .then(response => response.json())
        .then(json => {
          const { stargazers_count } = json;
          setGitHubInfo({
            stars: stargazers_count,
          });
        })
        .catch(e => console.error(e));
    }, []);
  

// const Footer = () => {
//   const [githubInfo, setGitHubInfo] = useState({
//     stars: null,
//     forks: null,
//   });

//   useEffect(() => {
//     fetch('https://api.github.com/repos/bchiang7/v4')
//       .then(response => response.json())
//       .then(setGitHubInfo)
//       .catch(e => console.error(e));
//   }, []);

  return (
    <div>
        <h1>This is a test</h1>
        {
          githubInfo.stars && githubInfo.forks && (
             <div className="StyledGitHubInfo">
             <span>
                <IconStar/>
                <span>{githubInfo.stars}</span>
              </span>

            </div>
          )
        }
    </div>
  );
};

export default Footer;
