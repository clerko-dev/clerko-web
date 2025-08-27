import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Copy, Check, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const GeneratorSection = () => {
  const [proposalText, setProposalText] = useState('');
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generateProposal = () => {
    const proposals = [
      "Dear Client,\n\nI'm excited to present this comprehensive proposal for your upcoming project. Our team specializes in delivering high-quality solutions that exceed expectations.\n\nProject Scope:\n- Strategic planning and consultation\n- Custom development and implementation\n- Quality assurance and testing\n- Ongoing support and maintenance\n\nTimeline: 4-6 weeks\nInvestment: $5,000 - $8,000\n\nWe're committed to your success and look forward to partnering with you.\n\nBest regards,\nYour Team",
      "Project Proposal\n\nThank you for considering our services. We've carefully reviewed your requirements and are confident we can deliver exceptional results.\n\nDeliverables:\n- Complete project analysis\n- Custom solution development\n- User training and documentation\n- 3 months of support\n\nEstimated Timeline: 6-8 weeks\nTotal Investment: $7,500 - $12,000\n\nOur proven methodology ensures on-time delivery and superior quality.\n\nLet's discuss how we can bring your vision to life.",
      "Professional Services Proposal\n\nWe're thrilled to propose our comprehensive solution for your business needs. Our expertise and dedication will ensure project success.\n\nKey Components:\n- Initial consultation and planning\n- Design and development phase\n- Testing and optimization\n- Launch and ongoing support\n\nProject Duration: 8-10 weeks\nInvestment Range: $10,000 - $15,000\n\nReady to transform your business? Let's get started today."
    ];
    
    const randomProposal = proposals[Math.floor(Math.random() * proposals.length)];
    setProposalText(randomProposal);
    
    // GA4 event tracking with proper global check
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_proposal', {
        event_category: 'engagement',
        event_label: 'proposal_generator'
      });
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(proposalText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copied!",
        description: "Proposal copied to clipboard successfully.",
      });
      
      // GA4 event tracking with proper global check
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'copy_proposal', {
          event_category: 'engagement',
          event_label: 'proposal_generator'
        });
      }
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard.",
        variant: "destructive",
      });
    }
  };

  const downloadProposal = () => {
    const element = document.createElement('a');
    const file = new Blob([proposalText], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'proposal.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
    
    toast({
      title: "Downloaded!",
      description: "Proposal downloaded successfully.",
    });
    
    // GA4 event tracking with proper global check
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download_proposal', {
        event_category: 'engagement',
        event_label: 'proposal_generator'
      });
    }
  };

  return (
    <section id="try" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Try the <span className="text-gradient">generator</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the power of AI-generated proposals right now
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8"
          >
            <div className="text-center mb-8">
              <Button 
                onClick={generateProposal}
                className="blob-gradient hover:opacity-90 transition-opacity text-lg px-8 py-4"
              >
                <Zap className="mr-2 w-5 h-5" />
                Generate Sample Proposal
              </Button>
            </div>

            {proposalText && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="bg-slate-900/50 rounded-lg p-6 border border-white/10">
                  <pre className="text-gray-300 whitespace-pre-wrap font-mono text-sm leading-relaxed">
                    {proposalText}
                  </pre>
                </div>
                
                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={copyToClipboard}
                    variant="outline"
                    className="border-white/20 hover:bg-white/10"
                  >
                    {copied ? <Check className="mr-2 w-4 h-4" /> : <Copy className="mr-2 w-4 h-4" />}
                    {copied ? 'Copied!' : 'Copy'}
                  </Button>
                  
                  <Button
                    onClick={downloadProposal}
                    variant="outline"
                    className="border-white/20 hover:bg-white/10"
                  >
                    <Download className="mr-2 w-4 h-4" />
                    Download .txt
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GeneratorSection;