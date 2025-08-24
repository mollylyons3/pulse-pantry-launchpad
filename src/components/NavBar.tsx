import { useState, useEffect } from 'react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="/pulsepantry-logo.png" 
              alt="Pulse Pantry Logo" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>

          {/* Centered About Button */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={scrollToAbout}
              className="text-foreground hover:text-primary transition-colors duration-200 font-medium px-4 py-2 rounded-lg hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/20"
              aria-label="Scroll to About section"
            >
              About
            </button>
          </div>

          {/* Empty right side */}
          <div className="flex-shrink-0 w-8 sm:w-10"></div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;