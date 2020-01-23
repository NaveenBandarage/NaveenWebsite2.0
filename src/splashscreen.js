import React from 'react'
import Typed from 'react-typed';
import './splashscreen.css'
const splashScreen = () =>{

    return(
        //need to do more work on this make this the actual home screen
        <div className="view">
<div className='TypedStrings'>
                <Typed 
                    strings={["Hey I'm Naveen!", "Hey I'm ナヴィーン", "Hey I'm نفين", "Hey I'm 나빈", "Hey I'm Ναβεεν", "Hey I'm Навеен", "Hey I'm 纳温"]}   
                    loop
                    smartBackspace
                    typeSpeed={75}
                    backSpeed={100}
                />
                                    <br/>

                {/* <Typed
                strings={["Welcome to my Website!"]} 
                startDelay={1000} 
                typeSpeed={40}
            /> */}
               
                {/* <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed> */}
                <div>
<Typed
  strings={["I'm a Coder.", "I'm a Otaku.", "I'm a Developer.","I'm a Sports fan.","I'm a Amateur photographer."]}
  typeSpeed={75}
  backSpeed={100}
  backDelay={1}
  loop
  smartBackspace
/>
</div>
            </div>
<p>Currently a third year software engineering student at the <a href="https://www.wgtn.ac.nz/" target = "_blank">Victoria University of Wellington</a>.</p>
            </div>
    );
}
export default splashScreen