import React from "react";
import { motion } from "framer-motion";
import { PageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

function ContactUs() {
  return (
    <ContactStyle
      variants={PageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <Hide>
          <H2 variants={titleAnim}>Get in touch.</H2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us a Message</h2>
          </Social>
        </Hide>
      </div>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us a Message</h2>
          </Social>
        </Hide>
      </div>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Us a Message</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #343434;
  min-height: 90vh;
  background-color: #ffff;
  @media(max-width:1500px){
    padding:2rem;
    font-size: 1rem;
  }
`;
const H2 = styled(motion.h2)`
  font-weight: bolder;
`;

const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media(max-width:1500px){
   margin-top: 5rem;
     }
`;

const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
