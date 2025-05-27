import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/shop/Navigation';
import Footer from '../components/shop/Footer';

const InnerCircle = () => {
  const [activeSection, setActiveSection] = useState('innercircle');

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      <div className="min-h-screen bg-white relative">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <div className="flex flex-col min-h-screen pt-16">
          <div className="container mx-auto px-4">
            <div className="flex mb-6">
              <div className="w-2 bg-pink-600 mr-4"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#080d1e]">INNER CIRCLE</h1>
                <p className="text-gray-700 mt-2">Offers and experiences from your favourite Armadale brands, just for you.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8 text-center my-8">
              <h2 className="text-2xl font-bold mb-4">Members Only Area</h2>
              <p className="mb-8 text-gray-600">Log in to access exclusive Inner Circle offers from your favorite Armadale brands.</p>
              <Link to="/members">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-[#080d1e] text-white uppercase hover:bg-[#080d1e]/90 active:scale-95 rounded-none px-8 py-2">
                  LOG IN
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default InnerCircle; 