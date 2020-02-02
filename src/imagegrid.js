import React from 'react'
import './imagegrid.css'
import image1 from './image1.JPG'
import image2 from './image2.JPG'
import image3 from './image4.JPG'

const imageGrid = () =>{


    return(
    <div class="row">

      <h1>Passion || Projects</h1>
      <p>I am currently heavily invested in doing these things when I'm not coding:</p>
      <p>Feel free to explore them</p>
      <h2>Film Photography</h2> 
      {/* Got to make a seperate page for these photos*/}
      <h2>Anime</h2>
      {/* Make ap page for all the animes I'm watching */}
      <h2>Digital Photography and Videography</h2>
      <h2>Reading</h2>
      {/* Have a page tracking all the books i've read so far. */}
{/* 
  <div class="column">
    <img src={image1}width="100%"></img>
    </div>
  <div class="column">
  <img src={image2} width="100%"></img>
  </div>
  <div class="column">
  <img src={image3} width="100%"></img>
  </div>

  <div className="otherPhotograpy">
<h2>Photography</h2>
  </div>
  <div></div> */}
</div> 
    );
}
export default imageGrid