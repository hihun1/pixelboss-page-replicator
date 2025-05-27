import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/shop/Navigation';
import Footer from '../../components/shop/Footer';

const Product12 = () => {
  const [activeSection, setActiveSection] = useState('exclusivearmadale');
  const navigate = useNavigate();

  const handleEnter = () => {
    // Navigate to Venroy website
    window.open('https://www.venroy.com.au', '_blank');
  };

  const handleShare = () => {
    // Add share functionality
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        <div className="bg-white min-h-screen pt-16">
          <div className="mx-auto px-4 sm:px-6 max-w-[1040px]">
            <div className="mb-4 flex items-center">
              <div className="w-[15px] h-[24px] bg-[#FF004F] mr-2"></div>
              <span className="uppercase font-medium">VENROY</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6">Win a luxury minimalist escape to Bondi.</h1>
            <div className="flex flex-wrap gap-3 mb-10">
              <button 
                onClick={handleEnter}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-[174px] h-[44px]"
              >
                ENTER
              </button>
              <button 
                onClick={handleShare}
                className="justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground rounded-none border border-gray-400 uppercase px-8 py-2 text-sm font-medium flex items-center gap-2 w-[174px] h-[44px]"
              >
                SHARE 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </button>
            </div>
            <div className="mb-10">
              <img 
                src="https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/VENROY.jpg" 
                alt="Win a luxury minimalist escape to Bondi." 
                className="w-full h-auto object-cover max-h-[500px] cursor-pointer"
                onClick={handleEnter}
              />
            </div>
            <div className="mb-10">
              <p className="text-lg leading-relaxed mb-6">
                Venroy makes clothes to elevate everyday life through lighthearted escapism. While styles vary by season, all collections are guided by the ineffable sense of freedom that comes with travel. Win a weekend away at Bondi, cocooned in minimalist luxury. Click ENTER to be in the running to win.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Click <span className="font-bold">CLAIM</span> to enter the competition now.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mb-16">
              <button 
                onClick={handleEnter}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-[174px] h-[44px]"
              >
                ENTER
              </button>
              <button 
                onClick={handleShare}
                className="justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground rounded-none border border-gray-400 uppercase px-8 py-2 text-sm font-medium flex items-center gap-2 w-[174px] h-[44px]"
              >
                SHARE 
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right">
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product12; 