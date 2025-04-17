"use client"
import React from 'react';

const TermsOfService = () => {
  return (
    <div className='lg:pt-20'>
      <div className='signature-container max-w-5xl mx-auto w-90 mt-28 lg:mt-16'>
        <div className="font-primary border-white/[21%] bg-black/[90%] border-2  p-4 lg:p-6 rounded-[30px] lg:rounded-[36px] shadow-lg shadow-white/30 mx-auto mb-5 bg-opacity-10">
          <h1 className="text-2xl font-bold text-white mb-4">Terms of Service</h1>

          <p className="text-gray-50">
            These Terms of Service ("Terms") govern your use of the BossGPT platform, services, and related tools. By using our platform, you agree to these Terms. If you do not agree, please discontinue use of BossGPT.
          </p>

          <h2 className="text-xl font-semibold text-white mt-4">1. Use of Service</h2>
          <ul className="list-disc list-inside text-gray-50">
            <li>You must be at least 13 years old to use BossGPT.</li>
            <li>You agree not to misuse the platform for unauthorized or illegal activities.</li>
            <li>We may suspend access if you violate these terms or abuse our services.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-4">2. Account & Security</h2>
          <ul className="list-disc list-inside text-gray-50">
            <li>You are responsible for maintaining the confidentiality of your account login.</li>
            <li>Notify us immediately at <strong className="text-white">contact@bossgpt.com</strong> if you suspect unauthorized use of your account.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-4">3. Subscriptions & Billing</h2>
          <ul className="list-disc list-inside text-gray-50">
            <li>BossGPT may offer paid subscriptions with recurring billing.</li>
            <li>You may cancel at any time, but you will retain access until the end of your current billing cycle.</li>
            <li>Deleting the app does not automatically cancel your subscription.</li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-4">4. Privacy</h2>
          <p className="text-gray-50">
            Our use of your personal information is governed by our <a href="/privacy-policy" className="underline text-white">Privacy Policy</a>.
          </p>

          <h2 className="text-xl font-semibold text-white mt-4">5. Changes to Terms</h2>
          <p className="text-gray-50">
            BossGPT may update these Terms occasionally. Continued use of the platform constitutes acceptance of the revised terms.
          </p>

          <h2 className="text-xl font-semibold text-white mt-4">6. Contact Us</h2>
          <p className="text-gray-50">
            For questions about these Terms, please email: <strong className="text-white">contact@bossgpt.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
