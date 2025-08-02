'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Header />

      <main className="px-4 py-8 bg-gradient-to-br from-yellow-50 to-orange-50 text-gray-800 max-w-full mx-auto">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Privacy Policy</h1>

        <section className="mb-6 space-y-4">
          <p>
            Amrutam Pharmaceuticals Private Limited (“us”, “we”, or “Company”) is the author and publisher of the
            internet e-commerce portal <strong>www.amrutam.co.in</strong> (“Website”) and our App
            (<strong>amrutam.global</strong>) Amrutam Home (App) with privacy policy listed here:{' '}
            <a
              href="https://amrutam.co.in/pages/amrutam-home-app-privacy-policy"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Privacy Policy
            </a>.
          </p>

          <p>
            This Privacy Policy explains how we collect, use, share, and protect personal information about the Users
            of the Website. By accessing or using the Website, you agree to the terms of this policy.
          </p>

          <p>
            If you do not agree to our terms, please do not use the Website or provide your information. If you are
            using the Website on behalf of another entity, you confirm you are authorized to accept this policy on
            their behalf.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Information Collected</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Personal information (e.g., email, name, address, phone) during account registration or order placement.</li>
            <li>Non-personal data such as IP address, browser type, and interaction behavior.</li>
            <li>Optional account creation for better service access, or guest browsing with limited features.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>To enhance our service offerings and personalize your experience.</li>
            <li>To process orders and payments, and provide delivery updates.</li>
            <li>To send promotional content (if opted-in).</li>
            <li>To detect fraud or misuse of the platform.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Sharing and Disclosure</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>We do <strong>not sell or rent</strong> your information.</li>
            <li>Shared only with trusted service providers like payment gateways or delivery agents.</li>
            <li>In case of corporate restructuring, information may be transferred.</li>
            <li>As required by law or government authorities.</li>
            <li>Non-personal data may be used for market research purposes.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Security and Confidentiality</h2>
          <p className="mb-2">
            We implement reasonable security measures to safeguard your personal data. However, we are not responsible
            for any breach beyond our control (e.g., hacking, unauthorized device access).
          </p>
          <p className="mb-2">
            Users are responsible for keeping their login credentials secure. Please notify us at
            <a href="mailto:support@amrutam.co.in" className="text-blue-600 underline"> support@amrutam.co.in</a>{' '}
            if you suspect any unauthorized activity.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Modifying or Deleting Your Data</h2>
          <p className="mb-2">
            To delete your data, email us at{' '}
            <a href="mailto:support@amrutam.co.in" className="text-blue-600 underline">support@amrutam.co.in</a>{' '}
            with the subject “Delete my Data from Amrutam” and include identifying details.
          </p>
          <p className="mb-2">
            Please note: Residual data may still remain in backups or logs, and account termination doesn’t guarantee
            full data removal.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">6. Updates to This Policy</h2>
          <p>
            We may revise this Privacy Policy occasionally. Any changes will be posted here, and major updates may be
            communicated via email.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">7. Contact Us</h2>
          <p className="mb-1">Email: <a href="mailto:support@amrutam.co.in" className="text-blue-600 underline">support@amrutam.co.in</a></p>
          <p className="mb-1">Phone: +91 9713171999</p>
          <p>Address: Amrutam Pharmaceuticals Pvt Ltd., Chitragupt Ganj, Nai Sadak, Lashkar, Gwalior - 474001</p>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default PrivacyPolicyPage;

