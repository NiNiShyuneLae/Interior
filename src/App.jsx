// import React from 'react'

// import Footer from "./components/Footer";
// import Navbar from "./components/Navbar";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import ServiceDetail from "./pages/ServiceDetail";
// import ScrollBtn from "./components/ScrollBtn";
// import Portfolio from "./pages/Portfolio";
// import BlogCard from "./components/BlogCard";
// import BlogDetail from "./components/BlogDetail";
// import Blog from "./pages/Blog";
// import { Routes, Route } from "react-router-dom";

// import Contact from "./pages/Contact";
import { Route, Routes } from "react-router";
import Path from "./pages/Path";
import BlogDetail from './components/BlogDetail'
import ServiceDetail from './pages/ServiceDetail'
import PorfolioDetail from "./pages/PorfolioDetail";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Path/>}/>
        <Route path="/blogDetail" element={<BlogDetail/>}/>
        <Route path="/serviceDetail" element={<ServiceDetail/>}/>
        <Route path="/porfolioDetail" element={<PorfolioDetail/>}/>
      </Routes>
    </div>
  )
}

export default App

