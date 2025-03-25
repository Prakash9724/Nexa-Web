import React, { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Tilt } from 'react-tilt';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);
  
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
  
  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: i => ({
      opacity: 1,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: i * 0.1
      }
    })
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
  
  const projects = [
    {
      id: 1,
      title: "Apple Vision Pro Clone",
      description: "A fully responsive and interactive Apple Vision Pro landing page built with ReactJS & GSAP.",
      longDescription: "This project is a pixel-perfect recreation of Apple's Vision Pro landing page, featuring smooth scroll animations, 3D model interactions, and responsive design. The clone demonstrates advanced animation techniques using GSAP and Three.js for immersive 3D experiences.",
      image: "https://cdn.dribbble.com/userupload/7838190/file/original-a9945f335a5d2e0d7a96aad111b69a3f.png?resize=752x",
      techStack: ["React", "GSAP", "Tailwind CSS", "Three.js"],
      liveDemo: "https://example.com/vision-pro-clone",
      github: "https://github.com/example/vision-pro-clone",
      color: "from-blue-500 to-indigo-600",
      features: [
        "Smooth scroll animations",
        "3D model interactions",
        "Responsive design",
        "Performance optimized"
      ],
      screenshots: [
        "https://cdn.dribbble.com/userupload/7838190/file/original-a9945f335a5d2e0d7a96aad111b69a3f.png?resize=752x",
        "https://cdn.dribbble.com/userupload/7838191/file/original-5b7c3b7a7c0f01d9a8d4b1b8f0e3a0f1.png?resize=752x",
        "https://cdn.dribbble.com/userupload/7838192/file/original-3c7d3b7a7c0f01d9a8d4b1b8f0e3a0f2.png?resize=752x"
      ]
    },
    {
      id: 2,
      title: "Refokus Clone (Interactive UI)",
      description: "A clone of the award-winning Refokus agency website with advanced animations and interactive elements.",
      longDescription: "This project recreates the innovative UI of Refokus agency website, known for its cutting-edge animations and interactive elements. The clone features custom cursor effects, parallax scrolling, and dynamic content transitions that create an engaging user experience.",
      image: "https://cdn.dribbble.com/userupload/6374750/file/original-f7a7a2311ea8e1d1f2024e5a3a5b5b1d.png?resize=752x",
      techStack: ["Next.js", "Framer Motion", "GSAP", "Styled Components"],
      liveDemo: "https://example.com/refokus-clone",
      github: "https://github.com/example/refokus-clone",
      color: "from-purple-500 to-pink-600",
      features: [
        "Custom cursor effects",
        "Parallax scrolling",
        "Dynamic content transitions",
        "Responsive design"
      ],
      screenshots: [
        "https://cdn.dribbble.com/userupload/6374750/file/original-f7a7a2311ea8e1d1f2024e5a3a5b5b1d.png?resize=752x",
        "https://cdn.dribbble.com/userupload/6374751/file/original-3c7d3b7a7c0f01d9a8d4b1b8f0e3a0f3.png?resize=752x",
        "https://cdn.dribbble.com/userupload/6374752/file/original-5b7c3b7a7c0f01d9a8d4b1b8f0e3a0f4.png?resize=752x"
      ]
    },
    {
      id: 3,
      title: "E-commerce Platform (Full-stack)",
      description: "A complete e-commerce solution with product management, cart functionality, and payment integration.",
      longDescription: "This full-stack e-commerce platform offers comprehensive features including product catalog management, user authentication, shopping cart functionality, and secure payment processing. The project demonstrates advanced state management and API integration techniques.",
      image: "https://cdn.dribbble.com/userupload/7592453/file/original-e7e7135c8d065a0b1d2ed7ac0b31e8d5.png?resize=752x",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
      liveDemo: "https://example.com/ecommerce-platform",
      github: "https://github.com/example/ecommerce-platform",
      color: "from-green-500 to-emerald-600",
      features: [
        "User authentication",
        "Product catalog management",
        "Shopping cart functionality",
        "Secure payment processing"
      ],
      screenshots: [
        "https://cdn.dribbble.com/userupload/7592453/file/original-e7e7135c8d065a0b1d2ed7ac0b31e8d5.png?resize=752x",
        "https://cdn.dribbble.com/userupload/7592454/file/original-3c7d3b7a7c0f01d9a8d4b1b8f0e3a0f5.png?resize=752x",
        "https://cdn.dribbble.com/userupload/7592455/file/original-5b7c3b7a7c0f01d9a8d4b1b8f0e3a0f6.png?resize=752x"
      ]
    },
    {
      id: 4,
      title: "AI-Integrated Website",
      description: "A modern website with AI-powered features including content generation and personalized recommendations.",
      longDescription: "This innovative project showcases the integration of AI capabilities into a modern web application. Features include AI-powered content generation, personalized user recommendations, and intelligent search functionality, all wrapped in a sleek and responsive UI.",
      image: "https://cdn.dribbble.com/userupload/7416047/file/original-35b1c9ff3d42c286a8f25b67dbc7d331.png?resize=752x",
      techStack: ["React", "OpenAI API", "TensorFlow.js", "Firebase"],
      liveDemo: "https://example.com/ai-website",
      github: "https://github.com/example/ai-website",
      color: "from-orange-500 to-red-600",
      features: [
        "AI-powered content generation",
        "Personalized recommendations",
        "Intelligent search functionality",
        "Real-time data processing"
      ],
      screenshots: [
        "https://cdn.dribbble.com/userupload/7416047/file/original-35b1c9ff3d42c286a8f25b67dbc7d331.png?resize=752x",
        "https://cdn.dribbble.com/userupload/7416048/file/original-3c7d3b7a7c0f01d9a8d4b1b8f0e3a0f7.png?resize=752x",
        "https://cdn.dribbble.com/userupload/7416049/file/original-5b7c3b7a7c0f01d9a8d4b1b8f0e3a0f8.png?resize=752x"
      ]
    }
  ];
  
  const handleProjectClick = (id) => {
    setActiveProject(activeProject === id ? null : id);
  };
  
  const defaultTiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };
  
  return (
    <section className="py-20 overflow-hidden" id="projects">
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
              Our Work Speaks for Itself
            </h2>
            <p className="text-light-dark max-w-2xl mx-auto text-lg">
              Explore our portfolio of innovative projects that showcase our expertise in web development and design.
            </p>
          </motion.div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={projectVariants}
                onClick={() => handleProjectClick(project.id)}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative cursor-pointer overflow-hidden"
              >
                <Tilt options={defaultTiltOptions} className="h-full">
                  <div className="relative h-full rounded-2xl overflow-hidden group">
                    {/* Background Glow Effect */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} rounded-2xl blur-xl opacity-30 transition-all duration-500 ${
                        hoveredProject === project.id ? 'opacity-70 scale-105' : 'opacity-30 scale-100'
                      }`}
                    ></div>
                    
                    {/* Project Image */}
                    <div className="relative h-[300px] overflow-hidden rounded-t-2xl">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-darker via-dark-darker/70 to-transparent opacity-70"></div>
                      
                      {/* Tech Stack Badges */}
                      <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                        {project.techStack.map((tech, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-dark-darker/80 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Project Info */}
                    <div className="relative p-6 bg-dark-darker/90 backdrop-blur-md border border-white/10 rounded-b-2xl">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-light transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-light-dark mb-4">{project.description}</p>
                      
                      {/* Action Buttons */}
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-3">
                          <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiGithub className="text-white" />
                          </a>
                          <a 
                            href={project.liveDemo} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <FiExternalLink className="text-white" />
                          </a>
                        </div>
                        
                        <div className="flex items-center text-sm font-medium text-white/70 group-hover:text-white transition-colors duration-300">
                          <span>View Details</span>
                          <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      {/* Hover Reveal Line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary-light to-secondary-light group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
          
          {/* Project Details Modal */}
          <AnimatePresence>
            {activeProject && (
              <motion.div
                variants={detailsVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark-darker/80 backdrop-blur-md"
                onClick={() => setActiveProject(null)}
              >
                <motion.div 
                  className="relative w-full max-w-5xl bg-dark-darker border border-white/10 rounded-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  {projects
                    .filter(project => project.id === activeProject)
                    .map(project => (
                      <div key={project.id} className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Project Showcase Slider */}
                        <div className="relative h-[400px] lg:h-auto">
                          <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                              rotate: 50,
                              stretch: 0,
                              depth: 100,
                              modifier: 1,
                              slideShadows: true,
                            }}
                            pagination={{ clickable: true }}
                            navigation={{
                              nextEl: '.swiper-button-next',
                              prevEl: '.swiper-button-prev',
                            }}
                            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                            autoplay={{
                              delay: 3500,
                              disableOnInteraction: false,
                            }}
                            className="h-full w-full"
                          >
                            {project.screenshots.map((screenshot, idx) => (
                              <SwiperSlide key={idx} className="w-full h-full">
                                <img 
                                  src={screenshot} 
                                  alt={`${project.title} screenshot ${idx + 1}`} 
                                  className="w-full h-full object-cover"
                                />
                              </SwiperSlide>
                            ))}
                            <div className="swiper-button-next !text-white after:!text-lg"></div>
                            <div className="swiper-button-prev !text-white after:!text-lg"></div>
                          </Swiper>
                        </div>
                        
                        {/* Project Details */}
                        <div className="p-8 flex flex-col">
                          <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                          
                          <p className="text-light-dark mb-6 text-lg leading-relaxed">
                            {project.longDescription}
                          </p>
                          
                          <h4 className="text-xl font-semibold text-white mb-3">Key Features</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {project.features.map((feature, idx) => (
                              <div key={idx} className="flex items-start">
                                <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${project.color} flex items-center justify-center mr-3 mt-0.5 flex-shrink-0`}>
                                  <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                  </svg>
                                </div>
                                <p className="text-light-dark">{feature}</p>
                              </div>
                            ))}
                          </div>
                          
                          <h4 className="text-xl font-semibold text-white mb-3">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2 mb-8">
                            {project.techStack.map((tech, idx) => (
                              <span 
                                key={idx} 
                                className={`px-3 py-1.5 bg-gradient-to-r ${project.color} text-white text-sm font-medium rounded-full`}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="mt-auto flex space-x-4">
                            <a 
                              href={project.liveDemo} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className={`px-6 py-3 bg-gradient-to-r ${project.color} text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
                            >
                              <span>Live Demo</span>
                              <FiExternalLink className="ml-2" />
                            </a>
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="px-6 py-3 bg-dark-light/10 border border-white/10 text-white font-medium rounded-lg hover:bg-dark-light/20 transition-all duration-300 flex items-center justify-center"
                            >
                              <span>View Code</span>
                              <FiGithub className="ml-2" />
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  
                  {/* Close Button */}
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300 z-10"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* CTA Section */}
          <motion.div 
            variants={itemVariants}
            className="text-center"
          >
            <div className="relative inline-block">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-light to-secondary-light rounded-full blur-md opacity-70"></div>
              <button className="relative px-8 py-3 bg-dark-darker text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary-light/30 transition-all duration-300 flex items-center">
                <span>View All Projects</span>
                <FiArrowRight className="ml-2" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection; 