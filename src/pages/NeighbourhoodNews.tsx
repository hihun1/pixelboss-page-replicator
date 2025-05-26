import { useState } from 'react';
import Navigation from '../components/shop/Navigation';
import Footer from '../components/shop/Footer';

interface NewsItem {
  id: number;
  title: string;
  business: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Pixel Boss launch their new software SWiiFT!",
    business: "PIXEL BOSS",
    image: "https://3143.pixelboss.io/uploads/images/pixelboss.png"
  },
  {
    id: 2,
    title: "AW25 designs now in store!",
    business: "LUCI DI BELLA",
    image: "https://3143.pixelboss.io/uploads/images/luci.png"
  },
  {
    id: 3,
    title: "Armadale Cellars top wine picks for 2025!",
    business: "ARMADALE CELLARS",
    image: "https://3143.pixelboss.io/uploads/images/cellars.png"
  }
];

const NeighbourhoodNews = () => {
  const [activeSection, setActiveSection] = useState('neighbourhoodnews');

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      <div className="min-h-screen bg-white relative">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <main className="flex-grow">
          <div className="flex flex-col min-h-screen pt-16">
            <div className="container mx-auto px-4">
              <div className="flex mb-12 pb-6 border-b border-gray-200">
                <div className="w-2 bg-[rgb(185,255,108)] mr-4"></div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#080d1e]">
                  Neighbourhood News
                </h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[45px]">
                {newsItems.map((item) => (
                  <div key={item.id} className="flex flex-col h-full group mb-10">
                    <div className="flex w-full">
                      <div className="w-[15px] bg-[rgb(185,255,108)]"></div>
                      <div className="bg-[#080d1e] text-white px-3 py-2 flex-1">
                        <span className="text-sm uppercase font-bold">{item.business}</span>
                      </div>
                    </div>
                    <div className="relative overflow-hidden">
                      <a href={`/stories/story-${item.id}`}>
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-[222px] object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                        />
                      </a>
                    </div>
                    <div className="py-4 h-[80px] flex flex-col justify-start">
                      <h3 className="text-base font-medium leading-tight line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default NeighbourhoodNews; 