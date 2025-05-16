import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
  faLinkedin,
  faFacebook,
  faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-contact-section">
            <h3 className="footer-title">GET IN TOUCH</h3>
            <>
              <div className="contact-item">
                <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                <p>mebramasoud@gmail.com</p>
              </div>
              <div className="contact-item">
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
                <p>+201098384618</p>
              </div>
            </>
          </div>
          <div className="footer-button-section">
            <a href="#footer" className="contact-button">CONTACT ME</a>
          </div>
          <div className="footer-social-section">
            <div className="social-links">
              <a href="https://linkedin.com/" target="_blank" className="social-link">
                <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
              </a>
              <a href="https://facebook.com/" target="_blank" className="social-link">
                <FontAwesomeIcon icon={faFacebook} className="social-icon" />
              </a>
              <a href="https://x.com/" target="_blank"  className="social-link">
                <FontAwesomeIcon icon={faXTwitter} className="social-icon" />
              </a>
            </div>
            <p className="copyright">
              Copyright © 2025 MM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
