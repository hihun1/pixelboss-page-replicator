import { useState, useRef, useEffect } from 'react';
import { Menu, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navigation = ({ activeSection, setActiveSection }: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNavClick = (section: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
    }
    setActiveSection(section);
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  const handleDropdownClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleDropdownItemClick = (item: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setIsDropdownOpen(false);
    setActiveSection('exclusivearmadale');
    
    // Create hash from category name
    const hash = item.toLowerCase().replace(/[& ]/g, '');
    
    // Navigate with hash
    navigate(`/exclusive-armadale#${hash}`);
  };

  const navItems = ['3143', 'Inner Circle', 'Exclusive Armadale', 'Neighbourhood News', 'Members'];
  const dropdownItems = ['Bridal', 'Fashion', 'Food & Drink', 'Beauty', 'Services'];

  return (
    <nav className="bg-white text-black border-b border-gray-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/"
            onClick={(e) => {
              e.preventDefault();
              setActiveSection('home');
              setIsMobileMenuOpen(false);
              setIsDropdownOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
              navigate('/');
            }}
            className="text-2xl font-bold hover:text-gray-600 transition-colors"
          >
            3143
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.slice(1).map((item) => {
              if (item === 'Exclusive Armadale') {
                return (
                  <div key={item} className="relative" ref={dropdownRef}>
                    <button
                      onClick={handleDropdownClick}
                      className={`text-sm font-medium transition-colors hover:text-gray-600 flex items-center gap-1 active:scale-95 ${
                        activeSection === item.toLowerCase().replace(' ', '') ? 'text-gray-600' : 'text-black'
                      }`}
                    >
                      {item}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute left-0 mt-2 py-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-50">
                        {dropdownItems.map((dropdownItem) => (
                          <button
                            key={dropdownItem}
                            onClick={(e) => handleDropdownItemClick(dropdownItem, e)}
                            className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 active:bg-gray-200 transition-colors duration-150"
                          >
                            {dropdownItem}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return item === 'Members' ? (
                <Link
                  key={item}
                  to="/members"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDropdownOpen(false);
                    navigate('/members');
                  }}
                  className="text-sm font-medium bg-black text-white px-4 py-1.5 hover:bg-gray-900 transition-colors"
                >
                  {item}
                </Link>
              ) : (
                <Link
                  key={item}
                  to={item === 'Neighbourhood News' ? '/neighbourhood-news' : item === 'Inner Circle' ? '/inner-circle' : '#'}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.toLowerCase().replace(' ', ''));
                    if (item === 'Neighbourhood News') {
                      navigate('/neighbourhood-news');
                    } else if (item === 'Inner Circle') {
                      navigate('/inner-circle');
                    }
                  }}
                  className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                    activeSection === item.toLowerCase().replace(' ', '') ? 'text-gray-600' : 'text-black'
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => {
                if (item === 'Exclusive Armadale') {
                  return (
                    <div key={item} className="space-y-2">
                      <button
                        onClick={handleDropdownClick}
                        className={`text-sm font-medium transition-colors hover:text-gray-600 flex items-center gap-1 active:scale-95 ${
                          activeSection === item.toLowerCase().replace(' ', '') ? 'text-gray-600' : 'text-black'
                        }`}
                      >
                        {item}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isDropdownOpen && (
                        <div className="pl-4 space-y-2">
                          {dropdownItems.map((dropdownItem) => (
                            <button
                              key={dropdownItem}
                              onClick={(e) => handleDropdownItemClick(dropdownItem, e)}
                              className="block text-sm text-gray-600 hover:text-black"
                            >
                              {dropdownItem}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }
                return item === 'Members' ? (
                  <Link
                    key={item}
                    to="/members"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsDropdownOpen(false);
                      navigate('/members');
                    }}
                    className="text-sm font-medium bg-black text-white px-4 py-1.5 hover:bg-gray-900 transition-colors inline-block"
                  >
                    {item}
                  </Link>
                ) : (
                  <Link
                    key={item}
                    to={item === 'Neighbourhood News' ? '/neighbourhood-news' : item === 'Inner Circle' ? '/inner-circle' : '#'}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.toLowerCase().replace(' ', ''));
                      if (item === 'Neighbourhood News') {
                        navigate('/neighbourhood-news');
                      } else if (item === 'Inner Circle') {
                        navigate('/inner-circle');
                      }
                    }}
                    className={`text-sm font-medium transition-colors hover:text-gray-600 ${
                      activeSection === item.toLowerCase().replace(' ', '') ? 'text-gray-600' : 'text-black'
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
