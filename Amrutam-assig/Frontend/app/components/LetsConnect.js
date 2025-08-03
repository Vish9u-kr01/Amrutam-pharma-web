'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function LetsConnect() {
  const [form, setForm] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        alert('Message sent Successfully!');
        setForm({ name: '', contact: '', email: '', message: '' });
      } else {
        alert('All fields are required or email already registered.');
      }
    } catch (err) {
      console.error(err);
      alert('Error sending message.');
    }
  };

  return (
    <div className="bg-[#fdf3d6] min-h-screen p-6 sm:p-10">
      <h2 className="text-3xl font-semibold text-green-800 text-center mb-2">Lets Connect</h2>
      <p className="text-center text-gray-700 mb-10 max-w-2xl mx-auto">
        We are here to help you on your wellness journey. Reach out to us for any questions,
        product inquiries, or personalized advice.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/Img.png"
            alt="Contact Us"
            width={600}
            height={400}
            className="rounded-lg w-full h-auto object-cover"
            priority
          />
        </div>

        {/* Right Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-[#fffef7] p-6 sm:p-8 rounded-lg shadow-md border border-gray-200"
        >
          <div className="mb-4">
            <label className="text-sm text-green-800 block mb-1">Your Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              required
              placeholder="Vikas Kumar"
              className="w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none py-2"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-green-800 block mb-1">Your Contact Number</label>
            <input
              name="contact"
              value={form.contact}
              onChange={handleChange}
              type="tel"
              required
              placeholder="8743414476"
              className="w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none py-2"
            />
          </div>

          <div className="mb-4">
            <label className="text-sm text-green-800 block mb-1">Your Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              required
              placeholder="vikass@gmail.com"
              className="w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none py-2"
            />
          </div>

          <div className="mb-6">
            <label className="text-sm text-green-800 block mb-1">Message (Optional)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows="4"
              placeholder="I want to On-board as a Doctor"
              className="w-full border-b-2 border-gray-300 text-gray-600 focus:outline-none py-2 resize-none"
            />
          </div>

          <button
            type="submit"
            className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700 active:bg-green-700  transition w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}


