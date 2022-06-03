import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#EAEEFF",
  headingColor:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 0%,rgba(14, 14, 157, 1) 41%,rgba(2, 0, 36, 1) 100%)",
  profileColor: "#909090",
  introColor: "#08D7BE",
  borderBottom: "#000",
  activeColor: "#0316BB",
  noActiveColor: "#000",
  projectDescriptionColor: "#000",
  projectStackColor: "#A4ADCC",
  descriptionBackground: "#fff",
  hoverColor: "#0316BB",
  hoverText: "#fff",
  overlayOpacity: "0.4",
  overlayColor: "#000",
  aboutText: "#000",
};

export const darkTheme = {
  body: "#0A192F",
  headingColor: "#CCD6F6",
  profileColor: "#A4ADCC", //grey
  introColor: "#5FF2D1", // green
  borderBottom: "#fff",
  activeColor: "#5FF2D1",
  noActiveColor: "#CCD6F6",
  projectDescriptionColor: "#A4ADCC",
  projectStackColor: "#A4ADCC",
  descriptionBackground: "#112240",
  hoverColor: "#7EFFE2",
  hoverText: "#000",
  overlayOpacity: "0.1",
  overlayColor: "#5FF2D1",
  aboutText: "#A4ADCC",
};

export const GlobalTheme = createGlobalStyle`
body{
    background-color:${(props) => props.theme.body}
}`;
