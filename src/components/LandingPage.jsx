import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import WebAnimation from './WebAnimation';
import { Link } from 'react-scroll';

const LandingPage = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    });
  }, [controls]);
  
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-0" ref={ref}>
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary-light/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="block bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                Development with
              </span>
              <span className="block bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                Innovation & Creativity
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-light-dark text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Transforming ideas into high-performance websites & apps with modern technologies and creative solutions.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-7 sm:space-y-0 sm:space-x-4"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-primary-light to-primary-dark text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary-light/30 transition-all duration-300 w-full sm:w-auto"
                >
                  View My Work
                </motion.button>
              </Link>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={800}
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-full hover:bg-white/5 transition-all duration-300 w-full sm:w-auto"
                >
                  Let's Connect
                </motion.button>
              </Link>
            </motion.div>
            
            {/* Tech Stack */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-12 pt-8 border-t border-white/10 hidden md:block"
            >
              <p className="text-light-dark text-sm mb-4">Technologies we work with:</p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                {['React', 'Next.js', 'Tailwind CSS', 'GSAP', 'Three.js'].map((tech, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 bg-dark-darker/50 backdrop-blur-sm border border-white/5 rounded-full px-4 py-2 hover:border-white/20 transition-colors duration-300"
                  >
                    <span className="text-white">{tech}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Code Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative bg-dark-darker/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <WebAnimation />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-1/4 -left-6 w-12 h-12 bg-primary-light/20 rounded-full backdrop-blur-md animate-float hidden lg:block"></div>
              <div className="absolute bottom-1/4 -right-6 w-16 h-16 bg-secondary-light/20 rounded-full backdrop-blur-md animate-float-delay hidden lg:block"></div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <p className="hidden md:block text-light-dark text-sm mb-2">Scroll Down</p>
        <div className="hidden  w-6 h-10 border-2 border-light-dark/30 rounded-full md:flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 1.5,
              ease: "easeInOut"
            }}
            className="w-2 h-2 bg-light rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default LandingPage;