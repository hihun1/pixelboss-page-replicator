import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navigation from '../components/shop/Navigation';
import Footer from '../components/shop/Footer';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  business: string;
  slug: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Free aperitif with reservations for two in April",
    description: "Enjoy a complimentary aperitif at Victor Churchill",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/victor.png",
    category: "FOOD & DRINK",
    business: "Victor Churchill",
    slug: "victor-churchill-1"
  },
  {
    id: 2,
    name: "Attend our AW25 Collection Preview and Win a Trip to Paris!",
    description: "Fashion showcase and exclusive opportunity",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/scanlan.png",
    category: "FASHION",
    business: "Scanlan Theodore",
    slug: "scanlan-theodore-2"
  },
  {
    id: 3,
    name: "12 IPL Limelight Full Face Treatments for the price of 9!",
    description: "Limited time beauty treatment offer",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/skin_angel.png",
    category: "BEAUTY",
    business: "SKIN ANGEL",
    slug: "skin-angel-3"
  },
  {
    id: 4,
    name: "Win a set menu and accompanying drinks experience for you and three friends",
    description: "Exclusive dining experience opportunity",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/rinacuccina.jpg",
    category: "FOOD & DRINK",
    business: "RINA'S CUCINA",
    slug: "rinas-cucina-4"
  },
  {
    id: 5,
    name: "Win a $200 Et Al voucher",
    description: "Fashion voucher giveaway",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/etal.png",
    category: "FASHION",
    business: "ET AL",
    slug: "et-al-5"
  },
  {
    id: 6,
    name: "2025 Makeover - Win a consultation for your house",
    description: "Home styling consultation prize",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/jamessaid.png",
    category: "SERVICES",
    business: "JAMES SAID",
    slug: "james-said-6"
  },
  {
    id: 7,
    name: "Enjoy a high tea while you find your dream dress!",
    description: "Bridal experience with high tea",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/0822b425fe42549f08a5473924486ece.jpg",
    category: "BRIDAL",
    business: "Riva Bridal",
    slug: "riva-bridal-7"
  },
  {
    id: 8,
    name: "Design your dream dress with Bernadette Pimenta",
    description: "Custom bridal design experience",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/BERNADETTE_PIMENTA.jpg",
    category: "BRIDAL",
    business: "Bernadette Pimenta",
    slug: "bernadette-pimenta-8"
  },
  {
    id: 9,
    name: "Win an Italian honeymoon from Raffaele Ciuca",
    description: "Luxury honeymoon package",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/RAFFAELE_CIUCA.jpg",
    category: "BRIDAL",
    business: "Raffaele Ciuca",
    slug: "raffaele-ciuca-9"
  },
  {
    id: 10,
    name: "A year of haircare from Paragon Studio could be yours.",
    description: "Premium haircare package",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/PARAGON_STUDIO.jpg",
    category: "BEAUTY",
    business: "Paragon Studio",
    slug: "paragon-studio-10"
  },
  {
    id: 11,
    name: "Claim luminous skin with a bespoke facial regimen plan.",
    description: "Customized skincare treatment",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/FACIAL_HEALING_CO.jpg",
    category: "BEAUTY",
    business: "FACIAL HEALING CO",
    slug: "facial-healing-co-11"
  },
  {
    id: 12,
    name: "Win a luxury minimalist escape to Bondi.",
    description: "Luxury travel experience",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/VENROY.jpg",
    category: "FASHION",
    business: "VENROY",
    slug: "venroy-12"
  },
  {
    id: 13,
    name: "Win an Amaru Sensory Menu experience for two",
    description: "Fine dining experience",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/AMARU.jpg",
    category: "FOOD & DRINK",
    business: "AMARU",
    slug: "amaru-13"
  },
  {
    id: 14,
    name: "Boost your engagement with a content plan from Department of the Future",
    description: "Digital marketing consultation",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/DOTF.png",
    category: "SERVICES",
    business: "DOTF",
    slug: "dotf-14"
  },
  {
    id: 15,
    name: "Free designer sunglasses with any designer frames purchase",
    description: "Premium eyewear offer",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/EYE_ST.jpg",
    category: "FASHION",
    business: "EYE ST",
    slug: "eye-st-15"
  },
  {
    id: 16,
    name: "2025 Makeover - Win a consultation for your house",
    description: "Home renovation consultation",
    image: "https://wp.hmm.pixelboss.io/wp-content/uploads/2025/04/WINDOW-WORKSHOP.jpg",
    category: "SERVICES",
    business: "WINDOW WORKSHOP",
    slug: "window-workshop-16"
  }
];

const ExclusiveArmadale = () => {
  const [currentCategory, setCurrentCategory] = useState('VIEW ALL');
  const [activeSection, setActiveSection] = useState('exclusivearmadale');
  const categories = ['VIEW ALL', 'BRIDAL', 'FASHION', 'FOOD & DRINK', 'BEAUTY', 'SERVICES'];
  const location = useLocation();

  useEffect(() => {
    // Handle hash changes
    const hash = location.hash.slice(1).toUpperCase();
    if (hash) {
      const category = categories.find(cat => 
        cat.toLowerCase().replace(/[& ]/g, '') === hash.toLowerCase()
      );
      if (category) {
        setCurrentCategory(category);
        // Scroll to category section after a short delay
        setTimeout(() => {
          const element = document.getElementById(hash.toLowerCase());
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [location.hash, categories]);

  const filteredProducts = products.filter(product => 
    currentCategory === 'VIEW ALL' ? true : product.category === currentCategory
  );

  const handleCategoryClick = (category: string) => {
    setCurrentCategory(category);
    // Update URL hash without the '&' symbol and spaces
    const hash = category === 'VIEW ALL' ? '' : category.toLowerCase().replace(/[& ]/g, '');
    window.history.pushState(null, '', hash ? `#${hash}` : window.location.pathname);
    
    // Scroll to category section
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      <div className="min-h-screen bg-white relative">
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-8 max-w-[1400px]">
            {/* Header with orange bar */}
            <div className="flex mb-8">
              <div className="w-1.5 bg-[#FF6B00] mr-4"></div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-[#080d1e]">EXCLUSIVE ARMADALE</h1>
                <p className="text-gray-600 mt-2">Exclusive offers from High Street</p>
              </div>
            </div>

            {/* Category filters */}
            <div className="flex flex-nowrap overflow-x-auto gap-2 mb-12 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  id={category.toLowerCase().replace(/[& ]/g, '')}
                  onClick={() => handleCategoryClick(category)}
                  className={`whitespace-nowrap px-8 py-2 border transition-all duration-150 active:scale-95 ${
                    currentCategory === category
                      ? 'bg-[#080d1e] text-white border-[#080d1e]'
                      : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="flex flex-col h-full group">
                  <div className="flex w-full">
                    <div className="w-[15px] bg-orange-500"></div>
                    <div className="bg-[#080d1e] text-white px-3 py-2 flex-1">
                      <span className="text-sm uppercase font-medium">{product.business}</span>
                    </div>
                  </div>
                  <div className="relative overflow-hidden">
                    <Link 
                      to={`/campaigns/${product.slug}`}
                    >
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
                    <Link 
                      to={`/campaigns/${product.slug}`}
                    >
                      <button className="border border-gray-300 px-8 py-2 text-xs uppercase hover:bg-[#080d1e] hover:text-white hover:border-[#080d1e] rounded-full transition-all duration-150 active:scale-95 cursor-pointer">
                        ENTER
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ExclusiveArmadale; 