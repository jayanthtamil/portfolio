import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ProjectList } from "./ProjectList";
import { FiExternalLink } from "react-icons/fi";
import "./Project.styles.scss";
import VueJs from "../../../assets/vue.png";
import HTML from "../../../assets/html.png";
import CSS from "../../../assets/css.png";
import TYPESCRIPT from "../../../assets/typescript.png";
import REDUX from "../../../assets/redux.png";

const Project = () => {
  const [project, setProject] = useState(ProjectList);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  });

  return (
    <div className="projects">
      <div className="projects-wrapper">
        <div className="title-heading">
          <p className="title">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
          <h3 className="heading">My Portfolio</h3>
        </div>

        <div className="mobile-project-list">
          {project.map((list, idx) => (
            <div
              data-aos={idx === 1 ? "fade-left" : "fade-right"}
              key={idx}
              className={`project-list project-list-${idx}`}
            >
              <div
                data-aos={idx === 1 ? "fade-right" : "fade-left"}
                className="mockup-img"
              >
                <img src={list.image} alt="" />
              </div>
              <div className="content">
                <h3 className="project-name">{list.title}</h3>
                <p className="description">{list.description}</p>
                <div className="tech-used">
                  <p className="title">Technology Used</p>
                  <div className="tech-stack-used flex flex-ai-c">
                    {list.techStack.map((tech) => (
                      <div key={tech.name} className="box-container">
                        <div className="box">
                          {tech.name === "TYPESCRIPT" ? (
                            <img src={TYPESCRIPT} alt="vue" />
                          ) : tech.name === "REDUX" ? (
                            <img src={REDUX} alt="vue" />
                          ) : tech.name === "VueJs" ? (
                            <img src={VueJs} alt="vue" />
                          ) : tech.name === "HTML" ? (
                            <img src={HTML} alt="html" />
                          ) : tech.name === "CSS" ? (
                            <img src={CSS} alt="css" />
                          ) : (
                            <div className="icon">{tech.icon}</div>
                          )}
                        </div>
                        <p className="icon-name">{tech.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <a href={list.link} target="_blank">
                  <button className="view-site flex flex-ai-c flex-jc-c">
                    View Site
                    <span className="flex flex-ai-c">
                      <FiExternalLink />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
