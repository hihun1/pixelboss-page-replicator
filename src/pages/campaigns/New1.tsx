import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/shop/Navigation';
import Footer from '../../components/shop/Footer';

const New1 = () => {
  const [activeSection, setActiveSection] = useState('neighbourhoodnews');
  const navigate = useNavigate();

  const handleShare = () => {
    // Add share functionality
    navigator.clipboard.writeText(window.location.href);
  };

  const handleBookNow = () => {
    window.open('https://pixelboss.io/consultation', '_blank');
  };

  const handleGift = () => {
    window.open('https://pixelboss.io/gift', '_blank');
  };

  const handleEnterWin = () => {
    window.open('https://pixelboss.io/win', '_blank');
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
              <span className="uppercase font-medium">Pixel Boss</span>
            </div>
            <h1 className="text-4xl font-bold mb-6 max-w-3xl">Pixel Boss launch their new software SWiiFT!</h1>
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
                src="https://3143.pixelboss.io/uploads/images/pixelboss.png" 
                alt="Pixel Boss launch their new software SWiiFT!" 
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
            <div className="mx-auto px-4 max-w-[1040px] mb-16">
              <div className="mb-10">
                <p className="text-lg leading-relaxed mb-6">
                  High Street tech team Pixel Boss Group have launched SWiiFT, their revolutionary engagement software. With support from Pixel Boss Agency, SWiiFT creates digital environments for brands to interact directly with their customers, whilst capturing and evolving data, so they can target comms to their customers interests - no spam about things you don't care about, just content about things you love. (By the way, you're in a SWiiFT environment right now!) Pixel Boss are offering grants for local brands that are interested in integrating SWiiFT technology or Pixel Boss strategy across their business. Click ENTER to find out more.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="story-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="https://i0.wp.com/latienda-hub.pixelboss.io/wp-content/uploads/2024/11/https___cdn.evbuc_.com_images_867805589_1622319736073_1_original-1-4.png?resize=1024%2C520&ssl=1" 
                      alt="Book a Consultation" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground line-clamp-2 h-14 mb-2">Book a Consultation</h3>
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-5 mb-4 flex-grow">
                      Book a consultation and claim up to $50,000 worth of funding for your Pixel Boss project.
                    </p>
                    <div className="mt-auto">
                      <button 
                        onClick={handleBookNow}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-full text-white"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="story-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="https://3143.pixelboss.io/lovable-uploads/helpinghand.png" 
                      alt="Gift & Win" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground line-clamp-2 h-14 mb-2">Gift & Win</h3>
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-5 mb-4 flex-grow">
                      Support Healthy Minds Menu with a financial gift and go in the running to win the first six months of your Pixel Boss project on us!
                    </p>
                    <div className="mt-auto">
                      <button 
                        onClick={handleGift}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-full text-white"
                      >
                        Send a Gift
                      </button>
                    </div>
                  </div>
                </div>
                <div className="story-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWzhDZJ3kG1JP9ykq5K0I7axP8wPwSk4rD3g&s" 
                      alt="Surprise & Delight" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground line-clamp-2 h-14 mb-2">Surprise & Delight</h3>
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-5 mb-4 flex-grow">
                      Enter to win exclusive prizes from our friends and partners, from luxury staycations, new season designer collections, exclusive dining experiences and more!
                    </p>
                    <div className="mt-auto">
                      <button 
                        onClick={handleEnterWin}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-full text-white"
                      >
                        Enter to Win
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

export default New1; 