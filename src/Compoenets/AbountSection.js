import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../Styles";
import { motion } from "framer-motion";
import { fade, titleAnim, photoAnim } from "../animation";
import Wave from "./Wave";
import styled from "styled-components";
function AbountSection() {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <H2 variants={titleAnim}>We work to make</H2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Your <span>dream</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for photographt and videoagraphy and anything we will help
          youe get your goal.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="Guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
}
const H2 = styled(motion.h2)`
  font-weight: bold;
`;
export default AbountSection;
