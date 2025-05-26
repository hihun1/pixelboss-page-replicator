import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/shop/Navigation';
import Hero from './components/shop/Hero';
import Products from './components/shop/Products';
import Footer from './components/shop/Footer';
import BackgroundParticles from './components/shop/BackgroundParticles';
import NotFound from './pages/NotFound';
import ExclusiveArmadale from './pages/ExclusiveArmadale';
import NeighbourhoodNews from './pages/NeighbourhoodNews';
import InnerCircle from './pages/InnerCircle';
import Members from './pages/Members';

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

  const ExclusiveArmadaleLayout = () => (
    <>
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      <div className="min-h-screen bg-white relative">
        <Navigation activeSection="exclusivearmadale" setActiveSection={setActiveSection} />
        <main>
          <ExclusiveArmadale />
        </main>
        <Footer />
      </div>
    </>
  );

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/inner-circle" element={<InnerCircle />} />
        <Route path="/exclusive-armadale" element={<ExclusiveArmadaleLayout />} />
        <Route path="/neighbourhood-news" element={<NeighbourhoodNews />} />
        <Route path="/members" element={<Members />} />
        <Route path="/terms-conditions" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
