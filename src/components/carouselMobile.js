import React, {useState} from 'react';
import Modal from 'react-modal';
import Carousel, {slidesToShowPlugin, slidesToScrollPlugin}  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import github from '../icons/github.png';
import android_netflix from '../media/android_netflix.gif';
import android_weather from '../media/android_weather.gif';

const ImageSliderMobile = () => {
  return (
    <div className="mobile">
      <div className="container">
        <LazyLoadImage  effect="blur" id="android_weather" className="gif_android" alt="android_weather_gif" src={android_weather}/>
        <div className="popup">
          <h2>Weather Forecast</h2>
          <p>I've used the OpenWeather API to create a weather app for Android written in Kotlin.</p>
          <ul className="tags">
            <li>Kotlin</li>
            <li>Android</li>
            <li>API</li>
            <a className="insidePop" href="https://github.com/matyevaa/weather-app" target="_blank"><img className="icons" id="github" alt="github" src={github}/></a>
          </ul>
        </div>
      </div>
      <div className="container">
        <LazyLoadImage  effect="blur" id="android_netflix" className="gif_android" alt="android_netflix_gif" src={android_netflix}/>
        <div className="popup">
          <h2>Movie Time</h2>
          <p>An app for Android written in Kotlin for tracking movies that the user has watched and for keeping tracking of upcoming releases.</p>
          <ul className="tags">
            <li>Kotlin</li>
            <li>Android</li>
            <a className="insidePop" href="https://github.com/matyevaa/weather-app" target="_blank"><img className="icons" id="github" alt="github" src={github}/></a>
          </ul>
        </div>
      </div>
    </div>
    );
  };


export default ImageSliderMobile;
