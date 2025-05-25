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
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="mb-16">
            <div className="flex items-center justify-between mb-12 border-b border-gray-300 pb-4">
              <h2 className="text-xl font-bold tracking-wide text-black">
                EXCLUSIVE ARMADALE
              </h2>
              <button 
                onClick={() => setCurrentCategory('VIEW ALL')}
                className="text-sm tracking-wide text-black hover:text-gray-600 transition-colors"
              >
                VIEW ALL
              </button>
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCurrentCategory(category)}
                  className={`text-[11px] tracking-wider py-1.5 transition-all duration-300 w-[120px] border-2 ${
                    currentCategory === category
                      ? 'bg-black text-white border-black'
                      : 'bg-[#F5F5F5] text-black hover:bg-black hover:text-white border-[#E5E5E5] hover:border-black'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute top-0 left-0 z-10 w-full">
                    <div className="bg-[#0A0A0A] text-white px-3 py-1.5 w-full relative">
                      <div className="absolute left-0 top-0 w-4 h-full bg-[#FF6B00]"></div>
                      <span className="text-[11px] font-medium tracking-wide pl-6">
                        {product.business}
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ 
                        objectPosition: 
                          product.id === 1 ? 'center 40%' : 
                          product.id === 2 ? 'center 30%' :
                          'center'
                      }}
                    />
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="min-h-[40px]">
                    <h3 className="text-base font-medium leading-tight self-start line-clamp-2 h-[40px]">
                      {product.name}
                    </h3>
                  </div>
                  <div className="mt-3">
                    <button className="inline-flex items-center justify-center border border-black w-[100px] py-1.5 text-[11px] tracking-wide hover:bg-black hover:text-white transition-colors duration-300 rounded-full">
                      ENTER
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Neighbourhood News Section */}
      <section className="pt-8 pb-16 bg-white">
        <div className="container mx-auto px-4 max-w-[1200px]">
          <div className="flex items-center justify-between mb-12 border-b border-gray-300 pb-4">
            <h2 className="text-xl font-bold tracking-wide text-black">
              NEIGHBOURHOOD NEWS
            </h2>
            <button 
              className="text-sm tracking-wide text-black hover:text-gray-600 transition-colors"
            >
              VIEW ALL
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {newsItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <div className="absolute top-0 left-0 z-10 w-full">
                    <div className="bg-[#0A0A0A] text-white px-3 py-1.5 w-full relative">
                      <div className="absolute left-0 top-0 w-4 h-full bg-[#22C55E]"></div>
                      <span className="text-[11px] font-medium tracking-wide pl-6">
                        {item.business}
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
                
                <div className="mt-3">
                  <div className="min-h-[40px]">
                    <h3 className="text-base font-medium leading-tight self-start line-clamp-2 h-[40px]">
                      {item.title}
                    </h3>
                  </div>
                  <div className="mt-3">
                    <button className="inline-flex items-center justify-center border border-black w-[100px] py-1.5 text-[11px] tracking-wide hover:bg-black hover:text-white transition-colors duration-300 rounded-full">
                      READ MORE
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
