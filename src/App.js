import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import StylesPreview from './components/StylesPreview';
import Screenshots from './components/Screenshots';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <Features />
      <HowItWorks />
      <StylesPreview />
      <Screenshots />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
