import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    </>
  );
}