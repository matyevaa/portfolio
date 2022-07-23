import React, {useState} from 'react';
import Modal from 'react-modal';
import Carousel, {slidesToShowPlugin, slidesToScrollPlugin}  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
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
      <img className="gif" alt="weather website" src={weather}/>
      <img className="gif" alt="nasa website" src={nasa}/>
      <img className="gif" alt="starwars website" src={starwars}/>
      <img className="gif" alt="candy website" src={candy}/>
      <img className="gif" alt="candy website" src={gd}/>
      <img className="gif" alt="weather website" src={selena}/>
      <img className="gif" alt="starwars website" src={dinur}/>
	  </Carousel>
    );
  };


export default ImageSliderReact;
