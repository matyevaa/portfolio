import React, {useState} from 'react';
import Modal from 'react-modal';
import Carousel, {slidesToShowPlugin, slidesToScrollPlugin}  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import github from '../icons/github.png';
import weather from '../media/weather.gif';
import starwars from '../media/star_wars.gif';
import candy from '../media/candy.gif';
import gd from '../media/gd.gif';
import selena from '../media/selena.gif';
import dinur from '../media/dinur.gif';
import nasa from '../media/nasa.gif';

const ImageSliderReact = () => {
  return (
    <div className="react">
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
            <LazyLoadImage  effect="blur" className="gif" id="weather" alt="weather website" src={weather}/>
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
            <LazyLoadImage  effect="blur" className="gif" id="nasa" alt="nasa website" src={nasa}/>
            <div className="popup">
              <h2>NASA Mars Rovers Photos</h2>
              <p>The project introduces the user to the three of NASA's rovers and shows the photos taken by them.
              The search allows the user to filter the photo results by the Earth's date and camera type.</p>
              <ul className="tags">
                <li>React</li>
                <li>API</li>
                <a className="insidePop" href="https://github.com/matyevaa/nasa-mars-rovers" target="_blank"><img className="icons" id="github" alt="github" src={github}/></a>
              </ul>
            </div>
          </div>
          <div className="container">
            <LazyLoadImage  effect="blur" className="gif" id="starwars" alt="starwars website" src={starwars}/>
            <div className="popup">
              <h2>Star Wars Database</h2>
              <p>I've used React Router to create a moderately complex, multi-page application based on simulated application data.</p>
              <ul className="tags">
                <li>React</li>
                <li>React-router</li>
                <li>API</li>
                <a className="insidePop" href="https://github.com/matyevaa/star-wars" target="_blank"><img className="icons" id="github" alt="github" src={github}/></a>
              </ul>
            </div>
          </div>
          <div className="container">
            <LazyLoadImage  effect="blur" className="gif" id="candy" alt="candy website" src={candy}/>
            <div className="popup">
              <h2>Candy Store</h2>
              <p>I've used Redux to maintain the global state of an application and implemented a basic shopping cart application for the "Penny Candy Store", an online store that sells penny candy.</p>
              <ul className="tags">
                <li>React</li>
                <li>Redux</li>
                <li>Emotion</li>
                <a className="insidePop" href="https://github.com/matyevaa/candy-store" target="_blank"><img className="icons" id="github" alt="github" src={github}/></a>
              </ul>
            </div>
          </div>
          <div className="container">
            <LazyLoadImage  effect="blur" className="gif" id="gd" alt="gallery website" src={gd}/>
            <div className="popup">
              <h2>Photo Gallery</h2>
              <p>A photo gallery app, where the user can click a button to open a dialog, enter information about photos into that dialog, and see those photos appear in the application when they click the dialog’s "accept" button.</p>
              <ul className="tags">
                <li>React</li>
                <a className="insidePop" href="https://github.com/matyevaa/photo-gallery" target="_blank"><LazyLoadImage className="icons" id="github" alt="github" src={github}/></a>
              </ul>
            </div>
          </div>
          <div className="container">
            <LazyLoadImage  effect="blur" className="gif" id="selena" alt="selena website" src={selena}/>
            <div className="popup">
              <h2>CSS Animations</h2>
              <p>A static animated website with several animation techniques applied.</p>
              <ul className="tags">
                <li>HTML</li>
                <li>CSS</li>
                <li>Animations</li>
                <a className="insidePop" href="https://github.com/matyevaa/selena-gomez" target="_blank"><LazyLoadImage className="icons" id="github" alt="github" src={github}/></a>
              </ul>
            </div>
          </div>
          <div className="container">
            <LazyLoadImage  effect="blur" className="gif" id="dinur" alt="dinur website" src={dinur}/>
            <div className="popup">
              <h2>Kyrgyz Honey</h2>
              <p>A static website dedicated to Kyrgyz honey that was shown at Dubai Honey Presentation by Dinur's Honey Company in 2020.</p>
              <ul className="tags">
                <li>HTML</li>
                <li>CSS</li>
                <a className="insidePop" href="https://github.com/matyevaa/dinurs_honey_company" target="_blank"><LazyLoadImage className="icons" id="github" alt="github" src={github}/></a>
              </ul>
            </div>
          </div>
        </Carousel>
      </div>
    );
  };


export default ImageSliderReact;
