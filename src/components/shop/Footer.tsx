import { Link } from 'react-router-dom';

const Footer = () => {
  const navigationLinks = [
    { name: 'INNER CIRCLE', href: '/inner-circle' },
    { name: 'EXCLUSIVE ARMADALE', href: '/exclusive-armadale' },
    { name: 'NEIGHBOURHOOD NEWS', href: '/neighbourhood-news' },
    { name: 'MEMBERS', href: '/members' },
    { name: 'PRIVACY POLICY', href: '/privacy-policy' },
    { name: 'TERMS & CONDITIONS', href: '/terms-conditions' },
  ];
  
  return (
    <footer className="bg-[#0A0A0A] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Navigation Links */}
          <nav className="mb-12">
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-[13px] tracking-wide hover:text-gray-300 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Logo and Powered By */}
          <div className="flex flex-col items-center gap-y-3">
            <span className="text-4xl font-bold tracking-wider">
              3143
            </span>
            <div className="text-[11px] tracking-wide text-gray-400">
              Powered by <span className="text-white">PIXEL BOSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
