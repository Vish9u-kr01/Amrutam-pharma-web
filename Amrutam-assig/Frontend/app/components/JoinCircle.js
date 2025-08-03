'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function JoinCircleSection() {
  return (
    <section id="onboarding" className="py-12 md:py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-green-700 mb-4 md:mb-6">
            Join Our Circle of Care
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl mx-auto">
            Becoming a part of Amrutam is simple
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Steps Section */}
          <div className="space-y-6 md:space-y-8">
            {[1, 2, 3, 4].map((step) => (
              <div
                key={step}
                className="rounded-2xl p-6 md:p-8 shadow-lg border border-green-100 hover:bg-green-600 transition-all duration-300 bg-white"
              >
                <div className="flex items-start gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-green-700 mb-2">
                      {step === 1 && 'Step 1: Get your referral code'}
                      {step === 2 && 'Step 2: Register on Amrutam'}
                      {step === 3 && 'Step 3: Complete KYC'}
                      {step === 4 && 'Step 4: Start consulting'}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600">
                      {step === 1 && 'Contact us to receive your unique referral code.'}
                      {step === 2 && 'Sign up on the Amrutam Doctors app or website to join our specialist network.'}
                      {step === 3 && 'Fill in your details and upload the required documents for verification.'}
                      {step === 4 && 'Once verified, begin offering consultations and helping patients.'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Section */}
          <div className="lg:sticky lg:top-8">
            {/* Top Image */}
            <div className="relative mb-10 md:mb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-green-200/30 to-yellow-200/30 rounded-3xl blur-3xl"></div>
              <Image
                src="/join-circle image.png"
                width={400}
                height={400}
                alt="Doctor Registration Interface"
                className="relative w-full rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10 md:mb-12">
              {['Consultations', 'Payment withdrawal', 'Schedule'].map((label, i) => (
                <button
                  key={i}
                  className={`${
                    label === 'Consultations'
                      ? 'bg-green-700 hover:bg-green-800 text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
                  } px-5 py-2.5 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                    label === 'Consultations' ? 'shadow-lg' : 'shadow-sm'
                  } whitespace-nowrap`}
                >
                  {label}
                </button>
              ))}
            </div>

            {/* App UI Previews */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: 'Value Your Practice',
                  img: 'https://readdy.ai/api/search-image?query=Mobile%20app%20interface%20showing%20consultation%20fees%20and%20pricing%20options%20for%20medical%20practice%2C%20clean%20medical%20app%20UI%20with%20call%2C%20video%20and%20chat%20options%2C%20professional%20healthcare%20pricing%20interface%20with%20warm%20beige%20background%20and%20green%20accents&width=300&height=500&seq=pricing-phone-001&orientation=portrait'
                },
                {
                  title: "Today's Healing Journey",
                  img: 'https://readdy.ai/api/search-image?query=Healthcare%20mobile%20app%20showing%20daily%20appointments%20and%20patient%20scheduling%20interface%2C%20medical%20appointment%20management%20system%20with%20patient%20profiles%20and%20booking%20details%2C%20professional%20medical%20app%20UI%20with%20clean%20design%20and%20green%20accents&width=300&height=500&seq=appointments-phone-001&orientation=portrait'
                },
                {
                  title: 'Consultation Details',
                  img: 'https://readdy.ai/api/search-image?query=Medical%20consultation%20details%20mobile%20interface%20showing%20patient%20information%20and%20appointment%20management%2C%20professional%20healthcare%20app%20with%20detailed%20consultation%20tracking%2C%20clean%20medical%20UI%20design%20with%20patient%20profiles%20and%20treatment%20details&width=300&height=500&seq=consultation-phone-001&orientation=portrait'
                }
              ].map(({ title, img }, i) => (
                <div key={i} className="text-center">
                  <Image
                    height={160}
                    width={160}
                    src={img}
                    alt={title}
                    className="w-full max-w-[160px] mx-auto rounded-2xl shadow-lg object-cover object-top"
                  />
                  <h3 className="text-sm md:text-base font-semibold text-green-700 mt-2">{title}</h3>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center mt-10 md:mt-12">
              <Link href="/Join-now">
                <button className="bg-green-700 hover:bg-green-800 text-white px-8 py-3 md:px-12 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

