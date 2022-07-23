import React, {useState} from 'react';
import Modal from 'react-modal';
import {useNavigate} from "react-router-dom";
import ImageSliderReact from '../components/carouselReact';
import ImageSliderVR from '../components/carouselVR';
import ImageSlider3D from '../components/carousel3D';
import ImageSliderMobile from '../components/carouselMobile';
import amr from '../media/amr_transparent.png';
import snake from '../media/snake.png';
import github from '../icons/github.png';
import play from '../icons/play.png';
import close from '../media/x.png';
import comment from '../icons/comment.png';
import external from '../icons/external.png';
import wiki from '../media/wiki.png';
import kwangya from '../media/kwangya_1.png';
import todd from '../media/todd_k.jpg';
import netflix from '../media/netflix.gif';
import museum from '../media/museum.png';
import weather from '../media/weather.gif';
import starwars from '../media/star_wars.gif';
import candy from '../media/candy.gif';


const Works = () => {


  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const react_projects = [weather, starwars, candy];

  const todd_comment = " ''You set the stage with your initial text for everything that follows.\n\nThe wind speed (visible in the tres) in the otherwise dead city provides an effective contrast. Your use of particles enhances the environments.\n\nSome of your camera work is really impressive, particularly the movement down through the subway at around 2 mins. Your use of 'alien color' (purples and greens) is striking. And the way you handled the eyeball through different cuts and angles was very engaging.\n\nThis is outstanding work. You have created a project that you can proudly show to anyone, including potential employers. Excellent work!'' "
  const professor_k = "Todd Kesterson, New Media Communication Instructor at OSU"

  function handleClickHome() {
    let imageToSpin = document.getElementById('snake');
    imageToSpin.classList.toggle('rotated')
    console.log("rotate! works");
    setTimeout(function() {
      console.log("navigate!");
      navigate("/");
   }, 2000);
  }

  function handleOpenModal() {
    setShowModal(true);
  }

  function handleCloseModal() {
    setShowModal(false);
  }


  return (
      <body className="works_body">
      <div className="main_div">
        <div className="logo" onClick={handleClickHome}>
          <img id="snake" alt="AMR Logo Snake" src={snake}/>
          <img id="amr" alt="AMR Logo" src={amr}/>
        </div>

        <div className="works_page">
          <p className="green_text" id="wow">wow, look what i’ve done here!</p>
        </div>

        <Modal
           isOpen={showModal}
           contentLabel="test"
           onRequestClose={handleCloseModal}
           className="Modal"
           overlayClassName="Overlay"
        >
          <img className="closeIcon" onClick={handleCloseModal} src={close}/>
          <img className="professor_img" src={todd} alt="professor T. Kesterson"/>
          <p className="comment_p">{todd_comment}</p>
          <span className="comment_p" id="professor_who">{professor_k}</span>
        </Modal>

        <div className="works_page" id="featured_1">
          <div className="column2 left2">
            <p className="green_text">featured project</p>
            <h1 className="project_title">WikiFamily</h1>
            <div className="project_descr">
              <p>family tree storage & management
              commercial capstone project with BFS algorithm for
              collapsible family tree list and graph</p>
            </div>
            <ul className="tags">
              <li>Python Flask</li>
              <li>React</li>
              <li>MySQL</li>
            </ul>
            <div className="project_icons">
              <a href="https://youtu.be/Zqjtxcrvdcg" target="_blank"><img className="icons" id="play" alt="play" src={play}/></a>
              <a href="https://github.com/matyevaa/wikifamily" target="_blank"><img className="icons" id="github_works" alt="github" src={github}/></a>
              <a href="https://wikifamilyfront.herokuapp.com/" target="_blank"><img className="icons" alt="external" id="external" src={external}/></a>
            </div>
          </div>

          <div className="column2 right2">
            <img alt="wikifamily website" src={wiki} onClick={()=> window.open("https://github.com/matyevaa/wikifamily", "_blank")}/>
          </div>
        </div>


        <div className="works_page" id="featured_2">


          <div className="column2 right3">
            <img alt="wikifamily website" src={kwangya} onClick={()=> window.open("https://www.youtube.com/watch?v=KjvnKaxpsMU", "_blank")}/>
          </div>

          <div className="column2 left3">
            <p className="green_text">featured project</p>
            <h1 className="project_title">Unity Virtual World</h1>
            <div className="project_descr">
              <p>a video-game-like teaser for my Unity project with built up post-apocalyptic city, metro system, spaceship and the alien with unordinary neon lighting, horror style, and elements of my culture for a unique, personalized style of the narrative.</p>
            </div>
            <ul className="tags">
              <li>Unity</li>
              <li>3D Animation</li>
              <li>C#</li>
            </ul>
            <div className="project_icons">
              <a href="https://www.youtube.com/watch?v=KjvnKaxpsMU" target="_blank"><img className="icons" id="play" alt="play" src={play}/></a>
              <a href="https://github.com/matyevaa/wilderness_virtual_world" target="_blank"><img className="icons" id="github_works" alt="github" src={github}/></a>
              <a><img className="icons" onClick={handleOpenModal} id="comment_works" alt="comment" src={comment}/></a>
            </div>
          </div>

        </div>

        <div className="works_page" id="featured_3">
          <div className="column2 left2">
            <p className="green_text">featured project</p>
            <h1 className="project_title">UE4 Art Museum</h1>
            <div className="project_descr">
              <p>an immersive and interactive contemporary art museum in the virtual reality environment
              focused on surrealism and built in Unreal Engine 4 with unqiue art compositions that can change their behavior
              on interaction.</p>
            </div>
            <ul id="museum_tags" className="tags">
              <li>Unreal Engine 4</li>
              <li>Blueprints</li>
              <li>Virtial Reality</li>
            </ul>
            <div className="project_icons">
              <a href="https://youtu.be/iDk1VoZPQII" target="_blank"><img className="icons" id="play" alt="play" src={play}/></a>
              <a href="https://github.com/matyevaa/wikifamily" target="_blank"><img className="icons" id="github_works" alt="github" src={github}/></a>
            </div>
          </div>

          <div className="column2 right2">
            <img alt="wikifamily website" src={museum} onClick={()=> window.open("https://github.com/matyevaa/wikifamily", "_blank")}/>
          </div>
        </div>

        <div className="sliders">
          <p className="green_text">web development projects</p>
          <ImageSliderReact/>
        </div>

        <div className="sliders" id="sliders_mobile_vr">
          <div className="vr_projects">
            <p className="green_text">virtual reality project</p>
            <ImageSliderVR/>
          </div>
          <div className="mobile_projects">
            <p className="green_text">mobile development projects</p>
            <ImageSliderMobile/>
          </div>
        </div>

        <div className="sliders">
          <p className="green_text">3D animation projects</p>
          <ImageSlider3D/>
        </div>

      </div>
      </body>
    );
  };


export default Works;
