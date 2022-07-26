import React, {useState} from 'react';
import Modal from 'react-modal';
import Carousel, {slidesToShowPlugin, slidesToScrollPlugin}  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import github from '../icons/github.png';
import play from '../icons/play.png';
import box_and_ball from '../media/box_and_ball.gif';
import mech_arm from '../media/mech_arm.gif';
import goldberg from '../media/goldberg.gif';

const ImageSlider3D = () => {


  return (
    <div className="animation">
    <Carousel
      plugins={[
     'centered',
     'infinite',
     'arrows',
    {
      resolve: slidesToShowPlugin,
      options: {
       numberOfSlides: 2,
      },
    },
    {
      resolve: slidesToScrollPlugin,
      options: {
       numberOfSlides: 2,
      },
    },
    ]}
    >
      <div className="container">
        <img className="gif" id="box_and_ball" alt="box_and_ball_gif" src={box_and_ball}/>
        <div className="popup">
          <h2>Ball & Box</h2>
          <p>I've used Maya to animate the interaction of 2 rigged characters to tell a story.
          Camera moves and use of audio support my animation and the story. The frames were rendered with Maya Software renderer and assembled with Adome Premier.</p>
          <ul className="tags">
            <li>Maya</li>
            <li>3D Animation</li>
            <li>Adobe Premier</li>
            <a className="insidePop" href="https://youtu.be/7UpR1OV7ztQ" target="_blank"><img className="icons" id="play" alt="play" src={play}/></a>
          </ul>
        </div>
      </div>
      <div className="container">
        <img className="gif" id="mech_arm" alt="mech_arm_gif" src={mech_arm}/>
        <div className="popup">
          <h2>Mech Arm</h2>
          <p>I've used Maya to create my own animated story with use of Lesseter's principles of animation
          and emphasis on motion. The frames were rendered with Maya Software renderer and assembled with Adome Premier.</p>
          <ul className="tags">
            <li>Maya</li>
            <li>3D Animation</li>
            <li>Adobe Premier</li>
            <a className="insidePop" href="https://youtu.be/Y_39Ktwo02I" target="_blank"><img className="icons" id="play" alt="play" src={play}/></a>
          </ul>
        </div>
      </div>
      <div className="container">
        <img className="gif" id="goldberg" alt="goldberg_gif" src={goldberg}/>
        <div className="popup">
          <h2>Rube Goldberg Factory</h2>
          <p>I've used Maya to animate the character, apply cloth and lighting start in engine, and connect cloth to rod.
          The frames were rendered with Maya Software renderer and assembled with Adome Premier.</p>
          <ul className="tags">
            <li>Maya</li>
            <li>3D Animation</li>
            <li>Adobe Premier</li>
            <a className="insidePop" href="https://youtu.be/RmYG-0xDvTw" target="_blank"><img className="icons" id="play" alt="play" src={play}/></a>
          </ul>
        </div>
      </div>
	  </Carousel>
    </div>
    );
  };


export default ImageSlider3D;
