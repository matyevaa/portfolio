import React, {useState} from 'react';
import Modal from 'react-modal';
import Carousel, {slidesToShowPlugin, slidesToScrollPlugin}  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import github from '../icons/github.png';
import museum from '../media/museum.gif';

const ImageSliderVR = () => {
  return (
    <img className="gif" alt="museum gif" src={museum}/>
    );
  };


export default ImageSliderVR;
