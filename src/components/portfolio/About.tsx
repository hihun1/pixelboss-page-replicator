
import { Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400 pixel-font">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
