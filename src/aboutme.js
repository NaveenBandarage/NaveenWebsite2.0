import React from 'react'
import './aboutme.css'
import PDF from './naveencv_compressed.pdf'


const aboutMe = () =>{

    return(
//About me section for the code about me 
       <div id="AboutMeSection">
                <h1 id="aboutme">Welcome to my website!</h1>
                <br></br>
  <div className="AboutmeParagraph">
  <h2>ABOUT ME</h2>
 <p> I'm Naveen, a third-year software engineering student studying at the Victoria University of Wellington. At this stage of my 20 year old life I am looking for a Summer internship to further develop my skills as well as learn new ones!</p>
 <p>I like to think I'm multilingual, the languages I speak are Java, C, C++, React, Javascript, HTML, CSS, Python and of course English. I am trying to learn french as well as Go and Sql on the side.</p>
 <br></br>
 </div>
                
                <div className="education">
                <h2>EDUCATION</h2>
                 <p><a href="https://www.wgtn.ac.nz/" target = "_blank">Victoria University of Wellington</a> - Bachelor of Engineering with Honours <br></br>March 2017 - Present</p>
                 <p><a href="http://www.heretaunga.school.nz/" target = "_blank">Heretaunga College</a> - Graduated as Proxime Accessite with NCEA Levels 1,2, and 3 excellence endorsed (99, 90, 72 credits respectively)<br></br>February 2013 - December 2017</p>
                 <br></br>
                 <h2 className="wantMoreInformation">WANT MORE INFORMATION?</h2>  
                 <p className="clickhere">That's just a small sample of what I've studied, learned and my skills. It's 2020 no one has time read everything. Click <a href ={PDF} target = "_blank">here</a> to check out my full resume.</p>       

                </div>
                </div>

    );
}
export default aboutMe