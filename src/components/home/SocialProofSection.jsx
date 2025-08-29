import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check } from 'lucide-react'


const SocialProofSection = () => {
  const stats = [
    { number: "10,000+", label: "Proposals Generated" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "2,500+", label: "Active Users" }
  ];

  const testimonials = [
    {
      quote: "Clerko transformed how we create proposals. What used to take hours now takes minutes, and our conversion rate has increased by 40%.",
      author: "Sarah Johnson",
      role: "Marketing Director"
    },
    {
      quote: "The AI-generated proposals are incredibly professional and tailored. Our clients are impressed, and we're closing more deals than ever.",
      author: "Michael Chen",
      role: "Business Consultant"
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
            Trusted by <span className="text-gradient">thousands</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Join the growing community of professionals who trust Clerko
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-gray-300 text-lg">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <div className="font-semibold text-white">{testimonial.author}</div>
                <div className="text-gray-400">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
