import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Link } from 'react-scroll';

const AboutSection = () => {
  const ref = useRef(null);
  const teamRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.1 });
  const controls = useAnimation();
  const teamControls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
    if (isTeamInView) {
      teamControls.start('visible');
    }
  }, [isInView, isTeamInView, controls, teamControls]);
  
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  const teamMemberVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.5, 
        ease: "easeOut",
        delay: i * 0.1
      }
    })
  };
  
  const skillsData = [
    {
      category: "Frontend",
      icon: "💻",
      skills: ["ReactJS", "Next.js", "TailwindCSS", "Framer Motion"],
      color: "from-blue-500 to-cyan-400"
    },
    {
      category: "Backend",
      icon: "🛠️",
      skills: ["Node.js", "Express.js", "Laravel"],
      color: "from-green-500 to-emerald-400"
    },
    {
      category: "Cloud & DB",
      icon: "☁️",
      skills: ["Firebase", "MongoDB", "AWS"],
      color: "from-purple-500 to-indigo-400"
    },
    {
      category: "UI/UX Tools",
      icon: "🎨",
      skills: ["Figma", "Adobe XD"],
      color: "from-pink-500 to-rose-400"
    }
  ];
  
  const teamMembers = [
    {
      name: "Prakash",
      role: "Frontend Developer",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      color: "from-blue-500 to-indigo-600"
    },
    {
      name: "Ayush",
      role: "Backend Developer",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      color: "from-green-500 to-emerald-600"
    },
    {
      name: "Deep",
      role: "UI/UX Designer",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      color: "from-purple-500 to-pink-600"
    },
    {
      name: "Vatsal",
      role: "Full Stack Developer",
      image: "https://randomuser.me/api/portraits/men/91.jpg",
      color: "from-orange-500 to-red-600"
    }
  ];
  
  return (
    <section className="py-20 md:py-24 overflow-hidden" id="about">
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
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              Who We Are
            </h2>
            <p className="text-light-dark max-w-2xl mx-auto text-lg">
              We are a team of passionate developers specializing in modern, responsive, and performance-driven web applications. With expertise in ReactJS, Tailwind CSS, Three.js, and AI-powered development, we craft seamless digital experiences.
            </p>
          </motion.div>
          
          {/* About Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-light/20 to-secondary-light/20 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative bg-dark-darker/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-4">
                <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Our Team" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-1/4 -left-6 w-12 h-12 bg-primary-light/20 rounded-full backdrop-blur-md animate-float"></div>
                <div className="absolute bottom-1/4 -right-6 w-16 h-16 bg-secondary-light/20 rounded-full backdrop-blur-md animate-float-delay"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 rounded-full backdrop-blur-md border border-white/10 animate-pulse"></div>
              </div>
            </motion.div>
            
            {/* Right Side - Skills */}
            <div>
              <motion.div variants={itemVariants} className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Expertise</h3>
                <p className="text-light-dark">
                  With a combined experience of over 5 years in web development, our team brings a diverse set of skills to every project. We're passionate about creating beautiful, functional, and high-performance digital experiences.
                </p>
              </motion.div>
              
              {/* Skills Grid */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {skillsData.map((skillGroup, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-dark-darker/50 backdrop-blur-sm border border-white/5 rounded-xl p-4 hover:shadow-lg hover:shadow-primary-light/10 transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skillGroup.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-xl">{skillGroup.icon}</span>
                    </div>
                    
                    <h3 className="font-semibold text-white mb-2">{skillGroup.category}</h3>
                    
                    <div className="space-y-1">
                      {skillGroup.skills.map((skill, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-light mr-2"></div>
                          <p className="text-light-dark text-sm">{skill}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Button */}
              <motion.div variants={itemVariants} className="mt-8">
                <Link
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={800}
                >
                  <button className="px-6 py-3 bg-gradient-to-r from-primary-light to-primary-dark text-white font-medium rounded-full hover:shadow-lg hover:shadow-primary-light/30 transition-all duration-300">
                    View Our Projects
                  </button>
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Team Members Section */}
          <motion.div
            ref={teamRef}
            initial="hidden"
            animate={teamControls}
            variants={containerVariants}
            className="pt-20"
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
                Meet Our Team
              </h2>
              <p className="text-light-dark max-w-2xl mx-auto text-lg">
                Our talented team of experts brings diverse skills and experience to deliver exceptional results for every project.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={teamMemberVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="relative group"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-light/20 to-secondary-light/20 rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative bg-dark-darker/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden p-6 flex flex-col items-center">
                    <div className={`w-24 h-24 rounded-full overflow-hidden mb-4 ring-4 ring-gradient-to-r ${member.color} p-1`}>
                      <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-light-dark text-sm mb-4">{member.role}</p>
                    
                    <div className="flex space-x-3 mt-auto">
                      <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                      <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule="evenodd"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection; 