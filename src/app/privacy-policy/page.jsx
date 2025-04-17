"use client"
import React from 'react';

const PrivacyPolicy = () => {
  return (
<div className='lg:pt-20 '>
  <div className='signature-container max-w-5xl mx-auto w-90 mt-28 lg:mt-16'>
  <div className="font-primary border-white/[21%] bg-black/[90%] border-2 bg-opacity-90 p-4 lg:p-6 rounded-[30px] lg:rounded-[36px] shadow-lg shadow-white/30   mx-auto  mb-5   ">
        <h1 className="text-2xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-gray-50">
          This Privacy Statement explains our practices, including your choices, regarding the collection, security, and use of your personal information in connection with the BossGPT service.
        </p>

        <h2 className="text-xl font-semibold text-white mt-4">Contact Us</h2>
        <p className="text-gray-50">
        If you have general questions about your account or need assistance, or if you have specific questions about this Privacy Statement, our use of your personal information, cookies, or similar technologies, please contact our Data Protection Officer/Privacy Office at: 
          <strong className="block text-white">contact@bossgpt.com</strong>
        </p>

        <h2 className="text-xl font-semibold text-white mt-4">Collection of Information</h2>
        <p className="text-gray-50">
          We receive and store information about you such as:
        </p>
        <ul className="list-disc list-inside text-gray-50">
          <li>Your name, email address, payment method(s), and telephone number.</li>
          <li>Information you provide when using our service, interacting with customer support, or participating in surveys.</li>
          <li>Activity on the BossGPT platform, such as feature usage, task interactions, or calendar events you schedule</li>
          <li>Your interactions with our emails, push notifications, and customer support.</li>
        </ul>

        <h2 className="text-xl font-semibold text-white mt-4">Security</h2>
        <p className="text-gray-50">
          BossGPT uses reasonable security measures to protect your personal information against unauthorized access, theft, and loss.
        </p>

        <h2 className="text-xl font-semibold text-white mt-4">Your Rights</h2>
        <p className="text-gray-50">
          You can request access to, correct, update, or delete your personal information by contacting:
          <strong className="block text-white">contact@bossgpt.com</strong>
        </p>

        <h2 className="text-xl font-semibold text-white mt-4 ">Subscription Policy</h2>
      
        <ul className="list-disc list-inside text-gray-50 ">
          <li className=' '>You will be automatically charged unless canceled 24 hours before the trial ends.</li>
          <li>The subscription renews automatically until you cancel it.</li>
          <li>Canceling stops renewal, but you keep access until the end of the current period.</li>
          <li>Deleting the app does not cancel your subscription.</li>
        </ul>
      </div>
  </div>
     
</div>
  );
};

export default PrivacyPolicy;
