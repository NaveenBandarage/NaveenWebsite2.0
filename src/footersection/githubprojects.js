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
      fetch('https://api.github.com/repos/PraveentheMachine/ENGR101-Team-2')
        .then(response => response.json())
        .then(json => {
          const { stargazers_count, forks_count } = json;
          setGitHubInfo({
            stars: stargazers_count,
            forks: forks_count,
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
                <span>{<a>githubInfo.stars</a>}</span>
              </span>

              <span>
                <IconFork/>
                <span>{githubInfo.forks}</span>
              </span>
            </div>
          )
        }
    </div>
  );
};

export default Footer;
