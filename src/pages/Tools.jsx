import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Calculator, Clock, Target, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Tools = () => {
  const { toast } = useToast();

  const handleToolClick = (toolName) => {
    toast({
      title: "🚧 Feature Coming Soon!",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const tools = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Proposal Generator",
      description: "Create professional proposals with AI assistance. Input your requirements and get a polished proposal in minutes.",
      features: ["AI-powered content", "Multiple templates", "Custom branding", "Export to PDF/Word"]
    },
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "Quote Calculator",
      description: "Calculate accurate project quotes based on scope, timeline, and resources. Never underestimate again.",
      features: ["Smart pricing", "Resource estimation", "Profit margins", "Tax calculations"]
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Timeline Planner",
      description: "Plan project timelines with milestones and dependencies. Keep projects on track from start to finish.",
      features: ["Gantt charts", "Milestone tracking", "Dependency mapping", "Team scheduling"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "ROI Calculator",
      description: "Calculate return on investment for your projects. Make data-driven decisions with confidence.",
      features: ["ROI analysis", "Break-even point", "Profit projections", "Risk assessment"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Estimator",
      description: "Estimate team size and skills needed for projects. Optimize resource allocation and costs.",
      features: ["Skill mapping", "Resource planning", "Cost estimation", "Team optimization"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Builder",
      description: "Build automated workflows for repetitive tasks. Save time and reduce manual errors.",
      features: ["Workflow automation", "Task scheduling", "Email templates", "Integration tools"]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Business Tools - Clerko | Professional Proposal & Quote Tools</title>
        <meta name="description" content="Discover powerful business tools for creating proposals, calculating quotes, planning timelines, and more. Streamline your workflow with Clerko's professional toolkit." />
        <meta property="og:title" content="Business Tools - Clerko | Professional Proposal & Quote Tools" />
        <meta property="og:description" content="Discover powerful business tools for creating proposals, calculating quotes, planning timelines, and more. Streamline your workflow with Clerko's professional toolkit." />
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Professional <span className="text-gradient">Tools</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Everything you need to create winning proposals, accurate quotes, and manage projects efficiently.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Tools Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-2xl p-8 group hover:scale-105 transition-all duration-300"
                >
                  <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{tool.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{tool.description}</p>
                  
                  <div className="space-y-2 mb-8">
                    {tool.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <div className="w-1.5 h-1.5 blob-gradient rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    onClick={() => handleToolClick(tool.title)}
                    className="w-full blob-gradient hover:opacity-90 transition-opacity"
                  >
                    Try Tool
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                Ready to <span className="text-gradient">get started?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of professionals who trust Clerko for their business needs.
              </p>
              <Button 
                onClick={() => handleToolClick("Get Started")}
                size="lg"
                className="blob-gradient hover:opacity-90 transition-opacity text-lg px-8 py-4"
              >
                Start Free Trial
              </Button>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tools;