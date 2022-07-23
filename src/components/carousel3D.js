import React, {useState} from 'react';
import Modal from 'react-modal';
import Carousel, {slidesToShowPlugin, slidesToScrollPlugin}  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import github from '../icons/github.png';
import box_and_ball from '../media/box_and_ball.gif';
import mech_arm from '../media/mech_arm.gif';
import goldberg from '../media/goldberg.gif';

const ImageSlider3D = () => {
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
      <img className="gif" alt="box_and_ball_gif" src={box_and_ball}/>
      <img className="gif" alt="mech_arm_gif" src={mech_arm}/>
      <img className="gif" alt="goldberg_gif" src={goldberg}/>
	  </Carousel>
    );
  };


export default ImageSlider3D;
