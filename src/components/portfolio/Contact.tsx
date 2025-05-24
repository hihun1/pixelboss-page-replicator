
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
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
      id="contact" 
      ref={sectionRef}
      className="py-20 px-6"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 text-cyan-400 pixel-font transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          Let's Create Together
        </h2>
        
        <p className={`text-xl text-gray-300 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          Ready to bring your pixel art vision to life? Let's collaborate on your next project!
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-500 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25 w-full sm:w-auto">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 w-full sm:w-auto">
            <Github className="w-5 h-5 mr-2" />
            View GitHub
          </Button>
        </div>

        {/* Social media links */}
        <div className={`flex justify-center space-x-6 transition-all duration-1000 delay-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
