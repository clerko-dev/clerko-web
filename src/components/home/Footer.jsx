import React from 'react';
import { Zap } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 blob-gradient rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Clerko</span>
            </div>
            <p className="text-gray-400">
              Professional proposals and quotes in minutes. Transform your business workflow with AI.
            </p>
          </div>
          
          <div>
            <span className="text-white font-semibold mb-4 block">Product</span>
            <div className="space-y-2">
              <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Features</div>
              <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Pricing</div>
              <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Templates</div>
            </div>
          </div>
          
          <div>
            <span className="text-white font-semibold mb-4 block">Company</span>
            <div className="space-y-2">
              <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">About</div>
              <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Blog</div>
              <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Careers</div>
            </div>
          </div>
          
          <div>
            <span className="text-white font-semibold mb-4 block">Legal</span>
            <div className="space-y-2">
              <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Privacy</div>
              <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Terms</div>
              <div className="text-gray-400 hover:text-white transition-colors cursor-pointer">Security</div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400">
            Â© 2024 Clerko. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
