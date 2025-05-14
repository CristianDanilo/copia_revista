import React, { useEffect } from 'react';
import '../../App.css';
import { useLocation } from 'react-router-dom';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CoverPage from "../CoverPage";
import ReferenciasCards from "../ReferenciasCards";

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <>
      <CoverPage />
      <Cards />
      <ReferenciasCards />
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
