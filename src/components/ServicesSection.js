import React from "react";
import { useScroll } from "./useScroll";
// import home2 from "../img/home2.png";

import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import styled from "styled-components";
import { StyleLayout } from "../styles";
import { scrollReveal } from "../animation";
const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      ref={element}
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
    >
      <div className="image">
        <img src="https://cdn.prod.website-files.com/6344c9cef89d6f2270a38908/64dfc8162b86aaaa4236ed07_Header.webp" alt="camera" />
      </div>
      <div className="description right">
        <h2>
          My <span>Skills</span>
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="icon" />
              <h4>Front-End </h4>
            </div>
            <p>Lorem ipsum, dolor sit amet. Lorem ipsum</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphragm} alt="icon" />
              <h4>Back-End</h4>
            </div>
            <p>Lorem ipsum, dolor sit amet. Lorem ipsum</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="icon" />
              <h4>Full-Stack</h4>
            </div>
            <p>Lorem ipsum, dolor sit amet. Lorem ipsum</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="icon" />
              <h3>Designer UI/UX</h3>
            </div>
            <p>Lorem ipsum, dolor sit amet. Lorem ipsum</p>
          </div>
        </div>
      </div>
    </Services>
  );
};

const Services = styled(StyleLayout)`
  .description.right {
    padding-left: 3rem;
  }
  h2 {
    padding-bottom: 4rem;
  }
  p {
    font-size: 1.1rem;
    padding: 1.5rem 0 4rem 0;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    flex: 1 1 50%;
    padding-right: 2rem;
    .icon {
      display: flex;
      align-items: center;
      h3 {
        margin-left: 1rem;
        background: white;
        color: #1b1b1b;
        padding: 0.4rem;
      }
      h4 {
        margin-left: 1rem;
        font-size: 70px;
        background: white;
        color: #1b1b1b;
        padding: 0.4rem;
      }
    }
  }
`;

export default ServicesSection;
