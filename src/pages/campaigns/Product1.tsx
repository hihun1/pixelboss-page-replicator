import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Navigation from '../../components/shop/Navigation';
import Footer from '../../components/shop/Footer';

const Product1 = () => {
  const [activeSection, setActiveSection] = useState('exclusivearmadale');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      <div className="bg-white min-h-screen pt-16">
        <div className="mx-auto px-4 sm:px-6 max-w-[1040px]">
          <div className="mb-4 flex items-center">
            <div className="w-[15px] h-[24px] bg-[#FF004F] mr-2"></div>
            <span className="uppercase font-medium">Victor Churchill</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            Free aperitif with reservations for two in April
          </h1>

          <div className="flex flex-wrap gap-3 mb-10">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-[174px] h-[44px]">
              ENTER
            </button>
            <button className="justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground rounded-none border border-gray-400 uppercase px-8 py-2 text-sm font-medium flex items-center gap-2 w-[174px] h-[44px]">
              SHARE <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mb-10">
            <img
              src="https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/victor.png"
              alt="Free aperitif with reservations for two in April"
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>

          <div className="mb-10">
            <p className="text-lg leading-relaxed mb-6">
              Rina's iconic set menu changes daily to reflect seasonal flavours. Produce is delivered from small farms and local markets to create an exciting and ever-changing menu, paired with an elegantly curated drinks menu. Click ENTER to go into the running to win an exclusive dining experiences at Rina's for you and three friends.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Click <span className="font-bold">CLAIM</span> to book your exclusive dining experience now.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-16">
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-white bg-[#080d1e] hover:bg-[#080d1e]/90 rounded-none uppercase px-8 py-2 text-sm font-medium w-[174px] h-[44px]">
              ENTER
            </button>
            <button className="justify-center whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-background hover:bg-accent hover:text-accent-foreground rounded-none border border-gray-400 uppercase px-8 py-2 text-sm font-medium flex items-center gap-2 w-[174px] h-[44px]">
              SHARE <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Product1; 