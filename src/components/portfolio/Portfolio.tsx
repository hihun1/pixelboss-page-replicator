
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Pixel Adventure",
      description: "A retro-style platformer game with handcrafted pixel art",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop",
      tags: ["Game Dev", "Pixel Art", "Unity"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Neon City",
      description: "Cyberpunk-themed environment art and character designs",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      tags: ["Environment", "Concept Art", "Cyberpunk"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Retro Icons",
      description: "Complete icon pack inspired by 8-bit era aesthetics",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop",
      tags: ["UI/UX", "Icons", "8-bit"],
      github: "#",
      demo: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-cyan-400 pixel-font">
          Featured Work
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="bg-black/40 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-black/60 border-cyan-400/50">
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-black/60 border-cyan-400/50">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/20 border border-purple-500/40 rounded-full text-xs text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
