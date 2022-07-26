import React, {useState} from 'react';
import Modal from 'react-modal';
import Carousel, {slidesToShowPlugin, slidesToScrollPlugin}  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import github from '../icons/github.png';
import play from '../icons/play.png';
import museum from '../media/museum.gif';

const ImageSliderVR = () => {
  return (
    <div className="vr">
      <div className="container">
        <img className="gif" id="museum" alt="museum gif" src={museum}/>
        <div className="popup">
          <h2>Virtual Reality Gallery</h2>
          <p>A video tour presenting my gazebo, gallery building,  special lighting, and sculpture and paintings props
          to the accompaniment of piano, guitar and violin music.</p>
          <ul className="tags">
            <li>Maya</li>
            <li>3D Animation</li>
            <li>Virtual Reality</li>
            <a className="insidePop" href="https://youtu.be/-mZirc3533s" target="_blank"><img className="icons" id="play" alt="play" src={play}/></a>
          </ul>
        </div>
      </div>
    </div>
    );
  };


export default ImageSliderVR;
