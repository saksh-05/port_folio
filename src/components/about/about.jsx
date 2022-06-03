import React from "react";
import { Container, Heading, Para, Footer, Name, Social, Hr } from "./styled";
import Element from "../element";

const About = (props) => {
  return (
    <Container>
      <Heading data-aos="zoom-in-down">Hi there!</Heading>
      <Para data-aos="zoom-in-down">
        <p>
          I am <b>Saurabh Kumar Singh</b>. A <b>Full-Stack Web Developer</b>{" "}
          having specialization in <b>backend & front end development</b>. I
          enjoy creating things that live on internet.
        </p>
        <p>
          My interest in web development started back in 2021 and since then I
          have learnt <b>skills</b> like{" "}
          <b>
            HTML CSS Javascript React NodeJs mongoDb Express NextJs Redux
            Typescript.
          </b>
        </p>
      </Para>
      <Hr></Hr>
      <Footer>
        <Name>
          <h1>Saurabh</h1>
          <h1>Kumar Singh</h1>
        </Name>
        <Social>
          {props.theme === "light" ? (
            <>
              <img
                className="animate__animated animate__swing"
                src={Element.github}
                alt="github"
              />
              <img
                className="animate__animated animate__swing"
                src={Element.linkedin}
                alt="linkedin"
              />
              <img
                className="animate__animated animate__swing"
                src={Element.twitter}
                alt="twitter"
              />
              <img
                className="animate__animated animate__swing"
                src={Element.behance}
                alt="github"
              />
            </>
          ) : (
            <>
              <img
                className="animate__animated animate__swing"
                src={Element.githubDark}
                alt="githubDark"
              />
              <img
                className="animate__animated animate__swing"
                src={Element.linkedinDark}
                alt="linkedinDark"
              />
              <img
                className="animate__animated animate__swing"
                src={Element.twitterDark}
                alt="twitterDark"
              />
              <img
                className="animate__animated animate__swing"
                src={Element.behanceDark}
                alt="githubDark"
              />
            </>
          )}
        </Social>
      </Footer>
    </Container>
  );
};

export default About;
