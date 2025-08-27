import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Clerko | Your Data Protection & Privacy Rights</title>
        <meta name="description" content="Learn how Clerko protects your privacy and handles your personal data. Our comprehensive privacy policy explains your rights and our commitments." />
        <meta property="og:title" content="Privacy Policy - Clerko | Your Data Protection & Privacy Rights" />
        <meta property="og:description" content="Learn how Clerko protects your privacy and handles your personal data. Our comprehensive privacy policy explains your rights and our commitments." />
      </Helmet>

      <div className="min-h-screen pt-20">
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
                <span className="text-gradient">Privacy</span> Policy
              </h1>
              
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-400 mb-8">Last updated: December 2024</p>
                  
                  <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                  <p className="text-gray-300 mb-6">
                    At Clerko, we take your privacy seriously. This Privacy Policy explains how we collect, 
                    use, disclose, and safeguard your information when you use our service.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-white mb-3">Personal Information</h3>
                  <p className="text-gray-300 mb-4">
                    We may collect personal information that you provide directly to us, including:
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>• Name and contact information</li>
                    <li>• Account credentials</li>
                    <li>• Payment information</li>
                    <li>• Business information for proposals</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">Usage Information</h3>
                  <p className="text-gray-300 mb-6">
                    We automatically collect certain information about your use of our service, including:
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>• Device and browser information</li>
                    <li>• IP address and location data</li>
                    <li>• Usage patterns and preferences</li>
                    <li>• Performance and error data</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                  <p className="text-gray-300 mb-4">We use the information we collect to:</p>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>• Provide and maintain our service</li>
                    <li>• Process transactions and send notifications</li>
                    <li>• Improve and personalize your experience</li>
                    <li>• Communicate with you about our service</li>
                    <li>• Ensure security and prevent fraud</li>
                    <li>• Comply with legal obligations</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                  <p className="text-gray-300 mb-4">
                    We do not sell, trade, or otherwise transfer your personal information to third parties, 
                    except in the following circumstances:
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>• With your explicit consent</li>
                    <li>• To trusted service providers who assist us</li>
                    <li>• When required by law or legal process</li>
                    <li>• To protect our rights and safety</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                  <p className="text-gray-300 mb-6">
                    We implement appropriate technical and organizational measures to protect your personal 
                    information against unauthorized access, alteration, disclosure, or destruction. However, 
                    no method of transmission over the internet is 100% secure.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                  <p className="text-gray-300 mb-4">You have the right to:</p>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>• Access your personal information</li>
                    <li>• Correct inaccurate information</li>
                    <li>• Delete your personal information</li>
                    <li>• Restrict processing of your information</li>
                    <li>• Data portability</li>
                    <li>• Object to processing</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
                  <p className="text-gray-300 mb-6">
                    We use cookies and similar tracking technologies to enhance your experience, analyze usage, 
                    and assist in our marketing efforts. You can control cookie settings through your browser.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Children's Privacy</h2>
                  <p className="text-gray-300 mb-6">
                    Our service is not intended for children under 13. We do not knowingly collect personal 
                    information from children under 13. If we become aware of such collection, we will take 
                    steps to delete the information.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">International Transfers</h2>
                  <p className="text-gray-300 mb-6">
                    Your information may be transferred to and processed in countries other than your own. 
                    We ensure appropriate safeguards are in place to protect your information.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                  <p className="text-gray-300 mb-6">
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new policy on this page and updating the "Last updated" date.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about this Privacy Policy, please contact us at:
                  </p>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-white/10">
                    <p className="text-gray-300">
                      Email: privacy@clerko.com<br />
                      Address: 123 Business Street, Suite 100, City, State 12345
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacy;