'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Pooja Deshmukh",
      title: "BAMS",
      rating: 4,
      review:
        "Amrutam's formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20female%20Ayurvedic%20doctor%20in%20white%20coat%20with%20warm%20friendly%20smile%2C%20Indian%20healthcare%20practitioner%2C%20traditional%20medicine%20specialist%2C%20professional%20medical%20portrait%20with%20soft%20lighting%2C%20confident%20medical%20professional%20woman&width=150&height=150&seq=doctor-pooja-001&orientation=squarish"
    },
    {
      name: "Dr. Rajesh Iyer",
      title: "Ayurvedic Practitioner",
      rating: 4,
      review:
        "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20male%20Ayurvedic%20doctor%20in%20white%20medical%20coat%2C%20Indian%20healthcare%20practitioner%20with%20confident%20smile%2C%20traditional%20medicine%20specialist%2C%20professional%20medical%20portrait%20photography%20with%20warm%20lighting&width=150&height=150&seq=doctor-rajesh-001&orientation=squarish"
    },
    {
      name: "Dr. Ananya Sharma",
      title: "BAMS",
      rating: 5,
      review:
        "As an Ayurvedic doctor, I appreciate Amrutam's commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I've personally seen positive results in my patients using their products.",
      image:
        "https://readdy.ai/api/search-image?query=Professional%20female%20Ayurvedic%20doctor%20with%20traditional%20Indian%20features%2C%20confident%20healthcare%20practitioner%20in%20white%20coat%2C%20warm%20professional%20smile%2C%20medical%20specialist%20portrait%20with%20soft%20natural%20lighting&width=150&height=150&seq=doctor-ananya-001&orientation=squarish"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <div key={index} className="w-4 h-4 flex items-center justify-center">
        <i className={`ri-star-${index < rating ? 'fill' : 'line'} text-yellow-400`}></i>
      </div>
    ));
  };

  return (
    <section id = "Testimonials" className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-6">
            What other Ayurvedic Doctors are Saying
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-xl  active:-translate-y-2 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <Image
                    height={64}
                    width={64}
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover object-top shadow-md"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-gray-800 text-lg truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-green-700 text-sm font-medium">
                    {testimonial.title}
                  </p>
                  <div className="flex items-center space-x-1 mt-2">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>

              <blockquote className="text-gray-700 leading-relaxed italic">
                {testimonial.review}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


