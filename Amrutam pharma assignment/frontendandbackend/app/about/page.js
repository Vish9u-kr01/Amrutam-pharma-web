'use client';

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <>
        <Header />
    <div className="bg-[#fffaf3] text-[#3f3f3f] font-sans">
      {/* Hero Section */}
      <div className="relative h-72 bg-cover bg-center flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-green-900 bg-opacity-40"></div>
        <h1 className="relative text-4xl font-bold text-center">About Us</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-8 text-[1.05rem] leading-relaxed">
        <p>
          At <strong>Amrutam</strong>, we believe that true beauty comes from within. Our journey started with a vision to reconnect with the roots of Ayurveda and offer holistic wellness solutions inspired by ancient Indian wisdom.
        </p>

        <p>
          Every Amrutam recipe is crafted with care, following time-tested Ayurvedic formulations mentioned in classical texts like the Charaka Samhita and Sushruta Samhita. Our products are made at our own GMP-certified, FDA-approved facility in Gwalior, Madhya Pradesh.
        </p>

        <p>
          With a strong foundation in Ayurveda and a commitment to sustainability and cruelty-free practices, Amrutam is more than a brand — its a lifestyle movement. From skincare and haircare to nutrition and wellness, we offer handcrafted solutions for the modern individual.
        </p>

        <p>
          Over the years, we have grown into a thriving <span className="font-semibold text-[#c29459]">#AmrutamFamily</span>, connecting with thousands of customers, wellness practitioners, and doctors who believe in the holistic power of Ayurveda.
        </p>

        <p>
          Join us in our mission to promote a balanced, natural, and healthy lifestyle — because at Amrutam, <em>Health is Beauty</em>.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
}

