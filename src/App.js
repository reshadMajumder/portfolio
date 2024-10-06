import logo from './logo.svg';
import './App.css';
import React from 'react';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div>
      <Header />
      <About />
      <Home />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;
