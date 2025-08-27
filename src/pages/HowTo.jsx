import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HowTo = () => {
  return (
    <>
      <Helmet>
        <title>How to Create Winning Proposals - Clerko | Expert Guide</title>
        <meta name="description" content="Learn how to create professional proposals that win clients. Expert tips, best practices, and proven strategies for proposal writing success." />
        <meta property="og:title" content="How to Create Winning Proposals - Clerko | Expert Guide" />
        <meta property="og:description" content="Learn how to create professional proposals that win clients. Expert tips, best practices, and proven strategies for proposal writing success." />
      </Helmet>

      <div className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-20 hero-bg">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                How to Create <span className="text-gradient">Winning Proposals</span>
              </h1>
              <div className="flex items-center justify-center space-x-6 text-gray-400 mb-8">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  <span>Expert Guide</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card rounded-2xl p-8 md:p-12"
            >
              <div className="prose prose-lg prose-invert max-w-none">
                <img  
                  className="w-full h-64 object-cover rounded-xl mb-8" 
                  alt="Professional business meeting with proposal documents"
                 src="https://images.unsplash.com/photo-1551135049-8a33b5883817" />

                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  Creating a winning proposal is both an art and a science. It requires understanding your client's needs, 
                  presenting your solution clearly, and building trust through professional presentation. In this comprehensive 
                  guide, we'll walk you through the essential steps to create proposals that convert prospects into clients.
                </p>

                <h2 className="text-3xl font-bold text-white mb-6 mt-12">Understanding Your Client's Needs</h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  Before you write a single word, you need to thoroughly understand what your client is looking for. 
                  This goes beyond the surface-level requirements they've shared. You need to dig deeper to understand:
                </p>

                <ul className="space-y-3 mb-8 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 blob-gradient rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Their business objectives and how your solution fits into their larger strategy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 blob-gradient rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Pain points they're experiencing that your solution can address</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 blob-gradient rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Budget constraints and timeline expectations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 blob-gradient rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Decision-making process and key stakeholders involved</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6 mt-12">Structure Your Proposal for Success</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  A well-structured proposal guides your reader through your solution logically and persuasively. 
                  Here's the proven structure that consistently wins clients:
                </p>

                <div className="bg-slate-900/50 rounded-xl p-6 mb-8 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-4">Essential Proposal Sections</h3>
                  <ol className="space-y-4 text-gray-300">
                    <li className="flex">
                      <span className="text-cyan-400 font-bold mr-4">1.</span>
                      <div>
                        <strong className="text-white">Executive Summary</strong> - A compelling overview that hooks the reader
                      </div>
                    </li>
                    <li className="flex">
                      <span className="text-cyan-400 font-bold mr-4">2.</span>
                      <div>
                        <strong className="text-white">Problem Statement</strong> - Demonstrate your understanding of their challenges
                      </div>
                    </li>
                    <li className="flex">
                      <span className="text-cyan-400 font-bold mr-4">3.</span>
                      <div>
                        <strong className="text-white">Proposed Solution</strong> - Your approach to solving their problems
                      </div>
                    </li>
                    <li className="flex">
                      <span className="text-cyan-400 font-bold mr-4">4.</span>
                      <div>
                        <strong className="text-white">Timeline & Deliverables</strong> - Clear expectations and milestones
                      </div>
                    </li>
                    <li className="flex">
                      <span className="text-cyan-400 font-bold mr-4">5.</span>
                      <div>
                        <strong className="text-white">Investment & Terms</strong> - Transparent pricing and payment terms
                      </div>
                    </li>
                    <li className="flex">
                      <span className="text-cyan-400 font-bold mr-4">6.</span>
                      <div>
                        <strong className="text-white">About Us</strong> - Build credibility with your experience and expertise
                      </div>
                    </li>
                  </ol>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6 mt-12">Writing Compelling Content</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  The content of your proposal should be client-focused, not company-focused. Instead of talking about 
                  what you do, focus on what you can achieve for them. Use specific examples, case studies, and 
                  quantifiable benefits whenever possible.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-red-900/20 border border-red-500/30 rounded-xl p-6">
                    <h4 className="text-red-400 font-semibold mb-3">❌ Avoid This</h4>
                    <p className="text-gray-300 text-sm">
                      "We are a leading digital marketing agency with 10 years of experience. 
                      We offer comprehensive SEO services to help businesses grow."
                    </p>
                  </div>
                  <div className="bg-green-900/20 border border-green-500/30 rounded-xl p-6">
                    <h4 className="text-green-400 font-semibold mb-3">✅ Do This Instead</h4>
                    <p className="text-gray-300 text-sm">
                      "Our SEO strategy will increase your organic traffic by 150% within 6 months, 
                      generating an estimated $50,000 in additional revenue based on your current conversion rates."
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-white mb-6 mt-12">Professional Presentation Matters</h2>

                <p className="text-gray-300 leading-relaxed mb-6">
                  Your proposal's visual presentation is just as important as its content. A professionally designed 
                  proposal builds trust and demonstrates attention to detail. Key elements include:
                </p>

                <ul className="space-y-3 mb-8 text-gray-300">
                  <li className="flex items-start">
                    <div className="w-2 h-2 blob-gradient rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Consistent branding and typography throughout the document</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 blob-gradient rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Clean, readable layout with plenty of white space</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 blob-gradient rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Professional imagery and graphics that support your message</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 blob-gradient rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span>Error-free content with proper grammar and spelling</span>
                  </li>
                </ul>

                <h2 className="text-3xl font-bold text-white mb-6 mt-12">Follow Up Strategically</h2>

                <p className="text-gray-300 leading-relaxed mb-8">
                  Sending your proposal is just the beginning. A strategic follow-up process can significantly 
                  increase your win rate. Plan to follow up within 3-5 business days with additional value, 
                  such as relevant case studies or answers to questions that may have arisen.
                </p>

                <div className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Create Winning Proposals?</h3>
                  <p className="text-gray-300 mb-6">
                    Put these strategies into practice with Clerko's AI-powered proposal generator. 
                    Create professional proposals in minutes, not hours.
                  </p>
                  <Button className="blob-gradient hover:opacity-90 transition-opacity">
                    Try Clerko Free
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.article>
          </div>
        </section>
      </div>
    </>
  );
};

export default HowTo;