import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar'
import AboutMe from './components/AboutMe/AboutMe'
import Skills from './components/Skills/Skills'
import Project from './components/Projects/Project'
//import Quotes from './components/Quotes/Quotes'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'



function App(){
  
  return (
    <div className="App">
      
      <Navbar/>
      <Home/>
      <AboutMe/>
      <Skills/>
      <h1 className="headT" id="pprojects" style={{paddingTop:'30px'}}>Personal Projects</h1>
      <Project/>
      {/* <Quotes/> */}
      
      <Footer/>

    </div>
  );

}

export default App;
