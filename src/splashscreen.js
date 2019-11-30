import React from 'react'
import Typed from 'react-typed';
const splashScreen = () =>{

    return(
        //need to do more work on this make this the actual home screen
<div>
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
  strings={["Here you can find hardware", "Here you can find software", "Here you can find net tools"]}
  typeSpeed={50}
  backSpeed={50}
  backDelay={1}
  loop
  smartBackspace
/>
</div>
            </div>


    );
}
export default splashScreen