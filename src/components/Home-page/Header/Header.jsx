import React, { useEffect, useState } from 'react';

import { MdSend } from 'react-icons/md';
import { RiMenu3Fill } from 'react-icons/ri';
import { ImLinkedin } from 'react-icons/im';
import { FaGithub } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

import './Header.styles.scss';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [homeActive, setHomeActive] = useState(true);
  const [featureActive, setFeatureActive] = useState(false);
  const [portfolioActive, setPortfolioActive] = useState(false);

  const openMenu = () => {
    setToggleMenu(true);
    setNavbar(false);
  };

  const closeMenu = () => {
    setToggleMenu(false);
  };

  const scrollToFeature = () => {
    setToggleMenu(false);
    const featureSec = document.querySelector('.features');

    const yOffset = -150;

    const y =
      featureSec.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    setFeatureActive(true);
    setHomeActive(false);
    setPortfolioActive(false);
  };

  const scrollToPortfolio = () => {
    setToggleMenu(false);
    const portfolioSec = document.querySelector('.projects');

    const yOffset = -80;

    const y =
      portfolioSec.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    setFeatureActive(false);
    setHomeActive(false);
    setPortfolioActive(true);
  };

  const scrollToContact = () => {
    setToggleMenu(false);
    const contactSec = document.querySelector('.contact-section');

    const yOffset = -100;

    const y =
      contactSec.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    setFeatureActive(false);
    setHomeActive(false);
    setPortfolioActive(false);
  };

  const scrollToHero = () => {
    setToggleMenu(false);
    const heroSec = document.querySelector('.hero-section');

    const yOffset = -100;

    const y =
      heroSec.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });

    setFeatureActive(false);
    setHomeActive(true);
    setPortfolioActive(false);
  };

  useEffect(() => {
    const featureSec = document.querySelector('.features');
    const portfolioSec = document.querySelector('.projects');
    const contactSec = document.querySelector('.contact-section');

    const handleScroll = (e) => {
      let scrollY = window.pageYOffset;

      // For the Hero section
      if (window.scrollY >= 0 && window.scrollY <= window.innerHeight / 2) {
        setFeatureActive(false);
        setHomeActive(true);
        setPortfolioActive(false);
      }

      // For the Feature section
      else if (
        scrollY > featureSec.offsetTop - 100 &&
        scrollY <= featureSec.offsetTop - 100 + featureSec.offsetHeight
      ) {
        setFeatureActive(true);
        setHomeActive(false);
        setPortfolioActive(false);
      }

      // For the Portfolio section
      else if (
        scrollY > portfolioSec.offsetTop - 100 &&
        scrollY <= portfolioSec.offsetTop - 100 + portfolioSec.offsetHeight
      ) {
        setFeatureActive(false);
        setHomeActive(false);
        setPortfolioActive(true);
      }

      // For the Contact section
      else if (
        scrollY > contactSec.offsetTop - 180 &&
        scrollY <= contactSec.offsetTop - 180 + contactSec.offsetHeight
      ) {
        setFeatureActive(false);
        setHomeActive(false);
        setPortfolioActive(false);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const navbarScroll = () => {
      const scroll = window.scrollY;

      if (scroll >= 45 && !toggleMenu) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };

    window.addEventListener('scroll', navbarScroll);

    return () => {
      window.removeEventListener('scroll', navbarScroll);
    };
  });

  return (
    <div className='header'>
      <div
        style={{ display: toggleMenu ? 'block' : 'none' }}
        onClick={closeMenu}
        className='bg-overlay'
      ></div>
      <header className={navbar ? 'nav-active' : ''}>
        <nav className='container-lg'>
          <div className='text-logo'>
            <h1>TJ</h1>
          </div>
          <div className='nav-menu'>
            <div className='menu-items'>
              <ul>
                <li
                  onClick={scrollToHero}
                  className={homeActive ? 'active-menu' : ''}
                >
                  Home
                </li>
                <li
                  onClick={scrollToFeature}
                  className={featureActive ? 'active-menu' : ''}
                >
                  Features
                </li>
                <li
                  onClick={scrollToPortfolio}
                  className={portfolioActive ? 'active-menu' : ''}
                >
                  Portfolio
                </li>
                <li
                  onClick={scrollToContact}
                  className='contact-btn flex flex-ai-c'
                >
                  Contact Me
                  <span className='send-icon flex flex-ai-c'>
                    <MdSend />
                  </span>
                </li>
              </ul>
            </div>
            <div onClick={openMenu} className='menu-icon cursor-p'>
              <RiMenu3Fill />
            </div>
            <div
              style={{ display: toggleMenu ? 'block' : 'none' }}
              className='sidebar-menu-items'
            >
              <div className='heading flex flex-ai-c flex-jc-sb'>
                <div className='logo-text'>
                  <h3>TJ</h3>
                </div>
                <div onClick={closeMenu} className='close-icon'>
                  <IoClose />
                </div>
              </div>
              <ul>
                <li
                  onClick={scrollToHero}
                  className={homeActive ? 'active-menu' : ''}
                >
                  Home
                </li>
                <li
                  onClick={scrollToFeature}
                  className={featureActive ? 'active-menu' : ''}
                >
                  Features
                </li>
                <li
                  onClick={scrollToPortfolio}
                  className={portfolioActive ? 'active-menu' : ''}
                >
                  Portfolio
                </li>
                <li
                  onClick={scrollToContact}
                  className='contact-btn flex flex-ai-c'
                >
                  Contact Me
                </li>
                <div className='find-me'>
                  <h4 className='title'>Find Me</h4>
                  <div className='social-links flex flex-ai-c'>
                    <div className='box-container flex flex flex-jc-c flex-ai-c'>
                      <div className='icon flex flex-ai-c'>
                        <ImLinkedin />
                      </div>
                    </div>
                    <div className='box-container flex flex flex-jc-c flex-ai-c'>
                      <div className='icon flex flex-ai-c'>
                        <FaGithub />
                      </div>
                    </div>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
