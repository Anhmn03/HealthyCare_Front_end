// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h3>HealthCare Newsletter</h3>
        <div className="newsletter-form">
          <input type="email" placeholder="Input your email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <h4>Product</h4>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="#">Blog</a>
          <a href="#">User guides</a>
          <a href="#">Webinars</a>
        </div>
        <div>
          <h4>Company</h4>
          <a href="#">About us</a>
          <a href="#">Contact us</a>
        </div>
        <div>
          <h4>Plans & Pricing</h4>
          <a href="#">Personal</a>
          <a href="#">Start up</a>
          <a href="#">Organization</a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="language">
          <select>
            <option>English</option>
          </select>
        </div>
      
        <div className="social-icons">
          <a href="#">🐦</a>
          <a href="#">📘</a>
          <a href="#">📺</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;