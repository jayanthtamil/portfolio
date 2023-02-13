import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosDesktop } from "react-icons/io";
import BACKEND from "../../../assets/backend.png";
import "./Features.styles.scss";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <div className="features">
      <div className="features-wrapper">
        <div className="title-heading">
          <p className="title">Features</p>
          <h3 className="heading">What I do</h3>
        </div>

        <div data-aos="fade-up" className="box-wrapper">
          <div className="box-row-1">
            <div className="box">
              <div className="content">
                <div className="icon">
                  <IoIosDesktop />
                </div>
                <h3 className="box-title">Front-End Development</h3>

                <p className="text">
                  I strive to meticulously build a website, making each detail
                  match user vision. I enjoy bringing ideas to life in the
                  browser.
                </p>
              </div>
            </div>
            <div className="box">
              <div className="content">
                <div className="shopify icon">
                 
                  <img src={BACKEND} />
                </div>
                <h3 className="box-title">Learning Back-End Development</h3>
                <p className="text">
                  I am started to learn node js, express js to know what is
                  happening in the server side.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
