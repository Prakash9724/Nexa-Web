import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { FiMonitor, FiSmartphone, FiLayout, FiTrendingUp, FiArrowRight, FiCheck } from 'react-icons/fi';

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [activeService, setActiveService] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  
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
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: i * 0.1
      }
    }),
    hover: {
      y: -15,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 }
    }
  };
  
  const detailsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      transition: { duration: 0.3, ease: "easeIn" }
    }
  };
  
  const services = [
    {
      id: 1,
      title: "Custom Web Development",
      description: "Scalable & performance-driven websites with modern frameworks.",
      icon: <FiMonitor className="w-7 h-7" />,
      color: "from-blue-500 to-indigo-600",
      features: ["React & Next.js", "Responsive Design", "API Integration", "Performance Optimization"],
      detailedDescription: "We build custom web applications that are tailored to your specific business needs. Our development process focuses on creating scalable, maintainable, and high-performance solutions using the latest technologies and best practices.",
      benefits: [
        "Improved user experience and engagement",
        "Faster loading times and better performance",
        "Scalable architecture for future growth",
        "SEO-friendly implementation"
      ],
      technologies: ["React", "Next.js", "Node.js", "GraphQL", "REST APIs"]
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Innovative and user-friendly mobile solutions with React Native & Kotlin.",
      icon: <FiSmartphone className="w-7 h-7" />,
      color: "from-green-500 to-emerald-600",
      features: ["Cross-platform Apps", "Native Performance", "Offline Capability", "Push Notifications"],
      detailedDescription: "Our mobile app development services focus on creating seamless, intuitive applications that work flawlessly across multiple platforms. We combine beautiful design with powerful functionality to deliver exceptional mobile experiences.",
      benefits: [
        "Reach users on both iOS and Android with a single codebase",
        "Native-like performance and user experience",
        "Offline functionality for uninterrupted usage",
        "Push notifications for better user engagement"
      ],
      technologies: ["React Native", "Kotlin", "Swift", "Firebase", "Redux"]
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Pixel-perfect, modern, and interactive user experiences.",
      icon: <FiLayout className="w-7 h-7" />,
      color: "from-purple-500 to-pink-600",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      detailedDescription: "Our design process is centered around creating intuitive, engaging, and visually stunning interfaces. We combine user research, wireframing, and prototyping to craft experiences that delight users and achieve business goals.",
      benefits: [
        "Increased user satisfaction and retention",
        "Reduced learning curve for new users",
        "Higher conversion rates and engagement",
        "Consistent brand experience across platforms"
      ],
      technologies: ["Figma", "Adobe XD", "Sketch", "Framer", "Principle"]
    },
    {
      id: 4,
      title: "SEO & Optimization",
      description: "Speed & search engine-friendly websites for better ranking.",
      icon: <FiTrendingUp className="w-7 h-7" />,
      color: "from-orange-500 to-red-600",
      features: ["Technical SEO", "Performance Metrics", "Content Strategy", "Analytics Setup"],
      detailedDescription: "We optimize your digital presence to ensure maximum visibility and performance. Our comprehensive approach includes technical SEO, performance optimization, content strategy, and analytics implementation to drive sustainable growth.",
      benefits: [
        "Improved search engine rankings and visibility",
        "Faster page load times and better user experience",
        "Data-driven insights for continuous improvement",
        "Increased organic traffic and conversions"
      ],
      technologies: ["Google Analytics", "Lighthouse", "PageSpeed Insights", "Schema Markup", "SEMrush"]
    }
  ];
  
  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };
  
  return (
    <section className="py-20 overflow-hidden" id="services">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              Our Expertise
            </h2>
            <p className="text-light-dark max-w-2xl mx-auto text-lg">
              We deliver cutting-edge solutions tailored to your business needs with our comprehensive range of services.
            </p>
          </motion.div>
          
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                whileTap="tap"
                onClick={() => handleServiceClick(service.id)}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
                className="relative group cursor-pointer"
              >
                {/* Animated Background Glow Effect */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-2xl blur-xl opacity-30 transition-all duration-500 ${
                    hoveredService === service.id || activeService === service.id ? 'opacity-70 scale-105' : 'opacity-30 scale-100'
                  }`}
                ></div>
                
                {/* Animated Particles (Dots) */}
                {(hoveredService === service.id || activeService === service.id) && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}
                        initial={{ 
                          x: 0, 
                          y: 0, 
                          opacity: 0 
                        }}
                        animate={{ 
                          x: Math.random() * 100 - 50, 
                          y: Math.random() * 100 - 50, 
                          opacity: Math.random() * 0.5 + 0.3 
                        }}
                        transition={{ 
                          duration: 2 + Math.random() * 2, 
                          repeat: Infinity, 
                          repeatType: 'reverse' 
                        }}
                        style={{
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                        }}
                      />
                    ))}
                  </>
                )}
                
                {/* Card Content */}
                <div className={`relative h-full bg-dark-darker/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-6 flex flex-col transition-all duration-300 ${
                  activeService === service.id ? 'border-opacity-50 border-white/30 shadow-lg shadow-primary-light/20' : ''
                }`}>
                  {/* Icon with Pulse Effect */}
                  <div className="relative">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 transition-transform duration-300 ${
                      hoveredService === service.id ? 'scale-110' : ''
                    }`}>
                      {service.icon}
                    </div>
                    
                    {/* Pulse Effect */}
                    {(hoveredService === service.id || activeService === service.id) && (
                      <div className="absolute inset-0 rounded-xl">
                        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl animate-ping opacity-30`}></div>
                      </div>
                    )}
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-light-dark mb-5">{service.description}</p>
                  
                  {/* Features List */}
                  <div className="space-y-2 mt-auto">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`}></div>
                        <p className="text-light-dark text-sm">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Learn More Button */}
                  <div className={`mt-6 flex justify-end transition-opacity duration-300 ${
                    activeService === service.id ? 'opacity-0' : 'opacity-100'
                  }`}>
                    <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                      <span>Learn More</span>
                      <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Expanded Service Details */}
          <AnimatePresence>
            {activeService && (
              <motion.div
                variants={detailsVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="mt-12 relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-secondary-light/10 rounded-2xl blur-xl opacity-50"></div>
                
                <div className="relative bg-dark-darker/90 backdrop-blur-md border border-white/10 rounded-2xl p-8">
                  {services
                    .filter(service => service.id === activeService)
                    .map(service => (
                      <div key={service.id} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                          <div className="flex items-center mb-6">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mr-4`}>
                              {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                          </div>
                          
                          <p className="text-light-dark mb-6 text-lg leading-relaxed">
                            {service.detailedDescription}
                          </p>
                          
                          <h4 className="text-xl font-semibold text-white mb-4">Key Benefits</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                                  <FiCheck className="text-white text-xs" />
                                </div>
                                <p className="text-light-dark">{benefit}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="lg:col-span-1">
                          <div className={`h-full bg-gradient-to-br ${service.color}/10 backdrop-blur-sm border border-white/5 rounded-xl p-6`}>
                            <h4 className="text-xl font-semibold text-white mb-4">Technologies</h4>
                            <div className="space-y-3">
                              {service.technologies.map((tech, idx) => (
                                <div 
                                  key={idx} 
                                  className={`bg-dark-darker/50 backdrop-blur-sm border border-white/5 rounded-lg px-4 py-3 flex items-center hover:border-white/20 transition-colors duration-300`}
                                >
                                  <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`}></div>
                                  <p className="text-white">{tech}</p>
                                </div>
                              ))}
                            </div>
                            
                            <div className="mt-8">
                              <button className={`w-full px-4 py-3 bg-gradient-to-r ${service.color} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center`}>
                                <span>Request Service</span>
                                <FiArrowRight className="ml-2" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                    
                  {/* Close Button */}
                  <button 
                    onClick={() => setActiveService(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-light to-secondary-light rounded-full blur-md opacity-70"></div>
              <button className="relative px-8 py-3 bg-dark-darker text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary-light/30 transition-all duration-300 flex items-center">
                <span>Explore All Services</span>
                <FiArrowRight className="ml-2 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection; 