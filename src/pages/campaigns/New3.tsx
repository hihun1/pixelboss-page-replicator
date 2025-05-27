import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/shop/Navigation';
import Footer from '../../components/shop/Footer';

const New3 = () => {
  const [activeSection, setActiveSection] = useState('neighbourhoodnews');
  const navigate = useNavigate();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleClaim = () => {
    window.open('https://armadale-cellars.com.au/claim', '_blank');
  };

  const handleGift = () => {
    window.open('https://armadale-cellars.com.au/gift', '_blank');
  };

  const handleEnter = () => {
    window.open('https://armadale-cellars.com.au/win', '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        <div className="min-h-screen bg-background pt-16">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="mb-4 flex items-center">
              <div className="w-[15px] h-[24px] bg-[rgb(185,255,108)] mr-2"></div>
              <span className="uppercase font-medium">Armadale Cellars</span>
            </div>
            <h1 className="text-4xl font-bold mb-6 max-w-3xl">Armadale Cellars top wine picks for 2025!</h1>
            <div className="mb-4">
              <button 
                onClick={handleShare}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:text-accent-foreground h-10 rounded-none border border-gray-300 bg-white hover:bg-gray-50 uppercase px-4 py-2 text-sm font-medium"
              >
                <span className="flex items-center">
                  <span className="mr-2">SHARE</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-share">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                    <polyline points="16 6 12 2 8 6"></polyline>
                    <line x1="12" x2="12" y1="2" y2="15"></line>
                  </svg>
                </span>
              </button>
            </div>
            <div className="w-full mb-10">
              <img 
                src="https://3143.pixelboss.io/uploads/images/cellars.png" 
                alt="Armadale Cellars top wine picks for 2025!" 
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
            <div className="mx-auto px-4 max-w-[1040px] mb-16">
              <div className="mb-10">
                <p className="text-lg leading-relaxed mb-6">
                  Armadale Cellars are holding their iconic wine appreciation courses throughout 2025. Choose from the four-week course that covers everything you need to know, the one-day palate refinement course, or specialise in Burgundy, Shiraz, Champagne or more.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                  These interactive wine courses cover a broad range of wine topics directly related to the process of winemaking from vine to bottle to table. Learn the subtleties and nuances of the different styles. Armadale Cellars are offering one lucky course attendee the chance to supplement their cellar with a Wine Appreciation pack.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="story-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="https://www.alliancewine.com/images/products/BOTTLE_5115.png?mode=pad&quality=90&height=842" 
                      alt="Cru Beaujolais 2021 Vintage: Last stock!" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground line-clamp-2 h-14 mb-2">Cru Beaujolais 2021 Vintage: Last stock!</h3>
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-5 mb-4 flex-grow">
                      We have limited bottles left of this standout Beaujolais, Moulin-a-Vent 'Le Mont' 2021 from Domaine de Colette. Claim yours before they're gone!
                    </p>
                    <div className="mt-auto">
                      <button 
                        onClick={handleClaim}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-full text-white"
                      >
                        Claim
                      </button>
                    </div>
                  </div>
                </div>
                <div className="story-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="https://wp.pixelboss.io/wp-content/uploads/2025/04/488991155_18494622763052635_2415095481543123906_n-1.jpg" 
                      alt="Gift & Win" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground line-clamp-2 h-14 mb-2">Gift & Win</h3>
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-5 mb-4 flex-grow">
                      Support Beyond Blue with a financial gift and go in the running to win a place in our 4 Week Wine Appreciation Course.
                    </p>
                    <div className="mt-auto">
                      <button 
                        onClick={handleGift}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-full text-white"
                      >
                        Gift & Win
                      </button>
                    </div>
                  </div>
                </div>
                <div className="story-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="https://media.cntraveler.com/photos/66c62d9badb1b65532027479/16:9/w_2580,c_limit/Alsace_GettyImages-1304271763.jpg" 
                      alt="Surprise & Delight" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground line-clamp-2 h-14 mb-2">Surprise & Delight</h3>
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-5 mb-4 flex-grow">
                      Enter to win exclusive prizes, from a bottle of our Wine of the Month to trips to iconic wine locations.
                    </p>
                    <div className="mt-auto">
                      <button 
                        onClick={handleEnter}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-full text-white"
                      >
                        Enter
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default New3; 