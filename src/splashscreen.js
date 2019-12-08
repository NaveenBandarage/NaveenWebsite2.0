import React from 'react'
import Typed from 'react-typed';
import './splashscreen.css'
const splashScreen = () =>{

    return(
        //need to do more work on this make this the actual home screen
<div className='TypedStrings'>
                <Typed 
                    strings={["Hey I'm Naveen ;)"]}                     
                    typeSpeed={40}
                 
                />
                                    <br/>

                <Typed
                strings={["Welcome to my Website!"]} 
                startDelay={10000} 
                typeSpeed={40}
             
            />
                <br/>
 
                <Typed
                strings={[
                    'Search for products',
                    'Search for categories',
                    'Search for brands']}
                    typeSpeed={40}
                    backSpeed={50}
                    attr="placeholder"
                    loop >
                    <input type="text"/>
                </Typed>
                <div>
<Typed
  strings={["I'm a coder.", "I'm a Otaku.", "I'm a Developer.","I'm a Sports fan.","I'm a Amateur photographer.",]}
  typeSpeed={75}
  backSpeed={100}
  backDelay={1}
  loop
  smartBackspace
/>
</div>
            </div>


    );
}
export default splashScreen