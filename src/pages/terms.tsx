import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const TermsOfServicePage = () => {
  return (
    <div className="bg-white text-gray-800">
      <Navbar />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Brockmann, Inter, sans-serif' }}>
            Terms of Service
          </h1>
          <p className="text-sm text-gray-500 mb-10">Effective Date: June 11, 2025<br />Last Updated: June 11, 2025</p>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="lead">Welcome to Re:YVE. These Terms of Service (“Terms”) govern your use of our website and platform. By accessing or using any part of Re:YVE’s services, you agree to be bound by these Terms.</p>
            
            <h2 className="text-2xl font-bold mt-12 mb-4">1. Overview</h2>
            <p>Re:YVE is building a platform infrastructure for the fashion industry that facilitates collaboration between brands, redesigners, and service providers to extend the life of fashion products.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">2. Accounts and Access</h2>
            <p>You may be invited to create a user account. At this stage, accounts are inactive and do not provide access to platform features. Future access will be subject to additional onboarding and acceptance of updated Terms and agreements.</p>
            <p>You are responsible for maintaining the confidentiality of your login credentials and all activity that occurs under your account.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">3. Use of Services</h2>
            <p>You agree to:</p>
            <ul>
              <li>Use Re:YVE’s website and platform only for lawful, ethical purposes;</li>
              <li>Not misuse, disrupt, or interfere with the platform’s intended use;</li>
              <li>Respect the intellectual property and contributions of all stakeholders on the platform.</li>
            </ul>
            <p>We reserve the right to suspend or terminate access if these conditions are violated.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">4. Intellectual Property</h2>
            <p>All content and materials provided by Re:YVE are protected by applicable intellectual property laws and remain the property of Re:YVE or its licensors. You may not copy, distribute, or use any part of our content without written permission.</p>
            <p>We are still developing our legal framework for collaborative work on the platform. Any future agreements around intellectual property, licensing, or royalties will be clarified through separate contracts or user agreements.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">5. Collaboration and Responsibility</h2>
            <p>Our platform is designed to coordinate collaboration among multiple parties. While we facilitate this collaboration, each stakeholder remains responsible for their contributions, including accuracy, legality, and quality of services.</p>
            <p>Re:YVE is not liable for the direct actions of third-party collaborators using the platform.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">6. Privacy</h2>
            <p>We collect and process your personal data in accordance with our <a href="/privacy" className="text-brand-600 hover:underline">Privacy Policy</a>. You have the right to access, correct, or delete your data at any time.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">7. Limitation of Liability</h2>
            <p>Re:YVE provides the platform “as is” and makes no guarantees regarding uptime, functionality, or specific business outcomes. We are not liable for indirect or consequential damages arising from the use or inability to use the platform or services.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">8. Changes to Terms</h2>
            <p>We may revise these Terms at any time. If significant changes are made, we’ll notify registered users. Continued use of the platform after changes constitutes acceptance of the updated Terms.</p>

            <h2 className="text-2xl font-bold mt-12 mb-4">9. Contact</h2>
            <p>For questions about these Terms, contact us at:</p>
            <address className="not-italic border-l-4 border-gray-200 pl-4">
              Email: <a href="mailto:anamaria@wereyve.com" className="text-brand-600 hover:underline">anamaria@wereyve.com</a><br />
              Re:YVE UG (haftungsbeschränkt)<br />
              Forster Strasse 57, 10999 Berlin
            </address>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
