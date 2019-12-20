import React from 'react';
import logo from './logo.svg';
import './App.css';
import Aboutme from './aboutme'
import NavBar from './navbar'
import './aboutme.css'
import ImageGrid from './imagegrid'
import './imagegrid.css'
import SplashScreen from './splashscreen'
import ContactMe from './contactMe'
import Projects from './api/projects'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { Component } from 'react';


// import FooterPart from './footersection/footer';

class Section extends React.Component {

  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {

    Events.scrollEvent.register('begin', function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log("end", arguments);
    });

  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {

    let goToContainer = new Promise((resolve, reject) => {

      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });

      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });

    });

    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

}

class App extends Component {
  // Initialize state
  state = { projects: [] };

  // On load
  componentDidMount() {
      this.getProjects();
  }

  // Set state with our projects
  getProjects = () => {
      fetch('api/projects')
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

export default App;
