import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.css';
import './App.css';

// Import components
import Hero from './components/Hero';
import Bio from './components/Bio';
import Education from './components/Education';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main>
        <Hero />
        <Bio />
        <Education />
        <Skills />
        <Portfolio />
      </main>
      <Footer />
    </>
  );
}

export default App;
