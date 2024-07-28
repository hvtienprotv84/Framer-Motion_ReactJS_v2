import React from "react";
// import home1 from "../img/home1.png";
import Wave from "./Wave";
// Styled
import { StyleLayout } from "../styles.js";

// Frame Motion
import { motion } from "framer-motion";
import { titleAnimate, fade, photoAnimate } from "../animation";
const AboutSection = () => {

  return (
    <StyleLayout>
      <div className="description">
        <motion.div>
          <div className="hide">
            <motion.h2 variants={titleAnimate}>
              Huỳnh Vĩnh <span>Tiến</span>
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h3 variants={titleAnimate}>Front-End Developer.</motion.h3>
          </div>
        </motion.div>
        <motion.p variants={fade}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </div>
      <div className="image">
        <motion.img variants={photoAnimate}  initial="hidden" animate="show" src="https://www.espine.in/blog/wp-content/uploads/2022/08/software-developer.jpg" alt="guy with a camera" />
      </div>
      <Wave />
    </StyleLayout>
  );
};

export default AboutSection;
