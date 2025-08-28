import React from 'react';
import { motion } from 'framer-motion';

const StepsSection = () => {
  const steps = [
    {
      step: "01",
      title: "Input Details",
      description: "Enter your project requirements, client information, and key deliverables in our intuitive interface."
    },
    {
      step: "02", 
      title: "AI Generation",
      description: "Our advanced AI analyzes your input and generates a professional, customized proposal in seconds."
    },
    {
      step: "03",
      title: "Download & Send",
      description: "Review, customize if needed, and download your proposal as PDF or send directly to clients."
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
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Three simple steps to create professional proposals that convert
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 blob-gradient rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
                {item.step}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
