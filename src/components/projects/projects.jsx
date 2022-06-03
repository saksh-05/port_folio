import React from "react";
import {
  Container,
  Introduction,
  Intro,
  Name,
  Profile,
  Social,
  Work,
  WorkHeading,
  WorkSubHeading,
  Detail,
  ProjectTitle,
  ProjectDetail,
  ProjectDescription,
  ProjectStack,
  ProjectImage,
  Overlay,
  Links,
  GithubLink,
  DemoLink,
  Footer,
  Para,
  FooterHeading,
  Button,
  FooterDetail,
} from "./styled";
import Element from "../element";

const Projects = (props) => {
  return (
    <Container className="container">
      <Introduction>
        <div className="item">
          <Intro data-aos="fade-down" data-aos-anchor=".container">
            Hi my name is
          </Intro>
          <Name data-aos="fade-down">Saurabh Kumar Singh</Name>
          <Profile data-aos="fade-down">Full Stack Developer</Profile>
        </div>
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
      </Introduction>
      <Work>
        <div
          data-aos="fade-right"
          style={{ display: "flex", alignItems: "center" }}
        >
          <div>
            <WorkHeading>My Work</WorkHeading>
            <WorkSubHeading>Somethings I have built</WorkSubHeading>
          </div>
          <hr></hr>
        </div>
        <Detail data-aos="zoom-in-down">
          <ProjectImage>
            <Overlay style={{ right: "auto" }}></Overlay>
            <img
              src={Element.chat_app}
              height="352px"
              width="632px"
              alt="projectimage"
            />
          </ProjectImage>
          <ProjectDetail>
            <ProjectTitle>Chatting web app</ProjectTitle>
            <ProjectDescription>
              This is a chatting web app. Using this app users can send messages
              to others and stay connected with like-minded people. Users can
              add new groups. Users can see their previous chats and can connect
              to any no of channels they like.
            </ProjectDescription>
            <ProjectStack>
              ReactJs NodeJs Firebase ExpressJs Styled-Component
            </ProjectStack>
            <Links>
              <GithubLink>
                {props.theme === "light" ? (
                  <a
                    href="https://github.com/saurabhtopthon01/chatting_app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Element.github} alt="github" />
                  </a>
                ) : (
                  <a
                    href="https://github.com/saurabhtopthon01/chatting_app"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Element.githubDark} alt="githubDark" />
                  </a>
                )}
              </GithubLink>
              <DemoLink>
                {props.theme === "light" ? (
                  <a
                    href="https://chatting-dev-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Element.demo} alt="demo" />
                  </a>
                ) : (
                  <a
                    href="https://chatting-dev-app.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Element.demoDark} alt="demoDark" />
                  </a>
                )}
              </DemoLink>
            </Links>
          </ProjectDetail>
        </Detail>
        <div style={{ marginTop: "6rem" }}></div>
        <Detail data-aos="zoom-in-down">
          <ProjectDetail>
            <ProjectTitle style={{ textAlign: "left" }}>
              Shopping Cart
            </ProjectTitle>
            <ProjectDescription style={{ right: "0rem" }}>
              This is a shopping list-making web app. Using this app users can
              make a list of items from the provided menu. Users can add items
              and categories to the menu. Users can see their shopping history
              and analytics when they have made shopping and analytics about
              their current shopping list. Users can cancel the list.
            </ProjectDescription>
            <ProjectStack style={{ textAlign: "left" }}>
              NextJs Redux Typescript MongoDB Styled-component Vercel
            </ProjectStack>
            <Links style={{ justifyContent: "start" }}>
              <GithubLink>
                {props.theme === "light" ? (
                  <a
                    href="https://github.com/saurabhtopthon01/dev-shopping-cart"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Element.github} alt="github" />
                  </a>
                ) : (
                  <a
                    href="https://github.com/saurabhtopthon01/dev-shopping-cart"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Element.githubDark} alt="githubDark" />
                  </a>
                )}
              </GithubLink>
              <DemoLink>
                {props.theme === "light" ? (
                  <a
                    href="https://dev-shopping-cart.vercel.app/menu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Element.demo} alt="demo" />
                  </a>
                ) : (
                  <a
                    href="https://dev-shopping-cart.vercel.app/menu"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={Element.demoDark} alt="demoDark" />
                  </a>
                )}
              </DemoLink>
            </Links>
          </ProjectDetail>
          <ProjectImage>
            <Overlay style={{ right: "0rem" }}></Overlay>
            <img
              src={Element.shopping_cart}
              height="352px"
              width="632px"
              alt="projectimage"
              style={{
                right: "4rem",
                position: "relative",
                zIndex: "-1",
              }}
            />
          </ProjectImage>
        </Detail>
      </Work>
      <Button
        style={{
          marginTop: "4rem",
        }}
      >
        Show More
      </Button>
      <Footer data-aos="flip-right">
        <FooterHeading>Get In Touch</FooterHeading>
        <Para>
          I am looking for new opportunity and I will be happy to connect and
          work on new ideas.
        </Para>
        <Button
          onClick={() =>
            (window.location = "mailto:saurabhsingh050301@gmail.com")
          }
        >
          Say Hello
        </Button>
        <FooterDetail>Designed and built by Saurabh Kumar Singh</FooterDetail>
      </Footer>
    </Container>
  );
};

export default Projects;
