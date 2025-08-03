'use client';

import Header from '../components/Header';
import { useState } from 'react';
import Image from 'next/image';

export default function JoinNowPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    specialization: '',
    experience: '',
    location: '',
    practiceType: '',
    availability: '',
    aboutYou: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('api/join-practioner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          specialization: '',
          experience: '',
          location: '',
          practiceType: '',
          availability: '',
          aboutYou: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-50">
      <Header />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-green-700 mb-4">
              Join Amrutam Practice Network
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Become part of our growing community of Ayurvedic practitioners and expand
              your reach to help more patients naturally.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Image
                height={400}  
                width={400}
                src="https://amrutam-ayurveda3.odoo.com/web/image/693-bffa4613/987456.webp"               
                alt="Ayurvedic Consultation"
                className="w-full rounded-2xl shadow-lg object-cover object-top"
              />

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-green-700">Why Join Amrutam?</h3>

                <div className="space-y-4">
                  {/* Benefits list */}
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-user-heart-line text-green-700"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Connect with More Patients</h4>
                      <p className="text-gray-600">Reach thousands seeking authentic Ayurveda.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-time-line text-green-700"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Flexible Scheduling</h4>
                      <p className="text-gray-600">Work on your own time.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-line-chart-line text-green-700"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Grow Your Practice</h4>
                      <p className="text-gray-600">Scale using our digital platform.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-shield-check-line text-green-700"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Trusted Platform</h4>
                      <p className="text-gray-600">Join a verified Ayurvedic practitioner network.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <form onSubmit={handleSubmit} id="join-practitioner-form">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Form inputs grid */}
                  {/* Repeat for each field */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      placeholder=""
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder=""
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 text-sm"
                      />
                </div>
                
                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone *
                    </label>
                    <input
                      type="phone"
                      name="Phone"
                      value={formData.Phone}
                      onChange={handleInputChange}
                      required
                      placeholder=""
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 text-sm"
                      />
                </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Specialization *
                    </label>
                    <input
                      type="specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleInputChange}
                      required
                      placeholder=""
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 text-sm"
                      />
                </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience *
                    </label>
                    <input
                      type="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      placeholder=""
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 text-sm"
                      />
                </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="location"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      placeholder=""
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 text-sm"
                      />
                </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PracticeType *
                    </label>
                    <input
                      type="practiceType"
                      name="practiceType"
                      value={formData.practiceType}
                      onChange={handleInputChange}
                      required
                      placeholder=""
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 text-sm"
                      />
                </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Availability *
                    </label>
                    <input
                      type="availability"
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      placeholder=""
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 text-sm"
                      />
                </div>

                 <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      AboutYou *
                    </label>
                    <input
                      type="aboutYou"
                      name="aboutYou"
                      value={formData.aboutYou}
                      onChange={handleInputChange}
                      required
                      placeholder=""
                      className="w-full px-4 py-3 border text-gray-700 border-gray-300 rounded-lg focus:ring-1 focus:ring-green-500 text-sm"
                      />
                </div>

           </div>

                {submitStatus === 'success' && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="ri-check-circle-line text-green-600 mr-3"></i>
                      <p className="text-green-800">
                        Thank you! Your application has been submitted successfully.
                      </p>
                    </div>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <i className="ri-error-warning-line text-red-600 mr-3"></i>
                      <p className="text-red-800">
                        There was an error submitting. Please try again.
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-8 w-full bg-green-700 hover:bg-green-800 disabled:bg-gray-400 text-white py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg"
                >
                  {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
