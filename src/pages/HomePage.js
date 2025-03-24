// src/pages/HomePage.js
import React from 'react';
import Header from '../components/Header';
import HospitalIntro from '../components/HospitalIntro';
import Services from '../components/Services';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <HospitalIntro />
      <Services />
      <NewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default HomePage;