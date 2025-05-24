
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 px-6 border-t border-cyan-500/30 bg-black/20">
      <div className="container mx-auto text-center">
        <p className="text-gray-400 flex items-center justify-center gap-1">
          © {currentYear} PixelBoss. Crafted with <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" /> and lots of pixels.
        </p>
        
        <div className="mt-4">
          <ul className="flex justify-center space-x-6">
            <li><a href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">Privacy</a></li>
            <li><a href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">Terms</a></li>
            <li><a href="#" className="text-xs text-gray-500 hover:text-cyan-400 transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
