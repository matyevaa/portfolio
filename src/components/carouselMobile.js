import React, {useState} from 'react';
import Modal from 'react-modal';
import Carousel, {slidesToShowPlugin, slidesToScrollPlugin}  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import github from '../icons/github.png';
import android_netflix from '../media/android_netflix.gif';
import android_weather from '../media/android_weather.gif';

const ImageSliderMobile = () => {
  return (
    <div className="android_div">
      <img className="gif_android" alt="android_weather_gif" src={android_weather}/>
      <img className="gif_android" alt="android_netflix_gif" src={android_netflix}/>
    </div>
    );
  };


export default ImageSliderMobile;
