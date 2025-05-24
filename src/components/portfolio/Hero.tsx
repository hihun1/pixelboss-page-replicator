
import { useState, useEffect } from 'react';
import { Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  mousePosition: { x: number; y: number };
}

const Hero = ({ mousePosition }: HeroProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Pixel art avatar placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg shadow-2xl shadow-cyan-500/25 flex items-center justify-center animate-float">
          <div className="w-24 h-24 bg-black/20 rounded-lg flex items-center justify-center">
            <Star className="w-12 h-12 text-yellow-400 animate-pulse" />
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          PIXEL BOSS
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Creating stunning pixel art and digital experiences that blend retro aesthetics with modern innovation
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25">
            View Portfolio
          </Button>
          <Button variant="outline" className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-6 rounded-lg font-semibold transition-all duration-300">
            <Download className="w-4 h-4 mr-2" />
            Download CV
          </Button>
        </div>
      </div>

      {/* Floating cursor follower */}
      <div
        className="fixed pointer-events-none z-10 w-4 h-4 bg-cyan-400 rounded-full mix-blend-difference transition-transform duration-150"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
      />
    </section>
  );
};

export default Hero;
