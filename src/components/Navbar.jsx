import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'contact'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveItem(sections[i]);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];
  
  // Animation variants
  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren"
      }
    }
  };
  
  const mobileItemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };
  
  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 transition-all duration-300 ${
          isScrolled ? 'bg-dark-darker/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-light to-secondary-light rounded-full blur-md opacity-70"></div>
                <div className="relative bg-dark-darker rounded-full px-4 py-2 border border-white/10">
                  <span className="text-xl font-bold bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                    Nexa Web
                  </span>
                </div>
              </motion.div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <div className="relative flex items-center">
                {menuItems.map((item) => (
                  <Link
                    key={item.id}
                    to={item.id}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 cursor-pointer ${
                      activeItem === item.id ? 'text-white' : 'text-white/70 hover:text-white'
                    }`}
                    onClick={() => setActiveItem(item.id)}
                  >
                    {item.label}
                    {activeItem === item.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-light to-secondary-light rounded-full"
                        layoutId="activeIndicator"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                ))}
              </div>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
                className="ml-4"
              >
                <motion.button
                  className="px-4 py-2 bg-gradient-to-r from-primary-light to-primary-dark text-white text-sm font-medium rounded-full hover:shadow-lg hover:shadow-primary-light/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Hire Us
                </motion.button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="text-white focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="relative w-6 h-5">
                  <motion.span
                    className="absolute top-0 left-0 w-6 h-0.5 bg-white rounded-full"
                    animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  ></motion.span>
                  <motion.span
                    className="absolute top-2 left-0 w-6 h-0.5 bg-white rounded-full"
                    animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  ></motion.span>
                  <motion.span
                    className="absolute top-4 left-0 w-6 h-0.5 bg-white rounded-full"
                    animate={isMobileMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  ></motion.span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 pt-20 bg-dark-darker/95 backdrop-blur-md md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
          >
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col space-y-4">
                {menuItems.map((item) => (
                  <motion.div key={item.id} variants={mobileItemVariants}>
                    <Link
                      to={item.id}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={800}
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors duration-300 ${
                        activeItem === item.id
                          ? 'bg-primary-light/10 text-primary-light'
                          : 'text-white hover:bg-white/5'
                      }`}
                      onClick={() => {
                        setActiveItem(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div variants={mobileItemVariants}>
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={800}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full block"
                  >
                    <button className="w-full px-4 py-3 bg-gradient-to-r from-primary-light to-primary-dark text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-primary-light/20 transition-all duration-300">
                      Hire Us
                    </button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 