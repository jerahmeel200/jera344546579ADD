import { ThemeProvider } from "styled-components";
import { useState, useEffect } from "react";
import { darkTheme, lightTheme } from './utils/Themes.js'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
 
import styled from "styled-components";
import Navbar from "./components/Navbar/Navbar.jsx";
import EducationCard from "./components/Cards/EducationCard.jsx";
// import Navbar from "./components/Navbar";
// import './App.css';
// import { BrowserRouter as Router } from 'react-router-dom';
// import HeroSection from "./components/HeroSection/HeroSection.jsx";
// import About from "./components/About";
import Skills from "./components/Skills/Skills.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Experience from "./components/Experience";
import Education from "./components/Education";
import ExperienceCard from "./components/Cards/ExperienceCard.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails.jsx";
import HeroSection from "./components/HeroSection/HeroSection.jsx";
import Experience from "./components/Experience/index.jsx";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`
function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [openModal, setOpenModal] = useState({ state: false, project: null });
  console.log(openModal)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router >
        <Navbar />
        <Body>
          <HeroSection />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
