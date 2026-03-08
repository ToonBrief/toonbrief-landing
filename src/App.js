import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import StylesPreview from './components/StylesPreview';
import Screenshots from './components/Screenshots';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

function LandingPage() {
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
