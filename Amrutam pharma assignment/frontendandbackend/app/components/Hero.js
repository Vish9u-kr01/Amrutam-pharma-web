'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Peaceful%20Ayurvedic%20healing%20environment%20with%20soft%20warm%20lighting%2C%20natural%20organic%20textures%2C%20gentle%20earth%20tones%2C%20serene%20spa%20atmosphere%20with%20subtle%20botanical%20elements%2C%20clean%20minimalist%20background%20perfect%20for%20healthcare%20professionals%2C%20warm%20beige%20and%20cream%20colors%20blending%20harmoniously%2C%20professional%20medical%20setting%20with%20calming%20energy&width=1920&height=1080&seq=hero-bg-001&orientation=landscape')`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-50/90 to-transparent"></div>

      <div className="relative container mx-auto px-4 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-2">
              <p className="text-green-700 text-base sm:text-lg font-medium">Namaste, Welcome to Amrutam</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 leading-tight">
                Join Amrutam - <span className="text-green-700">Grow Your Practice</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-lg leading-relaxed">
              Connect with more patients, set your own schedule, and grow your Ayurvedic practice effortlessly.
            </p>

            <div>
              <Link href="/Join-now">
                <button className="bg-green-700 hover:bg-green-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold transition duration-300 transform hover:scale-105 shadow-md">
                  Join Now
                </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-12 gap-6 pt-6">
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-green-700">500+</div>
                <p className="text-gray-600 text-sm mt-1">Average Active Users</p>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-green-700">40+</div>
                <p className="text-gray-600 text-sm mt-1">Average Daily Free Calls</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative hidden sm:block">
            <div className="relative">
              <img
                src="https://readdy.ai/api/search-image?query=Three%20professional%20Ayurvedic%20healthcare%20practitioners%20standing%20confidently%2C%20diverse%20team%20of%20doctors%20in%20medical%20scrubs%20and%20white%20coats%2C%20warm%20friendly%20smiles%2C%20modern%20healthcare%20professionals%2C%20clean%20medical%20environment%2C%20one%20woman%20in%20teal%20scrubs%2C%20one%20man%20in%20blue%20scrubs%2C%20one%20man%20in%20white%20coat%20with%20stethoscope%2C%20professional%20medical%20photography%20with%20soft%20lighting&width=800&height=600&seq=doctors-team-001&orientation=landscape"
                alt="Professional Ayurvedic Healthcare Team"
                className="w-full h-auto rounded-2xl shadow-2xl object-cover object-top"
              />

              {/* Decorative Icons */}
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center shadow-md">
                <i className="ri-plant-line text-xl text-green-700"></i>
              </div>

              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center shadow-md">
                <i className="ri-leaf-line text-xl text-green-700"></i>
              </div>

              <div className="absolute top-1/2 -left-10 w-14 h-14 bg-yellow-200 rounded-full flex items-center justify-center shadow-md">
                <i className="ri-heart-pulse-line text-lg text-green-700"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

