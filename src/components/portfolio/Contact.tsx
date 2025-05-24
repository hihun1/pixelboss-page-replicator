
import { Mail, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-cyan-400 pixel-font">
          Let's Create Together
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
          Ready to bring your pixel art vision to life? Let's collaborate on your next project!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/25">
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300">
            <Github className="w-5 h-5 mr-2" />
            View GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
