import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - Clerko | Legal Terms & Conditions</title>
        <meta name="description" content="Read Clerko's terms of service and legal conditions. Understand your rights and responsibilities when using our proposal generation platform." />
        <meta property="og:title" content="Terms of Service - Clerko | Legal Terms & Conditions" />
        <meta property="og:description" content="Read Clerko's terms of service and legal conditions. Understand your rights and responsibilities when using our proposal generation platform." />
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
                <span className="text-gradient">Terms</span> of Service
              </h1>
              
              <div className="glass-card rounded-2xl p-8 md:p-12">
                <div className="prose prose-lg prose-invert max-w-none">
                  <p className="text-gray-400 mb-8">Last updated: December 2024</p>
                  
                  <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                  <p className="text-gray-300 mb-6">
                    By accessing and using Clerko, you accept and agree to be bound by the terms and provision 
                    of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Description of Service</h2>
                  <p className="text-gray-300 mb-6">
                    Clerko is a web-based platform that provides AI-powered proposal and quote generation tools 
                    for businesses and professionals. Our service includes proposal templates, automation tools, 
                    and related business resources.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">User Accounts</h2>
                  <h3 className="text-xl font-semibold text-white mb-3">Account Creation</h3>
                  <p className="text-gray-300 mb-4">
                    To use certain features of our service, you must create an account. You agree to:
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>• Provide accurate and complete information</li>
                    <li>• Maintain the security of your account credentials</li>
                    <li>• Notify us immediately of any unauthorized use</li>
                    <li>• Accept responsibility for all activities under your account</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">Account Termination</h3>
                  <p className="text-gray-300 mb-6">
                    We reserve the right to terminate or suspend your account at any time for violations of 
                    these terms or for any other reason we deem appropriate.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Acceptable Use</h2>
                  <p className="text-gray-300 mb-4">You agree not to use our service to:</p>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>• Violate any applicable laws or regulations</li>
                    <li>• Infringe on intellectual property rights</li>
                    <li>• Transmit harmful or malicious content</li>
                    <li>• Attempt to gain unauthorized access to our systems</li>
                    <li>• Use the service for any illegal or unauthorized purpose</li>
                    <li>• Interfere with or disrupt the service</li>
                  </ul>

                  <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                  <h3 className="text-xl font-semibold text-white mb-3">Our Content</h3>
                  <p className="text-gray-300 mb-4">
                    The service and its original content, features, and functionality are owned by Clerko and 
                    are protected by international copyright, trademark, and other intellectual property laws.
                  </p>

                  <h3 className="text-xl font-semibold text-white mb-3">Your Content</h3>
                  <p className="text-gray-300 mb-6">
                    You retain ownership of content you create using our service. By using our service, you 
                    grant us a limited license to use, store, and process your content solely to provide the service.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Payment Terms</h2>
                  <h3 className="text-xl font-semibold text-white mb-3">Subscription Fees</h3>
                  <p className="text-gray-300 mb-4">
                    Certain features require payment of subscription fees. By subscribing, you agree to:
                  </p>
                  <ul className="space-y-2 mb-6 text-gray-300">
                    <li>• Pay all applicable fees as described on our pricing page</li>
                    <li>• Automatic renewal unless cancelled</li>
                    <li>• No refunds for partial months or unused features</li>
                    <li>• Price changes with 30 days notice</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-white mb-3">Free Trial</h3>
                  <p className="text-gray-300 mb-6">
                    We may offer free trials for certain features. Free trials are limited to one per user 
                    and may be subject to additional restrictions.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Privacy</h2>
                  <p className="text-gray-300 mb-6">
                    Your privacy is important to us. Please review our Privacy Policy, which also governs 
                    your use of the service, to understand our practices.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Disclaimers</h2>
                  <p className="text-gray-300 mb-6">
                    The service is provided "as is" and "as available" without warranties of any kind. We 
                    disclaim all warranties, express or implied, including but not limited to merchantability, 
                    fitness for a particular purpose, and non-infringement.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                  <p className="text-gray-300 mb-6">
                    In no event shall Clerko be liable for any indirect, incidental, special, consequential, 
                    or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                    or other intangible losses.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Indemnification</h2>
                  <p className="text-gray-300 mb-6">
                    You agree to defend, indemnify, and hold harmless Clerko from and against any claims, 
                    damages, obligations, losses, liabilities, costs, or debt arising from your use of the service.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                  <p className="text-gray-300 mb-6">
                    These terms shall be governed by and construed in accordance with the laws of the jurisdiction 
                    in which Clerko is incorporated, without regard to conflict of law provisions.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
                  <p className="text-gray-300 mb-6">
                    We reserve the right to modify these terms at any time. We will notify users of any material 
                    changes via email or through the service. Continued use after changes constitutes acceptance.
                  </p>

                  <h2 className="text-2xl font-bold text-white mb-4">Contact Information</h2>
                  <p className="text-gray-300 mb-4">
                    If you have any questions about these Terms of Service, please contact us at:
                  </p>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-white/10">
                    <p className="text-gray-300">
                      Email: legal@clerko.com<br />
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

export default Terms;