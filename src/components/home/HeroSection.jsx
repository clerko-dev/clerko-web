import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const { toast } = useToast();

  const handleTryFree = () => {
    // GA4 event tracking with proper global check
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'try_free_click', {
        event_category: 'conversion',
        event_label: 'hero_cta'
      });
    }
    
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-bg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 blob-gradient rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-cyan-500/20 rounded-full opacity-30 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-purple-500/20 rounded-full opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Proposals & quotes</span>
            <br />
            <span className="text-white">in minutes</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your business workflow with AI-powered proposal generation. 
            Create professional quotes and proposals that win clients every time.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button 
              onClick={handleTryFree}
              size="lg"
              className="blob-gradient hover:opacity-90 transition-all duration-300 text-lg px-8 py-4 rounded-full group"
            >
              Try Free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;