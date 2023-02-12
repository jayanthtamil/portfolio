import React from 'react';
import HeroImg from '../../../assets/front_img.png';
import ReactIcon from '../../../assets/icons/react.jsx';
import SassIcon from '../../../assets/icons/sass.jsx';
import JavascriptIcon from '../../../assets/icons/javascript.jsx';
import VueJs from "../../../assets/vue.png"
import HTML from "../../../assets/html.png"
import CSS from "../../../assets/css.png"
import TYPESCRIPT from "../../../assets/typescript.png"
import BOOTSTRAP from "../../../assets/bootstrap.png"
import REDUX from "../../../assets/redux.png"
import './HeroSection.styles.scss';

const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-section-wrapper'>
        <div className='hero-img'>
          <img src={HeroImg} alt='' />
        </div>
        <div className='content'>
          <p className='tagline'>Welcome To My Site</p>
          <h1 className='name-info'>
            Hi, I'm <span className='name'>Jayanth</span> <br />
            <span className='info'>a Web Developer</span>
          </h1>
          <p className='description'>
            Creative web developer dedicated to developing and optimizing
            interactive, user-friendly, and feature-rich websites
          </p>
          <div className='best-skills'>
            <h4>Best Skills On</h4>
            <div className='skill-sets flex flex-ai-c'>
            <div className='box-container'>
                <div className='box'>
                  <div className='icon'>
                    <img src={HTML} />
                  </div>
                </div>
                <p className='icon-name'>HTML5</p>
              </div>
              <div className='box-container'>
                <div className='box'>
                  <div className='icon'>
                    <img src={CSS} />
                  </div>
                </div>
                <p className='icon-name'>CSS</p>
              </div>
              <div className='box-container'>
                <div className='box'>
                  <div className='icon'>
                    <JavascriptIcon />
                  </div>
                </div>
                <p className='icon-name'>Javascript</p>
              </div>
              <div className='box-container'>
                <div className='box'>
                  <div className='icon'>
                  <img src={TYPESCRIPT} />
                  </div>
                </div>
                <p className='icon-name'>TypeScript</p>
              </div>
              <div
               className='box-container'>
                <div className='box'>
                  <div className='icon'>
                    <ReactIcon />
                  </div>
                </div>
                <p className='icon-name'>ReactJs</p>
              </div>
              <div className='box-container'>
                <div className='box'>
                  <div className='icon'>
                    <img src={VueJs} />
                  </div>
                </div>
                <p className='icon-name'>VueJs</p>
              </div>
              <div className='box-container'>
                <div className='box'>
                  <div className='icon'>
                    <img src={REDUX} />
                  </div>
                </div>
                <p className='icon-name'>Redux</p>
              </div>
             
              <div className='box-container'>
                <div className='box'>
                  <div className='icon'>
                    <SassIcon />
                  </div>
                </div>
                <p className='icon-name'>Sass</p>
              </div>
              
              <div className='box-container'>
                <div className='box'>
                  <div className='icon'>
                  <img src={BOOTSTRAP} />
                  </div>
                </div>
                <p className='icon-name'>BootStrap</p>
              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
