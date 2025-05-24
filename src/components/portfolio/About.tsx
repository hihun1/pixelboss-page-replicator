
import { Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400 pixel-font transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          About Me
        </h2>
        
        <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div>
            <h3 className="text-2xl font-bold mb-6 text-purple-400">Digital Artist & Game Developer</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate pixel artist and game developer with over 5 years of experience creating 
              stunning visual experiences. My work spans from indie game development to commercial 
              illustration, always with a focus on retro aesthetics and modern polish.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/30 p-4 rounded-lg border border-cyan-500/30 animate-glow">
                <h4 className="text-cyan-400 font-semibold mb-2">Games Shipped</h4>
                <p className="text-3xl font-bold">12+</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-purple-500/30 animate-glow">
                <h4 className="text-purple-400 font-semibold mb-2">Art Pieces</h4>
                <p className="text-3xl font-bold">500+</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-500/30 flex items-center justify-center animate-float">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-12 h-12 text-white" />
                </div>
                <p className="text-gray-400">Pixel Art Showcase</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500/20 border border-purple-500/30 rounded-md animate-float" style={{ animationDelay: '1.5s' }}></div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-cyan-500/20 border border-cyan-500/30 rounded-md animate-float" style={{ animationDelay: '0.7s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
