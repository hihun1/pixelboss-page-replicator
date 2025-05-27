import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    business: "Victor Churchill"
  },
  {
    id: 2,
    name: "Attend our AW25 Collection Preview and Win a Trip to Paris!",
    description: "Fashion showcase and exclusive opportunity",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/scanlan.png",
    category: "FASHION",
    business: "Scanlan Theodore"
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
  },
  {
    id: 7,
    name: "Enjoy a high tea while you find your dream dress!",
    description: "Bridal experience with high tea",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/0822b425fe42549f08a5473924486ece.jpg",
    category: "BRIDAL",
    business: "Riva Bridal"
  },
  {
    id: 8,
    name: "Design your dream dress with Bernadette Pimenta",
    description: "Custom bridal design experience",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/BERNADETTE_PIMENTA.jpg",
    category: "BRIDAL",
    business: "Bernadette Pimenta"
  },
  {
    id: 9,
    name: "Win an Italian honeymoon from Raffaele Ciuca",
    description: "Luxury honeymoon package",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/RAFFAELE_CIUCA.jpg",
    category: "BRIDAL",
    business: "Raffaele Ciuca"
  },
  {
    id: 10,
    name: "A year of haircare from Paragon Studio could be yours.",
    description: "Premium haircare package",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/PARAGON_STUDIO.jpg",
    category: "BEAUTY",
    business: "Paragon Studio"
  },
  {
    id: 11,
    name: "Claim luminous skin with a bespoke facial regimen plan.",
    description: "Customized skincare treatment",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/FACIAL_HEALING_CO.jpg",
    category: "BEAUTY",
    business: "FACIAL HEALING CO"
  },
  {
    id: 12,
    name: "Win a luxury minimalist escape to Bondi.",
    description: "Luxury travel experience",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/VENROY.jpg",
    category: "FASHION",
    business: "VENROY"
  },
  {
    id: 13,
    name: "Win an Amaru Sensory Menu experience for two",
    description: "Fine dining experience",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/AMARU.jpg",
    category: "FOOD & DRINK",
    business: "AMARU"
  },
  {
    id: 14,
    name: "Boost your engagement with a content plan from Department of the Future",
    description: "Digital marketing consultation",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/DOTF.png",
    category: "SERVICES",
    business: "DOTF"
  },
  {
    id: 15,
    name: "Free designer sunglasses with any designer frames purchase",
    description: "Premium eyewear offer",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/EYE_ST.jpg",
    category: "FASHION",
    business: "EYE ST"
  },
  {
    id: 16,
    name: "2025 Makeover - Win a consultation for your house",
    description: "Home renovation consultation",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/WINDOW-WORKSHOP.jpg",
    category: "SERVICES",
    business: "WINDOW WORKSHOP"
  }
];

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

