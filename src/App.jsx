import React, { useEffect, useState } from 'react'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import TestimonialsSection from './components/TestimonialsSection'
import ContactSection from './components/ContactSection'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-scroll'

const App = () => {
  const [errorState, setErrorState] = useState(false);
  
  // Error handling
  useEffect(() => {
    // Capture and suppress third-party script errors
    const originalConsoleError = console.error;
    console.error = (...args) => {
      const errorMessage = args.join(' ');
      if (
        errorMessage.includes('Monetization not allowed') ||
        errorMessage.includes('Ezoic') ||
        errorMessage.includes('403 (Forbidden)')
      ) {
        // Suppress these specific errors
        return;
      }
      originalConsoleError(...args);
    };
    
    // Global error handler
    const errorHandler = (event) => {
      const errorText = event.message || 'Unknown error';
      
      // Ignore third-party script errors
      if (
        errorText.includes('Ezoic') ||
        errorText.includes('sa.min.js') ||
        event.filename?.includes('sa.min.js') ||
        event.filename?.includes('ezoic')
      ) {
        event.preventDefault();
        return;
      }
      
      // Handle other errors if needed
      setErrorState(true);
    };
    
    window.addEventListener('error', errorHandler, true);
    
    return () => {
      window.removeEventListener('error', errorHandler, true);
      console.error = originalConsoleError;
    };
  }, []);
  
  useEffect(() => {
    // Enable smooth scrolling
    const smoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.hash) {
        const targetId = e.target.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          scroll.scrollTo(targetElement.offsetTop - 80, {
            duration: 800,
            smooth: 'easeInOutQuart'
          });
        }
      }
    };
    
    document.addEventListener('click', smoothScroll);
    
    return () => {
      document.removeEventListener('click', smoothScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-darker via-dark to-dark-light text-light overflow-x-hidden">
      {/* {errorState && (
        <div className="fixed top-0 left-0 right-0 bg-red-500 text-white p-2 text-center z-50">
          <p>An error occurred. Please refresh the page.</p>
          <button 
            onClick={() => window.location.reload()}
            className="ml-4 px-2 py-1 bg-white text-red-500 rounded text-sm"
          >
            Refresh
          </button>
        </div>
      )}
       */}
      <Navbar />
      <div id="home">
        <LandingPage />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      
      {/* Scroll to top button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={-80}
          duration={800}
        >
          <button className="w-12 h-12 rounded-full bg-primary-light/80 hover:bg-primary-light text-white flex items-center justify-center shadow-lg hover:shadow-primary-light/30 transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default App