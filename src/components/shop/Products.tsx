import { motion } from 'framer-motion';
import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  business: string;
}

interface NewsItem {
  id: number;
  title: string;
  business: string;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Free aperitif with reservations for two in April",
    description: "Enjoy a complimentary aperitif at Victor Churchill",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/victor.png",
    category: "FOOD & DRINK",
    business: "VICTOR CHURCHILL"
  },
  {
    id: 2,
    name: "Attend our AW25 Collection Preview and Win a Trip to Paris!",
    description: "Fashion showcase and exclusive opportunity",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/scanlan.png",
    category: "FASHION",
    business: "SCANLAN THEODORE"
  },
  {
    id: 3,
    name: "12 IPL Limelight Full Face Treatments for the price of 9!",
    description: "Limited time beauty treatment offer",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/skin_angel.png",
    category: "BEAUTY",
    business: "SKIN ANGEL"
  },
  {
    id: 4,
    name: "Win a set menu and accompanying drinks experience for you and three friends",
    description: "Exclusive dining experience opportunity",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/rinacuccina.jpg",
    category: "FOOD & DRINK",
    business: "RINA'S CUCINA"
  },
  {
    id: 5,
    name: "Win a $200 Et Al voucher",
    description: "Fashion voucher giveaway",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/etal.png",
    category: "FASHION",
    business: "ET AL"
  },
  {
    id: 6,
    name: "2025 Makeover - Win a consultation for your house",
    description: "Home styling consultation prize",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/jamessaid.png",
    category: "SERVICES",
    business: "JAMES SAID"
  }
];

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Pixel Boss launch their new software SWIFT!",
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

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState('VIEW ALL');
  const categories = ['VIEW ALL', 'BRIDAL', 'FASHION', 'FOOD & DRINK', 'BEAUTY', 'SERVICES'];

  const filteredProducts = products.filter(product => 
    currentCategory === 'VIEW ALL' ? true : product.category === currentCategory
  );

  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-[1300px]">
          <div className="mb-16">
            <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-8">
              <h2 className="text-2xl font-bold uppercase">
                Exclusive Armadale
              </h2>
              <a href="/exclusive-armadale" className="text-sm uppercase">
                VIEW ALL
              </a>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
              <button
                onClick={() => setCurrentCategory('VIEW ALL')}
                className={`border px-6 py-2 text-sm uppercase transition-colors duration-300 whitespace-nowrap ${
                  currentCategory === 'VIEW ALL'
                    ? 'bg-[#080d1e] text-white border-[#080d1e]'
                    : 'bg-[#F5F5F5] text-black hover:bg-[#080d1e] hover:text-white border-[#E5E5E5] hover:border-[#080d1e]'
                }`}
              >
                VIEW ALL
              </button>
              {categories.filter(cat => cat !== 'VIEW ALL').map((category) => (
                <button
                  key={category}
                  onClick={() => setCurrentCategory(category)}
                  className={`border px-6 py-2 text-sm uppercase transition-colors duration-300 whitespace-nowrap ${
                    currentCategory === category
                      ? 'bg-[#080d1e] text-white border-[#080d1e]'
                      : 'bg-[#F5F5F5] text-black hover:bg-[#080d1e] hover:text-white border-[#E5E5E5] hover:border-[#080d1e]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[45px]">
            {filteredProducts.map((product) => (
              <div key={product.id} className="flex flex-col h-full group">
                <div className="flex w-full">
                  <div className="w-[15px] bg-orange-500"></div>
                  <div className="bg-[#080d1e] text-white px-3 py-2 flex-1">
                    <span className="text-sm uppercase font-medium">{product.business}</span>
                  </div>
                </div>
                <div className="relative overflow-hidden">
                  <a href={`/campaigns/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-[222px] object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    />
                  </a>
                </div>
                <div className="pt-4 pb-4 flex flex-col items-start h-[120px] justify-between">
                  <h3 className="text-base font-medium leading-tight mb-2 line-clamp-2 h-[40px]">
                    {product.name}
                  </h3>
                  <a href={`/campaigns/${product.id}`}>
                    <button className="border border-gray-300 px-8 py-2 text-xs uppercase hover:bg-[#080d1e] hover:text-white hover:border-[#080d1e] rounded-full transition-colors duration-300 cursor-pointer">
                      ENTER
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighbourhood News Section */}
      <section className="pt-8 pb-16 bg-white">
        <div className="container mx-auto max-w-[1300px]">
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-8">
            <h2 className="text-2xl font-bold uppercase">
              Neighbourhood News
            </h2>
            <a href="/stories" className="text-sm uppercase">
              VIEW ALL
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {newsItems.map((item) => (
              <div key={item.id} className="flex flex-col h-full group">
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
                <div className="py-4 h-[120px] flex flex-col justify-between">
                  <h3 className="text-base font-medium leading-tight self-start line-clamp-2 h-[40px]">
                    {item.title}
                  </h3>
                  <a href={`/stories/story-${item.id}`}>
                    <button className="border border-gray-300 px-8 py-2 text-xs uppercase hover:bg-[#080d1e] hover:text-white hover:border-[#080d1e] rounded-full transition-colors duration-300 cursor-pointer">
                      READ MORE
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
