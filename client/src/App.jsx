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
import Blog from './views/Blog';
import SingleBlogPost from './components/blog-components/SingleBlogPost';
import TermsOfUse from './components/legal-components/TermsOfUse';
import PrivacyPolicy from './components/legal-components/PrivacyPolicy';
import CookiePolicy from './components/legal-components/CookiePolicy';

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
          <Route path="%PUBLIC_URL%/" element={<Home isLight={isLight} />} />
          <Route path="%PUBLIC_URL%/about" element={<About />} />
          <Route path="%PUBLIC_URL%/services" element={<Services />} />
          <Route path="%PUBLIC_URL%/blog" element={<Blog />} />
          <Route path="%PUBLIC_URL%/blog/:i" element={<SingleBlogPost />} />
          <Route path="%PUBLIC_URL%/contact" element={<Contact />} />
          <Route path="%PUBLIC_URL%/legal/termsofuse" element={<TermsOfUse />} />
          <Route path="%PUBLIC_URL%/legal/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="%PUBLIC_URL%/legal/cookiepolicy" element={<CookiePolicy />} />
        </Routes>
      </div>
      <Footer isLight={isLight}></Footer>
    </>
  );
}

export default App;
