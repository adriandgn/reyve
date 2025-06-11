import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const PrivacyPolicyPage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-10">Effective Date: June 11, 2025</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead">At Re:YVE, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information when you interact with our website.</p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">1. Data We Collect</h2>
            <p>We collect the following personal data directly from you:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
            </ul>
            <p>This information is gathered when you:</p>
            <ul>
              <li>Sign up for our newsletter</li>
              <li>Request a demo or contact us via the website</li>
            </ul>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. How We Use Your Data</h2>
            <p>We use your data exclusively to:</p>
            <ul>
              <li>Send you updates, insights, and newsletters (if you’ve opted in)</li>
              <li>Follow up on your interest in a demo or collaboration</li>
              <li>Respond to your inquiries</li>
            </ul>
            <p>We do not use your data for analytics or advertising purposes, and we never share your data with third parties.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. Data Storage</h2>
            <p>Your data is securely stored on servers located in the European Union, in compliance with the EU General Data Protection Regulation (GDPR).</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal data we hold about you</li>
              <li>Correct or update your information</li>
              <li>Request deletion of your data at any time</li>
            </ul>
            <p>To exercise these rights, simply email us at <a href="mailto:anamaria@wereyve.com" className="text-brand-600 hover:underline">anamaria@wereyve.com</a>.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. Contact</h2>
            <p>If you have any questions about this policy or how we handle your data, contact us at:</p>
            <address className="not-italic border-l-4 border-gray-200 pl-4">
              Re:YVE UG (haftungsbeschränkt)<br />
              Forster Strasse 57, 10999 Berlin<br />
              Email: <a href="mailto:anamaria@wereyve.com" className="text-brand-600 hover:underline">anamaria@wereyve.com</a>
            </address>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
