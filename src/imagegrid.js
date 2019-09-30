import React from 'react'
import './imagegrid.css'
import image1 from './image1.JPG'
import image2 from './image2.JPG'
import image3 from './image4.JPG'

const imageGrid = () =>{

    return(
    <div class="row">
        <p>Test</p>
  <div class="column">
    <img src={image1}width="100%"></img>
    </div>
  <div class="column">
  <img src={image2} width="100%"></img>
  </div>
  <div class="column">
  <img src={image3} width="100%"></img>
  </div>
</div> 
    );
}
export default imageGrid