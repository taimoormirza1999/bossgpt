"use client"
import React from 'react';

const PrivacyPolicy = () => {
  return (
<div className='lg:pt-20 '>
  <div className='signature-container max-w-5xl mx-auto w-90 mt-28 lg:mt-16'>
  <div className="font-primary border-white/[21%] bg-black/[90%] border-2 bg-opacity-90 p-4 lg:p-6 rounded-[30px] lg:rounded-[36px] shadow-lg shadow-white/30 mx-auto mb-5">
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
    <li>Activity on the BossGPT platform, such as feature usage, task interactions, or calendar events you schedule.</li>
    <li>Your interactions with our emails, push notifications, and customer support.</li>
  </ul>

  {/* ——— NEW GOOGLE DATA SECTION ——— */}

  <h2 className="text-xl font-semibold text-white mt-4">Google Account Data</h2>
  <p className="text-gray-50">
  We only invoke Google Sign-In for authentication and the Calendar APIs to add events when you explicitly ask us to.
  </p>

  <p className="text-gray-50">
    <strong>What we collect &amp; why:</strong>
  </p>
  <ul className="list-disc list-inside text-gray-50">
    <li>
      <strong>Profile &amp; Email</strong> (openid, email, profile scopes): Authenticate you and create your BossGPT account. We store your Google display name, profile picture, and email address.
    </li>
    <li>
      <strong>Calendar &amp; Events</strong> (calendar, calendar.events scopes): Create events in your Google Calendar only when you explicitly ask us (e.g., “Save this task as a deadline”). We do not read, list, edit, or delete any other calendar entries.
    </li>
  </ul>

  <p className="text-gray-50">
    <strong>How we use &amp; share it:</strong>
  </p>
  <ul className="list-disc list-inside text-gray-50">
    <li>We do <strong>not</strong> share your Google profile or calendar data with any third parties, except as required by law.</li>
    <li>We do <strong>not</strong> sell, rent, or otherwise transfer this data to marketers or advertisers.</li>
  </ul>

  <p className="text-gray-50">
    <strong>No AI/ML training:</strong> We do <strong>not</strong> use any Google-sourced user data (profile, email, calendar events) to develop, train, or improve any generalized machine-learning or AI models.
  </p>

  <p className="text-gray-50">
    <strong>Data retention:</strong>
  </p>
  <ul className="list-disc list-inside text-gray-50">
    <li>We retain your Google profile, email, and any calendar events you create for as long as you keep an active BossGPT account.</li>
    <li>You can delete your account at any time to remove all of your data from our systems.</li>
  </ul>

  {/* ——— END GOOGLE DATA SECTION ——— */}

  <h2 className="text-xl font-semibold text-white mt-4">Security</h2>
  <p className="text-gray-50">
    BossGPT uses reasonable security measures to protect your personal information against unauthorized access, theft, and loss.
  </p>

  <h2 className="text-xl font-semibold text-white mt-4">Your Rights</h2>
  <p className="text-gray-50">
    You can request access to, correct, update, or delete your personal information by contacting:
    <strong className="block text-white">contact@bossgpt.com</strong>
  </p>

  <h2 className="text-xl font-semibold text-white mt-4">Subscription Policy</h2>
  <ul className="list-disc list-inside text-gray-50">
    <li>You will be automatically charged unless canceled 24 hours before the trial ends.</li>
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
