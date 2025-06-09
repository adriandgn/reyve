
// DEPRECATED: Usa '@/components/layout/Navbar' en vez de este archivo.
export { default } from "./layout/Navbar";

import { cn } from "@/lib/utils";
import { Menu, X, LogIn, User } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const isLoginPage = location.pathname === "/login";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : '';
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    if (isMenuOpen) {
      setIsMenuOpen(false);
      document.body.style.overflow = '';
    }
  };

  const handleNavClick = (e: React.MouseEvent, path: string, section?: string) => {
    e.preventDefault();
    
    // Cerrar el menú móvil si está abierto
    if (isMenuOpen) {
      toggleMenu();
    }
    
    // Si estamos en la misma página, hacer scroll
    if (location.pathname === path) {
      if (section) {
        const element = document.getElementById(section);
        if (element) {
          const yOffset = -80; // Ajuste para la altura del encabezado
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      } else {
        // Si no hay sección, ir al inicio de la página
        scrollToTop();
      }
    } else {
      // Si es una página diferente, navegar a ella
      window.location.href = path + (section ? `#${section}` : '');
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed font-display top-0 left-0 right-0 z-50 py-2 sm:py-3 md:py-4 bg-white/80 backdrop-blur-md shadow-sm"
        )}
      >
        <div className="container flex items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
            onClick={(e) => handleNavClick(e, '/')}
            aria-label="Home"
          >
            <img 
              src="/logo-black.svg" 
              alt="Logo" 
              className="h-7 sm:h-8" 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={cn(
                "nav-link",
                location.pathname === "/" ? "text-brand-600 font-medium" : "text-gray-700 hover:text-brand-600"
              )}
              onClick={(e) => handleNavClick(e, '/')}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={cn(
                "nav-link",
                location.pathname === "/about" ? "text-brand-600 font-medium" : "text-gray-700 hover:text-brand-600"
              )}
              onClick={(e) => handleNavClick(e, '/about')}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className={cn(
                "nav-link",
                location.pathname === "/contact" ? "text-brand-600 font-medium" : "text-gray-700 hover:text-brand-600"
              )}
              onClick={(e) => handleNavClick(e, '/contact')}
            >
              Contact
            </Link>
            
            {/* Desktop Login Button */}
            <motion.div 
              className="relative ml-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/login"
                className={cn(
                  "flex items-center space-x-2 px-4 py-2 rounded-full border-2 transition-all duration-300",
                  isLoginPage 
                    ? "bg-brand-600 border-brand-600 text-white"
                    : "border-brand-500 text-brand-600 hover:bg-brand-50"
                )}
                onClick={(e) => handleNavClick(e, '/login')}
              >
                <User size={18} className={isLoginPage ? "text-white" : "text-brand-600"} />
                <span className="font-medium">Login</span>
              </Link>
              <motion.div 
                className={cn(
                  "absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-500",
                  isLoginPage ? "scale-x-100" : "scale-x-0"
                )}
                initial={false}
                animate={{ scaleX: isLoginPage ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 p-3 focus:outline-none" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white/95 backdrop-blur-md transition-opacity duration-300 ease-in-out overflow-y-auto",
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="min-h-screen w-full flex flex-col">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button 
              className="p-2 text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
            <nav className="w-full max-w-md space-y-4">
              <Link 
                to="/" 
                className={cn(
                  "block text-xl font-medium py-3 px-8 text-center rounded-full transition-all duration-300",
                  "font-['Brockmann',sans-serif] tracking-tight",
                  location.pathname === "/" 
                    ? "bg-brand-500 text-white hover:bg-brand-600" 
                    : "text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                )}
                onClick={(e) => {
                  handleNavClick(e, '/');
                  toggleMenu();
                }}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={cn(
                  "block text-xl font-medium py-3 px-8 text-center rounded-full transition-all duration-300",
                  "font-['Brockmann',sans-serif] tracking-tight",
                  location.pathname === "/about" 
                    ? "bg-brand-500 text-white hover:bg-brand-600" 
                    : "text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                )}
                onClick={(e) => {
                  handleNavClick(e, '/about');
                  toggleMenu();
                }}
              >
                About Us
              </Link>
              <Link 
                to="/contact" 
                className={cn(
                  "block text-xl font-medium py-3 px-8 text-center rounded-full transition-all duration-300",
                  "font-['Brockmann',sans-serif] tracking-tight",
                  location.pathname === "/contact" 
                    ? "bg-brand-500 text-white hover:bg-brand-600" 
                    : "text-gray-700 hover:bg-gray-100 border-2 border-gray-200"
                )}
                onClick={(e) => {
                  handleNavClick(e, '/contact');
                  toggleMenu();
                }}
              >
                Contact
              </Link>
              
              {/* Mobile Login Button */}
              <Link 
                to="/login" 
                className={cn(
                  "block text-xl font-medium py-3 px-8 text-center rounded-full transition-all duration-300 flex items-center justify-center space-x-2",
                  "font-['Brockmann',sans-serif] tracking-tight",
                  isLoginPage
                    ? "bg-brand-500 text-white hover:bg-brand-600"
                    : "text-brand-600 hover:bg-brand-50 border-2 border-brand-200"
                )}
                onClick={(e) => {
                  handleNavClick(e, '/login');
                  toggleMenu();
                }}
              >
                <LogIn size={18} className="flex-shrink-0" />
                <span>Partner Login</span>
              </Link>
            </nav>
          </div>
          
          {/* Footer */}
          <div className="p-6 text-center text-sm text-gray-500 border-t border-gray-100">
            <p> {new Date().getFullYear()} Re:YVE. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
