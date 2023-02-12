import React from 'react';
import Contact from '../components/Home-page/Contact/Contact';
import Features from '../components/Home-page/Features/Features';
import Footer from '../components/Home-page/Footer/Footer';
import Header from '../components/Home-page/Header/Header';
import HeroSection from '../components/Home-page/Hero-section/HeroSection';
import Project from '../components/Home-page/Projects/Project';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className='home-page container-lg'>
        <HeroSection />
        <Features />
        <Project />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
