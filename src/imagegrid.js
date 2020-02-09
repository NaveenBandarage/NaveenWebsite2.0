import React from 'react'
import './imagegrid.css'
import image1 from './image1.JPG'
import image2 from './image2.JPG'
import image3 from './image4.JPG'


const imageGrid = () =>{


    return(
      <div id="passionProjects">
                 <br></br>

      <h1>Passion || Projects</h1>
      <p>These are the things I'm I am currently heavily invested in doing these things when I'm not coding:</p>
      <p>Feel free to explore them</p>
      <h2>Film Photography</h2> 
      <p>The camera I primarily use to take photos is the <a href="https://camerapedia.fandom.com/wiki/Olympus_OM-101_/_OM-88" target = "_blank">Olympus OM-101</a>. However I have been playing around with a Kodak disposable camera.</p>
      {/* Got to make a seperate page for these photos*/}
      <h2>Anime</h2>
      <p>I love anime and manga. I'm a huge shonen weeb. The series as of time of writing that I'm invested are My Hero Academia, Haikyu, One piece, Demon Slayer, Dr. Stone, Fire Force and (insert more here if think) : </p>
      {/* Make ap page for all the animes I'm watching */}
      <h2>Digital Photography and Videography</h2>
      <p>The camera that I have been using is the Canon m50 with a 14-55 Lens.</p>
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