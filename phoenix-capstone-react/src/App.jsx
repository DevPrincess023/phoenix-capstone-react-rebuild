import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Video from './components/Video';
import PlanetGrid from './components/PlanetGrid';
import Table from './components/Table';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <Video />
      <PlanetGrid />
      <Table />
      <Form />
      <Footer />
    </>
  );
}