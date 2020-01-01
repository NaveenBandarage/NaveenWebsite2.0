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
//               
//               <Projects/>

// class App extends Component {
//   // Initialize state
//   state = { projects: [] };

//   // On load
//   componentDidMount() {
//       this.getProjects();
//   }

//   // Set state with our projects
//   getProjects = () => {
//       fetch('api/projects.js')
//           .then(res => res.json())
//           .then(projects => this.setState({projects}));
//   }

//   render() {
//       const { projects } = this.state;

//       return (
//           <div className="App">
//             <header className="App-header">
//               <img src={logo} className="App-logo" alt="logo" />
//               <p>
//                 Edit <code>src/App.js</code> and save to reload.
//               </p>
//               <a
//                 className="App-link"
//                 href="https://reactjs.org"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Learn React
//               </a>
//             </header>
//             
//           {/* <FooterPart/>  for some reason this doesn't work properly*/}
//           {/* <a onClick={scrollToTop}>To the top!</a> */}
//           {
//                   projects.length ? (
//                       projects.map((project, index) => (
//                           <div key={project.name}>
//                               <p><b><a href={project.html_url}>{project.name}</a></b></p>
//                               <p>{project.description}</p>
//                           </div>
//                       ))
//                   ) : (
//                       <div>
//                           I don't have any projects
//                       </div>
//                   )
//               }

//           </div>
//                       );

//   }
// }
// import './App.css';

// class App extends Component {
//     // Initialize state
//     state = { projects: [] };

//     // On load
//     componentDidMount() {
//         this.getProjects();
//     }

//     // Set state with our projects
//     getProjects = () => {
//         fetch('/api/projects')
//             .then(res => res.json())
//             .then(projects => this.setState({projects}));
//     }

//     render() {
//         const { projects } = this.state;

//         return (
//             <div className="App">

//                 <h1>Hi, my name is TITS</h1>
//                 <h3>I'm a developer</h3>

//                 <h4>Here are a few of my projects</h4>

//                 {
//                     projects.length ? (
//                         projects.map((project, index) => (
//                             <div key={project.name}>
//                                 <p><b><a href={project.html_url}>{project.name}</a></b></p>
//                                 <p>{project.description}</p>
//                             </div>
//                         ))
//                     ) : (
//                         <div>
//                             I don't have any projects
//                         </div>
//                     )
//                 }
//             </div>
//         );
//     }
// }

export default App;
