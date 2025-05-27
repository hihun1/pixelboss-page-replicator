import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../../components/shop/Navigation';
import Footer from '../../components/shop/Footer';

const Product2: React.FC = () => {
  const [activeSection, setActiveSection] = useState('exclusivearmadale');
  const navigate = useNavigate();

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
  };

  const handleEnter = () => {
    // You can add form handling or other functionality here
    console.log('Enter clicked');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
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
              <span className="uppercase font-medium">Scanlan Theodore</span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold mb-6">
              Attend our AW25 Collection Preview and Win a Trip to Paris!
            </h1>

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
                SHARE <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            <div className="mb-10">
              <img
                src="https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/scanlan.png"
                alt="Attend our AW25 Collection Preview and Win a Trip to Paris!"
                className="w-full h-auto object-cover max-h-[500px]"
              />
            </div>

            <div className="mb-10">
              <p className="text-lg leading-relaxed mb-6">
                Join us for an exclusive preview of Scanlan Theodore's Autumn/Winter 2025 Collection. Be among the first to experience our latest designs and enter for a chance to win an unforgettable trip to Paris Fashion Week. Our new collection embodies the essence of modern Australian luxury with a Parisian twist.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Click <span className="font-bold">ENTER</span> to secure your spot at this exclusive event and enter the competition for a chance to win a trip to Paris Fashion Week.
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
                SHARE <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Product2; 