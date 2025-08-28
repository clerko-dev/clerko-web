import React from 'react';
import { motion } from 'framer-motion';

const FAQSection = () => {
  const faqs = [
    {
      question: "How does the AI proposal generator work?",
      answer: "Our AI analyzes your input requirements and generates professional proposals using advanced natural language processing. It considers industry best practices and your specific needs to create tailored content."
    },
    {
      question: "Can I customize the generated proposals?",
      answer: "Absolutely! All generated proposals can be fully customized. You can edit text, add your branding, modify sections, and adjust the content to match your specific requirements."
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we take security seriously. All data is encrypted in transit and at rest. We never share your information with third parties and comply with industry-standard security practices."
    },
    {
      question: "What file formats are supported?",
      answer: "You can download proposals in multiple formats including PDF, Word document, and plain text. We're continuously adding support for more formats based on user feedback."
    },
    {
      question: "Do you offer team collaboration features?",
      answer: "Yes, our premium plans include team collaboration features where multiple team members can work on proposals together, leave comments, and track changes."
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
        </motion.div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
