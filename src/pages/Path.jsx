// import React from 'react'
import Home from './Home'
import About from './About'
import Portfolio from './Portfolio'
import Services from './Services'
import Blog from './Blog'
import Contact from './Contact'
import Footer from '../components/Footer'
import ScrollBtn from '../components/ScrollBtn'
import { useEffect, useRef, useState } from 'react'

const Path = () => {
  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        pageYOffset > sectionOffsetTop - 100 &&
        pageYOffset < sectionOffsetTop + sectionHeight
      ) {
       return newActiveSection = section.id
      }
    });

    setActiveSection(newActiveSection);

  };

  useEffect(() => {
    sections.current = document.querySelectorAll(".data-section");
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Home data={activeSection}/>
      <About/>
      <Portfolio/>
      <Services/>
      <Blog/>
      <Contact/>
      <Footer/>
      <ScrollBtn/>
    </div>
  )
}

export default Path
