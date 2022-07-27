import React from 'react';
import {useNavigate} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import amr from '../media/amr_transparent.png';
import snake from '../media/snake.png';
import photo from '../media/photo2.jpg';
import resume from '../media/Resume.pdf';
import install from '../icons/install.png';
import github from '../icons/github.png';
import instagram from '../icons/insta.png';
import linkedin from '../icons/linkedin.png';
import gmail from '../icons/gmail.png';


const Main = () => {

  const navigate = useNavigate();

  function handleClick() {
    navigate("/works");
  }

  function handleClickHome() {
    let imageToSpin = document.getElementById('snake');
    imageToSpin.classList.toggle('rotated')
    console.log("rotate! main");
    setTimeout(function() {
      console.log("navigate!");
      navigate("/");
   }, 200);
  }

  return (
    <body className="main_body">
    <div className="main_div">
      <div className="logo" onClick={handleClickHome}>
        <img id="snake" alt="AMR Logo Snake" src={snake}/>
        <img id="amr" alt="AMR Logo" src={amr}/>
      </div>

      <div className="main_page">
        <div className="column left">
          <div className="text_paragraph">
            <p className="green_text">hi, my name is</p>
            <h1 id="name">Alima M. Roman</h1>
            <p>and i am a computer scientist (legit).</p>
            <p>my focus area is web and VR development.</p>
            <p>i am from Kyrgyzstan but work and live in Seattle, WA.</p>
            <p>i like coding and creating!</p>
            <p>i seek to contribute to outstanding projects related to my focus area
              - contact me if you think we should work together!</p>
            <div className="btns">
              <button className="resume_btn"><a href={resume} download="resume_alima">resume</a><img className="icons" alt="install icon" src={install}/></button>
              <p className="green_text" id="explore" onClick={handleClick}>explore my works</p>
            </div>
          </div>
        </div>

        <div className="column right">
          <LazyLoadImage effect="opacity" id="photo" src={photo}/>
        </div>

      </div>
      <div className="social_media">
        <a href="https://github.com/matyevaa" target="_blank"><img className="icons" id="github" alt="github" src={github}/></a>
        <a href="https://www.instagram.com/peaceminus15" target="_blank"><img className="icons" id="insta" alt="instagram" src={instagram}/></a>
        <a href="https://www.linkedin.com/in/amatyeva/" target="_blank"><img className="icons" alt="linkedin" id="linkedin" src={linkedin}/></a>
        <a href="mailto:amatyeva1505@egmail.com?subject=From Portfolio Website&body=Hey, I've just looked at your portfolio!"><img className="icons" alt="gmail" id="gmail" src={gmail}/></a>
      </div>
    </div>
    </body>
  );
};

export default Main;
