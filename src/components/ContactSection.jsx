import React, { useRef, useState, useEffect } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { FiSend, FiMail, FiPhone, FiMapPin, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import gsap from 'gsap';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rippleEffect, setRippleEffect] = useState({ x: 0, y: 0, active: false });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
  useEffect(() => {
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll('input, textarea');
      
      const timeline = gsap.timeline({ paused: true });
      
      inputs.forEach((input, index) => {
        timeline.fromTo(
          input,
          { y: 20, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 0.5, 
            ease: 'power2.out',
            delay: index * 0.1
          },
          index * 0.1
        );
      });
      
      if (isInView) {
        timeline.play();
      }
    }
  }, [isInView, formRef]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        // your template ID
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
          to_email: 'prakashpatel972461@gmail.com',
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: '',
          email: '',
          message: ''
        });
      }, 3000);

    } catch (error) {
      console.error('Error sending email:', error);
      setIsSubmitting(false);
      // Optional: Add error handling UI here
    }
  };
  
  const handleRippleEffect = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setRippleEffect({ x, y, active: true });
    setTimeout(() => setRippleEffect(prev => ({ ...prev, active: false })), 500);
  };
  
  return (
    <section className="py-20 overflow-hidden" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="relative"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary-light/10 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-light/10 rounded-full blur-3xl -z-10"></div>
          
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16 relative">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-primary-light/20 to-secondary-light/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-4 inline-block">
                <FiMail className="inline-block mr-2" />
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-light-dark max-w-2xl mx-auto text-lg">
              Reach out to us for collaborations, projects, or just to say hi!
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info - Left Side */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-2"
            >
              <div className="relative bg-dark-darker/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-secondary-light/5 rounded-2xl opacity-50"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  
                  <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                        <FiMail className="text-primary-light" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Email</h4>
                        <a href="mailto:hellobrother91069@gmail.com" className="text-light-dark hover:text-primary-light transition-colors duration-300">
                          hello@nexaweb.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                        <FiPhone className="text-primary-light" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Phone</h4>
                        <a href="tel:+919876543210" className="text-light-dark hover:text-primary-light transition-colors duration-300">
                          +91 98765 43210
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-lg bg-primary-light/10 flex items-center justify-center mr-4 mt-1">
                        <FiMapPin className="text-primary-light" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Location</h4>
                        <p className="text-light-dark">
                          Bengaluru, Karnataka, India
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-medium mb-4">Connect With Us</h4>
                    <div className="flex space-x-4">
                      {[
                        { icon: <FiGithub />, url: 'https://github.com/nexaweb' },
                        { icon: <FiTwitter />, url: 'https://twitter.com/nexaweb' },
                        { icon: <FiLinkedin />, url: 'https://linkedin.com/company/nexaweb' },
                        { icon: <FiInstagram />, url: 'https://instagram.com/nexaweb' }
                      ].map((social, index) => (
                        <a 
                          key={index}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary-light/20 hover:text-primary-light transition-all duration-300 group"
                        >
                          <span className="transform group-hover:scale-110 transition-transform duration-300">
                            {social.icon}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br from-primary-light/10 to-primary-light/5 rounded-full blur-2xl"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form - Right Side */}
            <motion.div 
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <div className="relative bg-dark-darker/80 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-secondary-light/5 rounded-2xl opacity-50"></div>
                
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-6">Send Us a Message</h3>
                  
                  <AnimatePresence>
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 mb-6"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center mr-3">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-white font-medium">Message Sent Successfully!</h4>
                            <p className="text-green-300 text-sm">We'll get back to you as soon as possible.</p>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="block text-white font-medium mb-2">Your Name</label>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={formState.name}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-dark-light/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-light/50 transition-all duration-300"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="block text-white font-medium mb-2">Your Email</label>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={formState.email}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-dark-light/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-light/50 transition-all duration-300"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="message" className="block text-white font-medium mb-2">Your Message</label>
                          <textarea
                            id="message"
                            name="message"
                            value={formState.message}
                            onChange={handleInputChange}
                            required
                            rows="5"
                            className="w-full bg-dark-light/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary-light/50 transition-all duration-300 resize-none"
                            placeholder="Hello, I'd like to discuss a project..."
                          ></textarea>
                        </div>
                        
                        <div>
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            onClick={handleRippleEffect}
                            className="relative overflow-hidden w-full bg-gradient-to-r from-primary-light to-primary-dark text-white font-medium rounded-lg px-6 py-3 hover:shadow-lg hover:shadow-primary-light/20 transition-all duration-300 flex items-center justify-center"
                          >
                            {rippleEffect.active && (
                              <span 
                                className="absolute bg-white/30 rounded-full animate-ripple"
                                style={{
                                  top: rippleEffect.y,
                                  left: rippleEffect.x,
                                  width: '300px',
                                  height: '300px',
                                  marginLeft: '-150px',
                                  marginTop: '-150px',
                                }}
                              />
                            )}
                            
                            {isSubmitting ? (
                              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                            ) : (
                              <>
                                <span>Send Message</span>
                                <FiSend className="ml-2" />
                              </>
                            )}
                          </button>
                        </div>
                      </form>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Footer */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 text-center border-t border-white/10 pt-8"
          >
            <p className="text-light-dark">
              © 2025 Nexa Web. All Rights Reserved.
            </p>
            <p className="text-light-dark mt-2">
              Built with ❤ using ReactJS, Tailwind CSS & GSAP by Prakash, Ayush, Deep & Vatsal.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;