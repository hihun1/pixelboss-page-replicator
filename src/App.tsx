import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/shop/Navigation';
import Hero from './components/shop/Hero';
import Products from './components/shop/Products';
import Footer from './components/shop/Footer';
import BackgroundParticles from './components/shop/BackgroundParticles';
import NotFound from './pages/NotFound';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const MainLayout = () => (
    <>
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      <div className="min-h-screen bg-white relative">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        <main>
          <Hero />
          <Products />
        </main>
        <Footer />
      </div>
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/inner-circle" element={<MainLayout />} />
        <Route path="/exclusive-armadale" element={<MainLayout />} />
        <Route path="/neighbourhood-news" element={<MainLayout />} />
        <Route path="/members" element={<MainLayout />} />
        <Route path="/terms-conditions" element={<MainLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
