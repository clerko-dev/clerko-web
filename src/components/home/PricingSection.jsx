import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const PricingSection = () => {
  const { toast } = useToast();

  const handleTryFree = () => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple <span className="text-gradient">pricing</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Start free, upgrade when you're ready. No hidden fees, no surprises.
          </p>
          
          <div className="glass-card rounded-2xl p-12 max-w-2xl mx-auto">
            <div className="text-6xl font-bold text-gradient mb-4">Free</div>
            <div className="text-xl text-gray-300 mb-8">to get started</div>
            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                5 proposals per month
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Basic templates
              </li>
              <li className="flex items-center text-gray-300">
                <Check className="w-5 h-5 text-green-400 mr-3" />
                Email support
              </li>
            </ul>
            <Button 
              onClick={handleTryFree}
              className="blob-gradient hover:opacity-90 transition-opacity w-full text-lg py-4"
            >
              Start Free Trial
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;