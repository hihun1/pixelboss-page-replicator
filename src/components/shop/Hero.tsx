import { motion } from 'framer-motion';
import { ShoppingBag, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[70vh]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://3143.pixelboss.io/lovable-uploads/57b71957-c127-4fc2-abf5-b3a4bd37d14b.png"
          alt="Store front"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero content */}
      <div className="relative h-full flex items-end px-6 pb-8">
          <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left w-full max-w-6xl mx-auto"
          >
          <h1 className="text-xl md:text-4xl font-bold text-white tracking-widest leading-tight">
            FRIENDS OF ARMADALE
            </h1>
          </motion.div>
      </div>
    </section>
  );
};

export default Hero;
