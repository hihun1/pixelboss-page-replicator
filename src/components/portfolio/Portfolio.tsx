
import { Github, ExternalLink, GalleryHorizontal, LayoutGrid } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useEffect, useRef, useState } from 'react';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from '@/components/ui/pagination';

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
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

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

  const projects = [
    {
      id: 1,
      title: "Pixel Adventure",
      description: "A retro-style platformer game with handcrafted pixel art and challenging levels",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop",
      tags: ["Game Dev", "Pixel Art", "Unity"],
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Neon City",
      description: "Cyberpunk-themed environment art and character designs for an indie game project",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
      tags: ["Environment", "Concept Art", "Cyberpunk"],
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Retro Icons",
      description: "Complete icon pack inspired by 8-bit era aesthetics for mobile and web applications",
      image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop",
      tags: ["UI/UX", "Icons", "8-bit"],
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "8-Bit Weather",
      description: "Weather app with retro game style interface and animated pixel art transitions",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      tags: ["Web App", "Pixel Art", "React"],
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Pixel Portfolio",
      description: "Custom portfolio template with nostalgic pixel art theme for creative professionals",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      tags: ["Web Design", "Template", "Portfolio"],
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Arcade Revival",
      description: "Collection of classic arcade games reimagined with modern web technologies",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      tags: ["Game Dev", "Web", "JavaScript"],
      github: "#",
      demo: "#"
    },
    {
      id: 7,
      title: "Digital Memories",
      description: "Nostalgic photo gallery app with retro computer aesthetics and VHS effects",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
      tags: ["Mobile App", "UI/UX", "React Native"],
      github: "#",
      demo: "#"
    },
    {
      id: 8,
      title: "Bit Blocks",
      description: "Low-poly 3D builder game with focus on creativity and resource management",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      tags: ["Game Dev", "3D", "Unity"],
      github: "#",
      demo: "#"
    }
  ];

  const categories = ['all', 'Game Dev', 'Web Design', 'UI/UX', 'Pixel Art', '3D'];

  const filteredProjects = projects.filter(project => {
    if (currentCategory === 'all') return true;
    return project.tags.includes(currentCategory);
  });

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef}
      className="py-20 px-6 bg-black/20"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className={`text-4xl md:text-5xl font-bold text-center mb-8 text-cyan-400 pixel-font transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          Featured Work
        </h2>
        
        <p className={`text-center text-gray-300 max-w-2xl mx-auto mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          Explore my collection of pixel art, game assets, and interactive projects showcasing my passion for retro-style digital creation.
        </p>
        
        {/* Category filters */}
        <div className={`flex flex-wrap gap-3 justify-center mb-12 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={currentCategory === category ? "default" : "outline"}
              className={`bg-${currentCategory === category ? 'cyan-500' : 'black/40'} border-cyan-500/30 hover:bg-cyan-600 hover:text-white px-4 py-2`}
              onClick={() => {
                setCurrentCategory(category);
                setCurrentPage(1); // Reset to first page when changing categories
              }}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {category === 'all' ? 'All Projects' : category}
            </Button>
          ))}
        </div>
        
        {/* Display mode switcher - visual only for now */}
        <div className={`flex justify-end mb-6 transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="flex p-1 bg-black/40 border border-cyan-500/30 rounded-lg">
            <Button variant="ghost" size="sm" className="bg-cyan-500/20">
              <LayoutGrid className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <GalleryHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
        
        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`bg-black/40 border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button size="sm" variant="secondary" className="bg-black/60 border border-cyan-400/50" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-black/60 border border-cyan-400/50" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
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
        
        {/* Pagination */}
        {totalPages > 1 && (
          <div className={`mt-12 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <Pagination>
              <PaginationContent>
                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      onClick={() => paginate(i+1)}
                      isActive={currentPage === i+1}
                      className={`${currentPage === i+1 ? 'bg-cyan-500 border-cyan-400' : 'bg-black/40 border-cyan-500/30'} text-white`}
                    >
                      {i+1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
