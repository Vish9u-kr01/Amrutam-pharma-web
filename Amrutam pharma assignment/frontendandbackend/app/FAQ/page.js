'use client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What types of consultations are available?',
    answer: 'We provide three types of consultations : video, instant call and chat consultation.',
  },
  {
    question: 'Can I get refund for the wallet money?',
    answer: 'Refunds are subject to our refund policy. Please contact support for more details.',
  },
  {
    question: 'What is the Amrutam Forum?',
    answer: 'A community space to discuss Ayurvedic topics and health queries with experts and peers.',
  },
  {
    question: 'Can I pause the audio consultation?',
    answer: 'Audio consultations cannot be paused but can be rescheduled with prior notice.',
  },
  {
    question: 'Is there a minimum duration for an audio consultation?',
    answer: 'Yes, a minimum duration of 10 minutes applies to audio consultations.',
  },
];

export default function FAQPage() {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleIndex = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <>
      <Header />
    <main className="bg-[#fdf6e9] min-h-screen px-4 sm:px-6 md:px-12 py-12">
      <section className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-[#1C1C1C] mb-4">FAQ</h1>
        <input
          type="text"
          placeholder="Search for any queries that you have"
          className="w-full max-w-xl mx-auto py-3 px-5 rounded-xl text-gray-600 shadow-md focus:outline-none focus:ring-2 focus:ring-gray-600"
        />
      </section>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex space-x-6 justify-center text-lg mb-8">
          {['Consultation', 'Wallet', 'Forum', 'Shop'].map((tab) => (
            <button
              key={tab}
              className="pb-2 border-b-2 text-gray-800 border-transparent hover:border-gray-500  px-4 py-1 rounded-md hover:text-green-800 transition"
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <section className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className=" shadow-sm rounded-md px-4 py-3 border text-gray-900 bg-gradient-to-br from-yellow-50 to-orange-50 transition"
          >
            <button
              className="w-full flex justify-between items-center font-semibold text-left"
              onClick={() => toggleIndex(index)}
            >
              <span>{faq.question}</span>
              {openIndexes.includes(index) ? (
                <ChevronUpIcon className="h-5 w-5 text-gray-600" />
              ) : (
                <ChevronDownIcon className="h-5 w-5 text-gray-600" />
              )}
            </button>
            {openIndexes.includes(index) && (
              <p className="mt-2 text-gray-900 text-sm md:text-base">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>

      <section className="mt-24 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-green-900 mb-4">
            Download Amrutam Ayurveda App Now
          </h2>
          <p className="text-gray-500 mb-6">
            The Amrutam Ayurveda App is your one-stop app for all things Ayurvedic! Apart from mimicking the website, the app has added benefits
          </p>

          <div className="grid grid-cols-2 gap-4 text-sm text-green-800">
            <div className="border border-gray-500 rounded-md px-4 py-3">Access To Prescriptions</div>
            <div className="border border-gray-500 rounded-md px-4 py-3">Track Health Efficiently</div>
            <div className="border border-gray-500 rounded-md px-4 py-3">Direct Chat With Doctors</div>
            <div className="border border-gray-500 rounded-md px-4 py-3">In-App Reminders For Consultations</div>
          </div>

          <div className="flex space-x-4 mt-6">
            <Image width={130}  height={90} src="/google-play-badge.png" alt="Google Play" className="h-12" />
            <Image width={130} height={90} src="/app-store-badge.png" alt="App Store" className="h-12" />
          </div>
        </div>

        <div className="flex justify-center">
          <Image
             height={360}
              width={360}
            src="/amrutam-app-demo.png"
            alt="Amrutam App Demo"
            className="w-120 h-90 rounded-xl shadow-lg"
          />
        </div>
      </section>
    </main>
        <Footer />
    </>
  );
}

