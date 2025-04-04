
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, Clock, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-mint/10 to-cream/20"></div>
        
        {/* Soft decorative shapes */}
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-primary/5 rounded-bl-[200px] blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-mint/10 rounded-tr-[200px] blur-3xl"></div>
        
        {/* Additional ambient lighting */}
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 md:order-1"
        >
          {/* Badge */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6 backdrop-blur-sm"
          >
            #1 Ice Cream Distribution Company
          </motion.span>
          
          {/* Headline */}
          <h1 className="headline mb-6">
            Delivering Quality <span className="text-primary"> IceCream </span> 
          </h1>
          
          {/* Description */}
          <p className="text-lg text-charcoal/80 mb-8 max-w-xl leading-relaxed">
          Our fleet of refrigerated vehicles and expert team ensure your Fanice products arrive in perfect condition, 
          maintaining consistent temperature from warehouse to your freezer.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm shadow-soft">
              <Truck className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">Nationwide Coverage</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm shadow-soft">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center gap-3 bg-white/60 p-3 rounded-lg backdrop-blur-sm shadow-soft">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium">Live Tracking</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link 
              to="/products" 
              className="button-primary inline-flex items-center group"
            >
              Explore Products
              <svg 
                className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <a 
              href="#about" 
              className="button-secondary inline-flex items-center hover:bg-secondary/80"
            >
              About
            </a>
          </div>
        </motion.div>
        
        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="order-1 md:order-2 relative"
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Enhanced Floating Animation with better gradient */}
            <motion.div 
              animate={{ y: [0, -8, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-full h-full rounded-full bg-gradient-to-b from-primary/20 via-mint/20 to-transparent blur-2xl"
            />
            
            {/* Main Image */}
            <img 
              src="/delivery.png" 
              alt="Ice cream delivery vehicle" 
              className="w-full h-full object-contain relative z-10 drop-shadow-xl"
              loading="eager"
            />
            
            {/* Enhanced Decorative Element */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
