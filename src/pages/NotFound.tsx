import { Link } from 'react-router-dom';
import Navigation from '../components/shop/Navigation';
import Footer from '../components/shop/Footer';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Top notification bar */}
      <div className="bg-black text-white text-center py-3 w-full font-medium text-sm">
        This is a demo for Foodservice Australia event - not a live environment. Launching July 2025.
      </div>

      <Navigation activeSection="" setActiveSection={() => {}} />

      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16">
        <h1 className="text-[120px] font-bold text-black mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! Page not found</p>
        <Link 
          to="/" 
          className="inline-flex items-center justify-center bg-black text-white px-6 py-3 text-sm font-medium tracking-wide hover:bg-gray-900 transition-colors"
        >
          Return to Home
        </Link>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
