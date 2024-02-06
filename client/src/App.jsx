import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/global-components/nav-bar/NavBar";
import Footer from "./components/global-components/footer/Footer";
import Home from "./views/Home";
import About from "./views/About";
import Services from "./views/Services";
import Contact from "./views/Contact";
import SeoHelmet from './components/global-components/seo/SeoHelmet';

function App() {
  // TO DO: Clean this
  const [isLight, setIsLight] = useState(
    JSON.parse(localStorage.getItem('isLight'))
  );
  useEffect(() => {
    localStorage.setItem('isLight', JSON.stringify(isLight));
    if (isLight) {
      localStorage.theme = 'light'
    } else {
      localStorage.theme = 'dark'
    }
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [isLight]);

  const updateTheme = () => {
    setIsLight(!isLight)
  }

  return (
    <>
      <SeoHelmet></SeoHelmet>

      <div className="App relative overflow-x-clip">
        <div>
          <NavBar isLight={isLight} onUpdate={updateTheme}></NavBar>
        </div>
        <Routes>
          <Route path="/" element={<Home isLight={isLight} />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer isLight={isLight}></Footer>
    </>
  );
}

export default App;
