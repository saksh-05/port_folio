import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#EAEEFF",
  headingColor:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 0%,rgba(14, 14, 157, 1) 10%)",
  headingColor10:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 10%,rgba(14, 14, 157, 1) 20%)",
  headingColor20:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 30%,rgba(14, 14, 157, 1) 30%)",
  headingColor30:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 30%,rgba(14, 14, 157, 1) 40%)",
  headingColor40:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 40%,rgba(14, 14, 157, 1) 50%)",
  headingColor50:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 50%,rgba(14, 14, 157, 1) 60%)",
  headingColor60:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 60%,rgba(14, 14, 157, 1) 70%)",
  headingColor70:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 70%,rgba(14, 14, 157, 1) 80%)",
  headingColor80:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 80%,rgba(14, 14, 157, 1) 90%)",
  headingColor90:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 90%,rgba(14, 14, 157, 1) 95%)",
  headingColor100:
    "-webkit-linear-gradient(360deg,rgba(2, 0, 36, 1) 0%,rgba(14, 14, 157, 1) 10%)",
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
