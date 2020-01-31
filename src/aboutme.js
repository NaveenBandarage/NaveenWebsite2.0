import React from 'react'
import './aboutme.css'
import PDF from './naveencv_compressed.pdf'


const aboutMe = () =>{

    return(
//About me section for the code about me 
       <div id="AboutMeSection">
                <h1 id="aboutme">Welcome to my website!</h1>
                <h2>About me</h2>
 <p>Hello, welcome to my website!</p> 
 <p> I'm Naveen, a third-year software engineering student studying at the Victoria University of Wellington. </p>
 <p> I am highly motivated and finished my first two years with flying colours. </p> <p>I am at this stage looking for a Summer internship to further develop and refine the skills I have.</p>
 <p> My long term aspiration is to eventually work in the Cybersecurity field.</p>  <p>Please note this website is a work in progress so there are some bugs that need to be worked out.</p>
 <p>Here are some of the languages I am working with</p> 
                <ul className="ColoredList">
                   <li>Java</li>
                   <li>C++</li>
                  <li>C</li>
                  <li>Sql</li>
                  <li>Go</li>
                  </ul>
             <ul className="ColoredList">
                 <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Python</li>
              </ul>
              
                <h2>Education</h2>
                <div className="education">
                 <p><a href="https://www.wgtn.ac.nz/" target = "_blank">Victoria University of Wellington</a> - Bachelor of Engineering with Honours</p>
                 <p>March 2017 - Present</p>
                 <p><a href="http://www.heretaunga.school.nz/" target = "_blank">Heretaunga College</a> - Graduated as Proxime Accessite with NCEA Levels 1,2, and 3 excellence endorsed (99, 90, 72 credits respectively) </p>
                 <p>February 2013 - December 2017</p>
                 <h2 className="wantMoreInformation">Want more information?</h2>  
                 <p className="clickhere"> Click <a href ={PDF} target = "_blank">here.</a></p>       
                </div>
                </div>   

    );
}
export default aboutMe