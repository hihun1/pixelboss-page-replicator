import { useState, useEffect } from 'react';
import Navigation from '../components/shop/Navigation';
import Hero from '../components/shop/Hero';
import Products from '../components/shop/Products';
import Footer from '../components/shop/Footer';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products'];
      const sectionElements = sections.map(id => 
        document.getElementById(id)
      );
      
      const currentPosition = window.scrollY + 200;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section && section.offsetTop <= currentPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    // Initial check for active section
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Hero Section */}
      <Hero />

      {/* Products Section */}
      <Products />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
