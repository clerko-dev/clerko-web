import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Clock, Target, Shield, Users, Star } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Generation",
      description: "Advanced AI creates professional proposals tailored to your specific needs and industry."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Save Time",
      description: "Generate comprehensive proposals in minutes instead of hours. Focus on what matters most."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Higher Conversion",
      description: "Professional, well-structured proposals that increase your chances of winning clients."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description: "Your data is encrypted and secure. We never share your information with third parties."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Collaboration",
      description: "Work together with your team to create and refine proposals collaboratively."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Templates",
      description: "Access to professionally designed templates for various industries and use cases."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful <span className="text-gradient">features</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to create winning proposals and grow your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
