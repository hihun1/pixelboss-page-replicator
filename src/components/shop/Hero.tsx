import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative">
      <motion.img 
        src="https://3143.pixelboss.io/lovable-uploads/57b71957-c127-4fc2-abf5-b3a4bd37d14b.png" 
        alt="Victor Churchill Storefront" 
        className="w-full h-[70vh] object-cover brightness-[0.65]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
      <div className="absolute inset-0 bg-black/30">
        <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white">
          <motion.h1 
            className="text-white text-4xl md:text-6xl font-normal absolute bottom-8 left-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            FRIENDS OF ARMADALE
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
