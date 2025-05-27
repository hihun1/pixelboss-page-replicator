import { useState } from 'react';
import Navigation from '../components/shop/Navigation';
import Hero from '../components/shop/Hero';
import Products from '../components/shop/Products';
import Footer from '../components/shop/Footer';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      <div className="min-h-screen bg-white relative">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main className="flex-grow">
          <div className="flex flex-col min-h-screen">
            <Hero />
            <Products />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home; 