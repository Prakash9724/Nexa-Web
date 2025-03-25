import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const WebAnimation = () => {
  const containerRef = useRef(null);
  const techStackRef = useRef(null);
  
  useEffect(() => {
    const container = containerRef.current;
    const techStack = techStackRef.current;
    
    if (!container || !techStack) return;
    
    // Setup animation
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });
    
    // Animate tech stack items with more dynamic effects
    gsap.utils.toArray(techStack.children).forEach((item, index) => {
      // Initial state
      gsap.set(item, { 
        y: 60, 
        opacity: 0,
        rotate: -10 + Math.random() * 20,
        scale: 0.8
      });
      
      // Entry animation
      timeline.to(item, {
        y: 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.5)",
        delay: index * 0.15
      }, index * 0.25);
      
      // Add continuous floating animation
      gsap.to(item, {
        y: "random(-8, 8)",
        x: "random(-5, 5)",
        rotation: "random(-5, 5)",
        duration: "random(2, 4)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.2 + 1
      });
      
      // Add pulse effect
      gsap.to(item.querySelector('.tech-icon-inner'), {
        boxShadow: '0 0 15px var(--glow-color)',
        duration: 1.5,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: index * 0.3 + 1.5
      });
    });
    
    // Animate floating elements
    gsap.utils.toArray('.floating-element').forEach((element) => {
      gsap.to(element, {
        y: 'random(-20, 20)',
        x: 'random(-20, 20)',
        rotation: 'random(-15, 15)',
        duration: 'random(3, 6)',
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 'random(0, 2)'
      });
    });
    
    // Animate code lines
    gsap.utils.toArray('.code-line').forEach((line, index) => {
      gsap.from(line, {
        width: 0,
        duration: 1.5,
        ease: 'power2.inOut',
        delay: 0.2 * index,
        repeat: -1,
        repeatDelay: 10,
        yoyo: true
      });
    });
    
    return () => {
      // Cleanup animations
      timeline.kill();
      gsap.killTweensOf('.floating-element');
      gsap.killTweensOf('.code-line');
      gsap.killTweensOf(techStack.children);
      gsap.utils.toArray(techStack.children).forEach(item => {
        gsap.killTweensOf(item.querySelector('.tech-icon-inner'));
      });
    };
  }, []);
  
  return (
    <div className="w-full h-full bg-dark-darker text-white font-mono text-sm">
      {/* Code Editor Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-dark-darker border-b border-white/10">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-light-dark text-xs">index.jsx</div>
        <div></div>
      </div>
      
      {/* Code Content */}
      <div className="p-4 overflow-hidden">
        <div className="flex">
          <div className="text-light-dark mr-4 select-none">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className="h-6">{i + 1}</div>
            ))}
          </div>
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-6">
                <span className="text-blue-400">import</span> 
                <span className="text-white"> React </span>
                <span className="text-blue-400">from</span> 
                <span className="text-green-400"> 'react'</span>
                <span className="text-white">;</span>
              </div>
              
              <div className="h-6 mt-2">
                <span className="text-blue-400">const</span> 
                <span className="text-yellow-400"> App </span>
                <span className="text-white">= () </span>
                <span className="text-blue-400">{`=>`}</span>
                <span className="text-white">{'{'}</span>
              </div>
              
              <div className="h-6 ml-4">
                <span className="text-blue-400">return</span> 
                <span className="text-white"> (</span>
              </div>
              
              <div className="h-6 ml-8">
                <span className="text-pink-400">{'<div '}</span>
                <span className="text-blue-300">className</span>
                <span className="text-white">=</span>
                <span className="text-green-400">"container"</span>
                <span className="text-pink-400">{'>'}</span>
              </div>
              
              <motion.div 
                className="h-6 ml-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <span className="text-pink-400">{'<h1>'}</span>
                <span className="text-white">Hello World</span>
                <span className="text-pink-400">{'</h1>'}</span>
              </motion.div>
              
              <motion.div 
                className="h-6 ml-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
              >
                <span className="text-pink-400">{'<'}</span>
                <span className="text-yellow-400">Button</span>
                <span className="text-pink-400">{'>'}</span>
                <span className="text-white">Get Started</span>
                <span className="text-pink-400">{'</Button>'}</span>
              </motion.div>
              
              <div className="h-6 ml-8">
                <span className="text-pink-400">{'</div>'}</span>
              </div>
              
              <div className="h-6 ml-4">
                <span className="text-white">);</span>
              </div>
              
              <div className="h-6">
                <span className="text-white">{'}'};</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Tech Icons */}
      <div className="flex justify-between px-6 py-3 bg-dark-darker/80 border-t border-white/10">
        {[
          { icon: '🔥', color: 'bg-orange-500/20' },
          { icon: '⚛️', color: 'bg-blue-500/20' },
          { icon: '🎨', color: 'bg-yellow-500/20' },
          { icon: '💻', color: 'bg-green-500/20' },
          { icon: '🚀', color: 'bg-purple-500/20' }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2 + index * 0.1, duration: 0.5 }}
            className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-lg`}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WebAnimation; 