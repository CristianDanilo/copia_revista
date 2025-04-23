import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CoverPage from "../CoverPage";
import ReferenciasCards from "../ReferenciasCards";

function Home() {
  return (
    <>
      <CoverPage/>
      <Cards />
      <ReferenciasCards /> 
      <HeroSection />
      <Footer />
    </>
  );
}

export default Home;
