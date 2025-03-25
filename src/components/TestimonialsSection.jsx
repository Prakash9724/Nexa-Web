import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FiStar, FiArrowRight, FiArrowLeft, FiMessageCircle } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const swiperRef = useRef(null);
  
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
  
  const testimonials = [
    {
      id: 1,
      content: "Nexa Web transformed our online presence completely. Their attention to detail and innovative approach resulted in a website that not only looks stunning but also performs exceptionally well.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      company: "TechStart Inc.",
      companyLogo: "https://logo.clearbit.com/microsoft.com",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      content: "Working with the Nexa Web team was a game-changer for our e-commerce platform. The site is lightning fast, mobile-responsive, and our conversion rates have increased by 40% since launch!",
      author: "Michael Chen",
      position: "Marketing Director, ShopWave",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      company: "ShopWave",
      companyLogo: "https://logo.clearbit.com/shopify.com",
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      content: "The UI/UX design expertise at Nexa Web is unmatched. They created an intuitive interface that our users love, and the feedback has been overwhelmingly positive. Highly recommended!",
      author: "Emily Rodriguez",
      position: "Product Manager, DesignHub",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/63.jpg",
      company: "DesignHub",
      companyLogo: "https://logo.clearbit.com/figma.com",
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      content: "Nexa Web's SEO optimization services have been instrumental in improving our search rankings. Our organic traffic has doubled in just three months, and we're seeing real business results.",
      author: "David Wilson",
      position: "Digital Strategist, GrowthMasters",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      company: "GrowthMasters",
      companyLogo: "https://logo.clearbit.com/hubspot.com",
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      content: "The mobile app developed by Nexa Web exceeded our expectations. The team delivered on time, within budget, and the app has received excellent reviews from our users. A pleasure to work with!",
      author: "Jessica Patel",
      position: "CTO, MobileFirst",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/37.jpg",
      company: "MobileFirst",
      companyLogo: "https://logo.clearbit.com/apple.com",
      color: "from-pink-500 to-rose-600"
    }
  ];
  
  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  
  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };
  
  return (
    <section className="py-20 overflow-hidden" id="testimonials">
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
                <FiMessageCircle className="inline-block mr-2" />
                Client Feedback
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 bg-gradient-to-r from-primary-light to-secondary-light bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="text-light-dark max-w-2xl mx-auto text-lg">
              Don't just take our word for it - hear from some of our satisfied clients about their experiences working with us.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Featured Testimonial */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-secondary-light/10 rounded-2xl blur-xl opacity-70"></div>
              
              <div className="relative bg-dark-darker/80 backdrop-blur-md border border-white/10 rounded-2xl p-8 overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-6xl text-white/5">
                  <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 11H6C5.46957 11 4.96086 10.7893 4.58579 10.4142C4.21071 10.0391 4 9.53043 4 9V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H8C8.53043 5 9.03914 5.21071 9.41421 5.58579C9.78929 5.96086 10 6.46957 10 7V15C10 16.0609 9.57857 17.0783 8.82843 17.8284C8.07828 18.5786 7.06087 19 6 19H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 11H16C15.4696 11 14.9609 10.7893 14.5858 10.4142C14.2107 10.0391 14 9.53043 14 9V7C14 6.46957 14.2107 5.96086 14.5858 5.58579C14.9609 5.21071 15.4696 5 16 5H18C18.5304 5 19.0391 5.21071 19.4142 5.58579C19.7893 5.96086 20 6.46957 20 7V15C20 16.0609 19.5786 17.0783 18.8284 17.8284C18.0783 18.5786 17.0609 19 16 19H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                {/* Content */}
                <div className="mb-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="text-yellow-400 fill-yellow-400 mr-1" />
                    ))}
                  </div>
                  <p className="text-white text-xl leading-relaxed italic mb-6">
                    "Nexa Web transformed our online presence completely. Their attention to detail and innovative approach resulted in a website that not only looks stunning but also performs exceptionally well."
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-primary-light/30">
                        <img 
                          src="https://randomuser.me/api/portraits/women/44.jpg" 
                          alt="Sarah Johnson" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold">Sarah Johnson</h4>
                        <p className="text-light-dark text-sm">CEO, TechStart Inc.</p>
                      </div>
                    </div>
                    
                    <div className="h-10 w-10 rounded-full bg-white/5 p-1.5">
                      <img 
                        src="https://logo.clearbit.com/microsoft.com" 
                        alt="TechStart Inc." 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Decorative Element */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-primary-light/20 to-primary-light/5 rounded-full blur-2xl"></div>
              </div>
            </motion.div>
            
            {/* Right Side - Testimonial Cards */}
            <motion.div 
              variants={itemVariants}
              className="relative h-[500px] flex items-center justify-center"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md">
                  {/* Card Slider */}
                  <Swiper
                    ref={swiperRef}
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards, Navigation, Autoplay]}
                    className="w-full"
                    autoplay={{
                      delay: 3000,
                      disableOnInteraction: false,
                    }}
                  >
                    {testimonials.map((testimonial) => (
                      <SwiperSlide key={testimonial.id} className="bg-transparent">
                        <div className={`relative bg-dark-darker/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 overflow-hidden h-[400px] flex flex-col`}>
                          {/* Gradient Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-10`}></div>
                          
                          {/* Rating */}
                          <div className="flex mb-4 relative">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <FiStar key={i} className="text-yellow-400 fill-yellow-400 mr-1" />
                            ))}
                          </div>
                          
                          {/* Content */}
                          <p className="text-white text-lg leading-relaxed italic mb-6 flex-grow">
                            "{testimonial.content}"
                          </p>
                          
                          {/* Author */}
                          <div className="flex items-center justify-between mt-auto">
                            <div className="flex items-center">
                              <div className="w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-white/20">
                                <img 
                                  src={testimonial.image} 
                                  alt={testimonial.author} 
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="text-white font-semibold">{testimonial.author}</h4>
                                <p className="text-light-dark text-sm">{testimonial.position}</p>
                              </div>
                            </div>
                            
                            <div className="h-10 w-10 rounded-full bg-white/5 p-1.5">
                              <img 
                                src={testimonial.companyLogo} 
                                alt={testimonial.company} 
                                className="w-full h-full object-contain"
                              />
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-center mt-8 space-x-4">
                    <button 
                      onClick={handlePrev}
                      className="w-12 h-12 rounded-full bg-dark-darker border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors duration-300"
                    >
                      <FiArrowLeft className="text-white" />
                    </button>
                    <button 
                      onClick={handleNext}
                      className="w-12 h-12 rounded-full bg-dark-darker border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors duration-300"
                    >
                      <FiArrowRight className="text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Stats Section */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {[
              { value: "50+", label: "Happy Clients" },
              { value: "100+", label: "Projects Completed" },
              { value: "5+", label: "Years Experience" },
              { value: "99%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative bg-dark-darker/60 backdrop-blur-sm border border-white/5 rounded-xl p-6 text-center group hover:border-white/20 transition-colors duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-light/5 to-secondary-light/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 relative">{stat.value}</h3>
                <p className="text-light-dark relative">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 