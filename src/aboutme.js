import React from 'react'
import './aboutme.css'
import PDF from './naveencv_compressed.pdf'


const aboutMe = () =>{

    return(
//About me section for the code about me 
       <div id="AboutMeSection">
                <h1 id="aboutme">Welcome to my website!</h1>
                <h2>About me</h2>
  <div className="AboutmeParagraph">
 <p> I'm Naveen, a third-year software engineering student studying at the Victoria University of Wellington. At this stage of my 20 year old life I am looking for a Summer internship to further develop my skills as well as learn new ones!</p>
 <p>I like to think I'm multilingual, the languages I speak are Java, C, C++, React, Javascript, HTML, CSS, Python and of course English.</p>
 </div>
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