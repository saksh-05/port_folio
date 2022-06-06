import styled from "styled-components";

export const Container = styled.div`
  margin: auto;
  width: 50%;
  margin-top: 5rem;
  @media only screen and (max-width: 520px) {
    width: 80%;
  }
`;
export const Heading = styled.div`
  font-size: 3rem;
  margin-bottom: 2.5rem;
  font-weight: 700;
  background: ${(props) => props.theme.headingColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Para = styled.div`
  font-family: Montserrat;
  color: ${(props) => props.theme.aboutText};
  font-size: 1.2rem;
  font-weight: 500;
  word-spacing: 0.2rem;
  line-height: 1.8rem;
  b {
    color: ${(props) => props.theme.activeColor};
    font-weight: 500;
  }
`;

export const Hr = styled.hr`
  margin-top: 5rem;
  margin-bottom: 5rem;
  border: none;
  height: 0.2rem;
  background: ${(props) => props.theme.activeColor};
  border-radius: 0.5rem;
`;
export const Footer = styled.div`
  margin-bottom: 3rem;
`;

export const Name = styled.div`
  background: ${(props) => props.theme.headingColor};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: right;
`;

export const Social = styled.div`
  text-align: right;
  img {
    margin-left: 1rem;
  }
`;
