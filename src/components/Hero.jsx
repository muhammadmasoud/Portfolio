import { Fragment } from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content-wrapper">
        <Fragment>
          <h1 className="hero-title">Muhammad Ebrahim Masoud</h1>
          <h2 className="hero-subtitle">Web Developer & Designer</h2>
          <a href="#footer" className="hero-contact-button">CONTACT ME</a>
        </Fragment>
      </div>
    </section>
  );
};

export default Hero;
