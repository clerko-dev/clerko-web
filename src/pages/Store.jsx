import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ShoppingBag, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Store = () => {
  const { toast } = useToast();

  const handleComingSoon = () => {
    toast({
      title: "🚧 Store Coming Soon!",
      description: "Our premium templates and resources store will be available soon. Stay tuned! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Premium Templates Store - Clerko | Professional Proposal Templates</title>
        <meta name="description" content="Browse our collection of premium proposal templates, business resources, and professional tools. Coming soon to help you create stunning proposals." />
        <meta property="og:title" content="Premium Templates Store - Clerko | Professional Proposal Templates" />
        <meta property="og:description" content="Browse our collection of premium proposal templates, business resources, and professional tools. Coming soon to help you create stunning proposals." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-bg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="w-20 h-20 blob-gradient rounded-full flex items-center justify-center mx-auto mb-8">
                <ShoppingBag className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Premium <span className="text-gradient">Store</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Professional templates, resources, and tools to elevate your business proposals and presentations.
              </p>
              
              <div className="inline-flex items-center bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 mr-2" />
                Coming Soon
              </div>
            </motion.div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                What's <span className="text-gradient">coming</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We're curating the best templates and resources for professionals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Premium Proposal Templates",
                  description: "Industry-specific proposal templates designed by professionals",
                  price: "Starting at $29",
                  features: ["20+ Industries", "Fully Customizable", "AI-Ready", "Lifetime Updates"]
                },
                {
                  title: "Business Presentation Decks",
                  description: "Stunning presentation templates for pitches and client meetings",
                  price: "Starting at $19",
                  features: ["Modern Designs", "Multiple Formats", "Brand Guidelines", "Animation Ready"]
                },
                {
                  title: "Contract Templates",
                  description: "Legal-reviewed contract templates for various business scenarios",
                  price: "Starting at $39",
                  features: ["Lawyer Reviewed", "Multiple Jurisdictions", "Editable Formats", "Usage Rights"]
                },
                {
                  title: "Branding Packages",
                  description: "Complete branding packages to make your proposals stand out",
                  price: "Starting at $49",
                  features: ["Logo Designs", "Color Palettes", "Typography", "Brand Guidelines"]
                },
                {
                  title: "Workflow Automation",
                  description: "Pre-built automation workflows for proposal and quote processes",
                  price: "Starting at $59",
                  features: ["Email Sequences", "Follow-up Templates", "CRM Integration", "Analytics"]
                },
                {
                  title: "Training Courses",
                  description: "Expert-led courses on proposal writing and business development",
                  price: "Starting at $99",
                  features: ["Video Lessons", "Practical Exercises", "Expert Support", "Certificates"]
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8 group hover:scale-105 transition-all duration-300"
                >
                  <img  
                    className="w-full h-48 object-cover rounded-xl mb-6" 
                    alt={`${item.title} preview`}
                   src="https://images.unsplash.com/photo-1695561229554-7720f48a70d8" />
                  
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{item.description}</p>
                  
                  <div className="text-2xl font-bold text-gradient mb-4">{item.price}</div>
                  
                  <div className="space-y-2 mb-6">
                    {item.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 blob-gradient rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={handleComingSoon}
                    className="w-full blob-gradient hover:opacity-90 transition-opacity"
                  >
                    Notify Me
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-12"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Be the first to <span className="text-gradient">know</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get notified when our premium store launches and receive exclusive early-bird discounts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-900/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <Button 
                  onClick={handleComingSoon}
                  className="blob-gradient hover:opacity-90 transition-opacity px-8"
                >
                  Notify Me
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
              
              <p className="text-sm text-gray-400">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Store;