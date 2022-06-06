import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 2rem;
`;
export const Introduction = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  height: 600px;
  align-items: center;
  @media only screen and (max-width: 520px) {
    width: 90%;
    position: relative;
    top: 10rem;
    display: flow-root;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const Intro = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.introColor};
`;
export const Name = styled.div`
  font-size: 5rem;
  font-weight: 700;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.headingColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @media only screen and (max-width: 520px) {
    font-size: 3rem;
  }
`;
export const Profile = styled.div`
  font-size: 1.5rem;
  color: ${(props) => props.theme.profileColor};
  text-align: center;
`;
export const Social = styled.div`
  display: grid;
  height: 12rem;
  img {
    fill: url(linear-gradient(
      360deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(14, 14, 157, 1) 41%,
      rgba(0, 212, 255, 1) 100%
    ));
  }
  @media only screen and (max-width: 520px) {
    display: flex;
    width: 50%;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    height: fit-content;
    margin-top: 3rem;
  }
`;

export const Work = styled.div`
  width: 75%;
  margin: auto;
  hr {
    width: 75%;
    border: none;
    background: ${(props) => props.theme.headingColor};
    height: 1px;
    @media only screen and (max-width: 520px) {
      display: none;
    }
  }
  @media only screen and (max-width: 520px) {
    width: 90%;
  }
`;
export const WorkHeading = styled.h1`
  background: ${(props) => props.theme.headingColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.5rem;
  margin-bottom: 0rem;
`;
export const WorkSubHeading = styled.h5`
  color: ${(props) => props.theme.introColor};
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 0.5rem;
`;

export const Carousel = styled.div`
  @media only screen and (max-width: 520px) {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 3rem;
    overflow-x: scroll;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const CarouselButton = styled.div``;

export const Slider = styled.div`
  display: none;
  @media only screen and (max-width: 520px) {
    display: block;
    color: ${(props) => props.theme.projectDescriptionColor};
    font-weight: 100;
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;

export const Detail = styled.div`
  display: flex;
  margin-top: 2rem;
  @media only screen and (max-width: 520px) {
    display: block;
    min-width: 98%;
  }
`;

export const ProjectImage = styled.div`
  height: 22rem;
  width: 60%;

  @media only screen and (max-width: 520px) {
    width: 100%;
    height: 18rem;
    display: none;
  }

  img {
    @media only screen and (max-width: 520px) {
      width: 100%;
      height: 18rem;
    }
  }
`;

export const Overlay = styled.div`
  height: 352px;
  width: 632px;
  position: absolute;
  background: ${(props) => props.theme.overlayColor};
  opacity: ${(props) => props.theme.overlayOpacity};
  &:hover {
    opacity: 0;
  }
  @media only screen and (max-width: 520px) {
    width: 100%;
    height: 18rem;
  }
`;

export const ProjectDetail = styled.div`
  width: 40%;
  margin-left: auto;

  @media only screen and (max-width: 520px) {
    min-width: 100%;
  }
`;
export const ProjectTitle = styled.div`
  background: ${(props) => props.theme.headingColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;
  font-weight: 700;
  text-align: right;
  margin-bottom: 1rem;
  @media only screen and (max-width: 520px) {
    text-align: left;
  }
`;
export const ProjectDescription = styled.div`
  color: ${(props) => props.theme.projectDescriptionColor};
  background: ${(props) => props.theme.descriptionBackground};
  box-shadow: 2px 2px 0px 0px ${(props) => props.theme.activeColor};
  position: relative;
  padding: 2rem;
  font-size: 1.1rem;
  word-spacing: 0.5rem;
  line-height: 1.5rem;
  border-radius: 0.2rem;
  width: 107%;
  right: 6rem;
  z-index: 1;
  @media only screen and (max-width: 520px) {
    width: 85%;
    right: 0;
    height: 10.5rem;
    overflow-y: scroll;
    padding: 1.8rem;
  }
`;
export const ProjectStack = styled.div`
  color: ${(props) => props.theme.projectStackColor};
  font-size: 1.2rem;
  text-align: right;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: Rajdhani;
  font-weight: 600;
  word-spacing: 1.5rem;
  @media only screen and (max-width: 520px) {
    text-align: left;
  }
`;
export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  @media only screen and (max-width: 520px) {
    justify-content: start;
  }
`;
export const GithubLink = styled.div`
  margin-right: 1rem;
`;

export const Partition = styled.div`
  @media only screen and (max-width: 520px) {
    display: none;
  }
`;
export const DemoLink = styled.div``;

export const Footer = styled.div`
  width: 75%;
  margin: auto;
  text-align: center;
  margin-top: 10rem;
`;
export const FooterHeading = styled.div`
  background: ${(props) => props.theme.headingColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 3rem;
  font-weight: 700;
`;

export const Para = styled.div`
  color: ${(props) => props.theme.projectDescriptionColor};
  font-size: 1.2rem;
  width: 26rem;
  margin: auto;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  @media only screen and (max-width: 520px) {
    width: 100%;
  }
`;

export const Button = styled.div`
  color: ${(props) => props.theme.activeColor};
  border: 1px solid ${(props) => props.theme.activeColor};
  width: 6rem;
  padding: 1rem;
  border-radius: 0.5rem;
  margin: auto;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;
  font-weight: 700;
  transition: background-color;
  align-items: center;
  justify-content: center;
  display: flex;
  &:hover {
    background-color: ${(props) => props.theme.hoverColor};
    color: ${(props) => props.theme.hoverText};
  }
`;

export const FooterDetail = styled.div`
  margin-top: 13rem;
  color: ${(props) => props.theme.projectStackColor};
`;
