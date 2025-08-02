'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is Amrutam?",
      answer:
        "Amrutam is a comprehensive digital platform that connects Ayurvedic practitioners with patients seeking authentic, traditional healing. We provide doctors with tools to expand their practice, manage appointments, and reach more patients while maintaining the integrity of Ayurvedic medicine.",
    },
    {
      question: "How does Amrutam help me grow as a practitioner?",
      answer:
        "Amrutam helps you grow by providing access to a larger patient base, flexible scheduling tools, digital marketing support, and a trusted platform for consultations. You can offer consultations via chat, call, or video, set your own rates, and manage your practice entirely online.",
    },
    {
      question: "How do I become a part of Amrutam Doctor?",
      answer:
        "Joining Amrutam is simple: 1) Get your referral code from us, 2) Register on the Amrutam Doctors app or website, 3) Complete your KYC verification with required documents, 4) Once verified, start offering consultations to patients seeking Ayurvedic care.",
    },
    {
      question: "What is Amrutam Global as a platform?",
      answer:
        "Amrutam Global is our international platform that extends authentic Ayurvedic healthcare beyond geographical boundaries. It connects practitioners worldwide with patients, maintains quality standards, and promotes traditional healing methods on a global scale while preserving the essence of Ayurveda.",
    },
    {
      question: "What documents do I need to provide?",
      answer:
        "You'll need to provide: Valid medical license/degree in Ayurveda (BAMS or equivalent), Government-issued ID proof, Address proof, Professional registration certificates, Any specialization certificates, and recent passport-sized photographs. All documents must be clear and valid.",
    },
    {
      question: "Is there a fee to join Amrutam?",
      answer:
        "No, there is no joining fee to become an Amrutam practitioner. Registration is completely free. We operate on a commission-based model where we take a small percentage only from successful consultations, ensuring you earn without any upfront investment.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-20 px-4 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions to help you navigate the app and its features easily.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-green-100 transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-5 sm:px-8 py-5 sm:py-6 text-left flex items-center justify-between hover:bg-green-50 transition-colors duration-300"
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                  <i
                    className={`ri-add-line text-xl text-green-700 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-45' : ''
                    }`}
                  ></i>
                </div>
              </button>

              {openIndex === index && (
                <div className="px-5 sm:px-8 pb-5 sm:pb-6">
                  <div className="h-px bg-green-100 mb-4"></div>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-10 sm:mt-12">
          <Link href="/FAQ">
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap">
              See More
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

