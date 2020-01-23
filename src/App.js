import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Aboutme from './aboutme'
import NavBar from './navbar'
import './aboutme.css'
import ImageGrid from './imagegrid'
import './imagegrid.css'
import SplashScreen from './splashscreen'
import ContactMe from './contactMe'
import SocialMediaIcons from 'react-social-media-icons';


// import FooterPart from './footersection/footer';

class App extends Component {
  // Initialize state
  state = { projects: [] };

  // On load
  componentDidMount() {
      this.getProjects();
  }

  // Set state with our projects
  getProjects = () => {
    fetch('/api/projects')
        .then(res => res.json())
        .then(projects => this.setState({projects}));
  }
  
  

  render() {
      const { projects } = this.state;
     
      // const Footer = () => {
      //   const [githubInfo, setGitHubInfo] = useState({
      //     stars: null,
      //     forks: null,
      //   });
      
      //   useEffect(() => {
      //     if (process.env.NODE_ENV !== 'production') {
      //       return;
      //     }
      //     fetch('https://api.github.com/repos/bchiang7/v4')
      //       .then(response => response.json())
      //       .then(json => {
      //         const { stargazers_count, forks_count } = json;
      //         setGitHubInfo({
      //           stars: stargazers_count,
      //           forks: forks_count,
      //         });
      //       })
      //       .catch(e => console.error(e));
      //   }, []);

        return (
          <div className="App">
            <NavBar/>
            <SplashScreen/>
              <Aboutme/>
         <ImageGrid/>
             <ContactMe/>
            
              {
                  projects.length ? (
                      projects.map((project, index) => (
                          <div key={project.name}>
                              <p><b><a href={project.html_url}>{project.name}</a></b></p>
                              <p>{project.description}</p>
                          </div>
                      ))
                  ) : (
                      <div>
                          I don't have any projects
                      </div>
                  )
              }


          </div>
      );
  }
}
export default App;