const Products = () => {
  const [currentCategory, setCurrentCategory] = useState('VIEW ALL');
  const categories = ['VIEW ALL', 'BRIDAL', 'FASHION', 'FOOD & DRINK', 'BEAUTY', 'SERVICES'];

  // Filter products based on selected category
  const filteredProducts = products
    .filter(product => currentCategory === 'VIEW ALL' ? true : product.category === currentCategory)
    .slice(0, 6);

  return (
    <>
      <div className="h-[45px]"></div>
      <div className="container mx-auto px-4 pt-0 pb-0">
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-8">
          <h2 className="text-2xl font-bold uppercase">
            EXCLUSIVE ARMADALE
          </h2>
          <Link to="/campaigns" className="text-sm uppercase">
            VIEW ALL
          </Link>
        </div>

        <div className="overflow-x-auto pb-4 mb-6 -mx-4 px-4 md:overflow-x-visible md:pb-0 md:mb-10 md:mx-0 md:px-0">
          <div className="flex gap-2 min-w-max md:min-w-0 md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setCurrentCategory(category)}
                className={`border px-6 py-2 text-sm uppercase transition-colors duration-300 whitespace-nowrap
                ${currentCategory === category 
                  ? 'bg-[#080d1e] text-white border-[#080d1e]'
                  : 'border-gray-300 hover:bg-[#080d1e] hover:text-white hover:border-[#080d1e]'}`}
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
                <Link to={`/campaigns/${product.id === 1 ? 'victor-churchill-1' : 
                  product.id === 2 ? 'scanlan-theodore-2' : 
                  product.id === 3 ? 'skin-angel-3' : 
                  product.id === 4 ? 'rinas-cucina-4' : 
                  product.id === 5 ? 'et-al-5' : 
                  product.id === 6 ? 'james-said-6' : 
                  product.id === 7 ? 'riva-bridal-7' : 
                  product.id === 8 ? 'bernadette-pimenta-8' : 
                  product.id === 9 ? 'raffaele-ciuca-9' : 
                  product.id === 10 ? 'paragon-studio-10' : 
                  product.id === 11 ? 'facial-healing-co-11' : 
                  product.id === 12 ? 'venroy-12' : 
                  product.id === 13 ? 'amaru-13' : 
                  product.id === 14 ? 'dotf-14' : 
                  product.id === 15 ? 'eye-st-15' : 
                  product.id === 16 ? 'window-workshop-16' : 
                  `product-${product.id}`}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[222px] object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  />
                </Link>
              </div>
              <div className="pt-4 pb-4 flex flex-col items-start h-[120px] justify-between">
                <h3 className="text-base font-medium leading-tight mb-2 line-clamp-2 h-[40px]">
                  {product.name}
                </h3>
                <Link to={`/campaigns/${product.id === 1 ? 'victor-churchill-1' : 
                  product.id === 2 ? 'scanlan-theodore-2' : 
                  product.id === 3 ? 'skin-angel-3' : 
                  product.id === 4 ? 'rinas-cucina-4' : 
                  product.id === 5 ? 'et-al-5' : 
                  product.id === 6 ? 'james-said-6' : 
                  product.id === 7 ? 'riva-bridal-7' : 
                  product.id === 8 ? 'bernadette-pimenta-8' : 
                  product.id === 9 ? 'raffaele-ciuca-9' : 
                  product.id === 10 ? 'paragon-studio-10' : 
                  product.id === 11 ? 'facial-healing-co-11' : 
                  product.id === 12 ? 'venroy-12' : 
                  product.id === 13 ? 'amaru-13' : 
                  product.id === 14 ? 'dotf-14' : 
                  product.id === 15 ? 'eye-st-15' : 
                  product.id === 16 ? 'window-workshop-16' : 
                  `product-${product.id}`}`}>
                  <button className="border border-gray-300 px-8 py-2 text-xs uppercase hover:bg-[#080d1e] hover:text-white hover:border-[#080d1e] rounded-full transition-colors duration-300 cursor-pointer">
                    ENTER
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* News Section */}
        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-8">
          <h2 className="text-2xl font-bold uppercase">
            Neighbourhood News
          </h2>
          <Link to="/stories" className="text-sm uppercase">
            VIEW ALL
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[45px]">
          {newsItems.map((item) => (
            <div key={item.id} className="flex flex-col h-full group">
              <div className="flex w-full">
                <div className="w-[15px] bg-[rgb(185,255,108)]"></div>
                <div className="bg-[#080d1e] text-white px-3 py-2 flex-1">
                  <span className="text-sm uppercase font-bold">{item.business}</span>
                </div>
              </div>
              <div className="relative overflow-hidden">
                <Link to={item.id === 1 ? '/campaigns/new-1' : 
                        item.id === 2 ? '/campaigns/new-2' : 
                        item.id === 3 ? '/campaigns/new-3' : 
                        `/stories/story-${item.id}`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[222px] object-cover transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                  />
                </Link>
              </div>
              <div className="py-4 h-[120px] flex flex-col justify-between">
                <h3 className="text-base font-medium leading-tight self-start line-clamp-2 h-[40px]">
                  {item.title}
                </h3>
                <Link to={item.id === 1 ? '/campaigns/new-1' : 
                        item.id === 2 ? '/campaigns/new-2' : 
                        item.id === 3 ? '/campaigns/new-3' : 
                        `/stories/story-${item.id}`}>
                  <button className="border border-gray-300 px-8 py-2 text-xs uppercase hover:bg-[#080d1e] hover:text-white hover:border-[#080d1e] rounded-full transition-colors duration-300 cursor-pointer">
                    READ MORE
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
