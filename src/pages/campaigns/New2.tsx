import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/shop/Navigation';
import Footer from '../../components/shop/Footer';

const New2 = () => {
  const [activeSection, setActiveSection] = useState('neighbourhoodnews');
  const navigate = useNavigate();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleOrderNow = () => {
    window.open('https://lucidibella.com.au/order', '_blank');
  };

  const handleGift = () => {
    window.open('https://lucidibella.com.au/gift', '_blank');
  };

  const handleEnterWin = () => {
    window.open('https://lucidibella.com.au/win', '_blank');
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
              <span className="uppercase font-medium">LUCI DI BELLA</span>
            </div>
            <h1 className="text-4xl font-bold mb-6 max-w-3xl">Luci di Bella AW25 now in store</h1>
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
                src="https://3143.pixelboss.io/uploads/images/luci.png" 
                alt="Luci di Bella AW25 now in store" 
                className="w-full h-auto object-cover max-h-[600px]"
              />
            </div>
            <div className="mx-auto px-4 max-w-[1040px] mb-16">
              <div className="mb-10">
                <p className="text-lg leading-relaxed mb-6">
                  Luci di Bella are Armadale bridal icons, creating bespoke gowns to make every bride's dream come true. With a new range of designs taking inspiration from the AW25 bridal season, the new range of gowns combine classic elegance with contemporary trends. Luci di Bella are offering consultations for brides-to-be looking to find their dream dress for their special day. Click CLAIM for your one-on-one bridal consultation
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="story-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="https://adoredcloset.com/cdn/shop/files/3A62B421-0C36-4611-9AA8-9CA6CA81195B.jpg?v=1697467179&width=1946" 
                      alt="Limited Edition" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground line-clamp-2 h-14 mb-2">Limited Edition</h3>
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-5 mb-4 flex-grow">
                      Order your customised veil, created from beautiful antique lace, available in strictly limited quantities, imported from Italy.
                    </p>
                    <div className="mt-auto">
                      <button 
                        onClick={handleOrderNow}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-full text-white"
                      >
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
                <div className="story-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="https://images.squarespace-cdn.com/content/v1/6327faf154e8bd04d152c42e/1663990711162-SO9VFVPUQ9Q17583PVIZ/Mia1.jpg?format=750w" 
                      alt="Gift & Win" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground line-clamp-2 h-14 mb-2">Gift & Win</h3>
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-5 mb-4 flex-grow">
                      Support 1800 Respect with a financial gift and go in the running to win your dream dress from the Floriane collection.
                    </p>
                    <div className="mt-auto">
                      <button 
                        onClick={handleGift}
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-10 bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-full text-white"
                      >
                        Make A Gift
                      </button>
                    </div>
                  </div>
                </div>
                <div className="story-card bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1 duration-300 flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <img 
                      src="https://wp.pixelboss.io/wp-content/uploads/2025/04/wedding.jpg" 
                      alt="Surprise & Delight" 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-foreground line-clamp-2 h-14 mb-2">Surprise & Delight</h3>
                    <p className="text-muted-foreground text-base leading-relaxed line-clamp-5 mb-4 flex-grow">
                      Enter to win exclusive prizes from our friends and partners, from luxury honeymoons to wedding florals, your dream wedding cake, catering and more!
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

export default New2; 