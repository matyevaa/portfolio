import React, {useState} from 'react';
import Modal from 'react-modal';
import Carousel, {slidesToShowPlugin, slidesToScrollPlugin}  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import github from '../icons/github.png';
import android_netflix from '../media/android_netflix.gif';
import android_weather from '../media/android_weather.gif';

const ImageSliderMobile = () => {
  return (
    <div className="mobile">
      <div className="container">
        <LazyLoadImage  effect="opacity" id="android_weather" className="gif_android" alt="android_weather_gif" src={android_weather}/>
        <div className="popup">
          <h2>Weather Forecast</h2>
          <p>I've used the OpenWeather API and Emotion styling to create a simple weather app that can disgithub a daily forecast for a city specified by the user.</p>
          <ul className="tags">
            <li>React</li>
            <li>Emotion</li>
            <li>API</li>
            <a className="insidePop" href="https://github.com/matyevaa/weather-app" target="_blank"><img className="icons" id="github" alt="github" src={github}/></a>
          </ul>
        </div>
      </div>
      <div className="container">
        <LazyLoadImage  effect="opacity" id="android_netflix" className="gif_android" alt="android_netflix_gif" src={android_netflix}/>
        <div className="popup">
          <h2>Weather Forecast</h2>
          <p>I've used the OpenWeather API and Emotion styling to create a simple weather app that can disgithub a daily forecast for a city specified by the user.</p>
          <ul className="tags">
            <li>React</li>
            <li>Emotion</li>
            <li>API</li>
            <a className="insidePop" href="https://github.com/matyevaa/weather-app" target="_blank"><img className="icons" id="github" alt="github" src={github}/></a>
          </ul>
        </div>
      </div>
    </div>
    );
  };


export default ImageSliderMobile;
