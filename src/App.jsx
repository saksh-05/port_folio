import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import About from "./components/about/about";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalTheme } from "./theme";
function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  useEffect(() => {
    AOS.init({
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease",
    });
    AOS.refresh();
  }, [theme]);
  return (
    <ThemeProvider theme={() => (theme === "light" ? lightTheme : darkTheme)}>
      <GlobalTheme />
      <div className="App">
        <Router>
          <Navbar theme={theme} onToggle={toggleTheme} />
          <Routes>
            <Route path="/" element={<Projects theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
