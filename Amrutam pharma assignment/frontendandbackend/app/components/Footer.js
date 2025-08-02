'use client';
import React from 'react';


const Footer = () => {
  return (
    <footer className="BKC body-font">
      <div className="container px-5 py-24 mx-auto">
        {/* Flex row container with gaps */}
        <div className="flex flex-wrap justify-between gap-10">
          {/* GET IN TOUCH */}
          <div className="lg:w-1/3 md:w-1/2 w-full">
            <h1 className="font-extrabold text-green-700 mb-4">AMRUTAM</h1>
            <h2 className="font-extrabold text-green-700 mb-3">GET in Touch</h2>
            <p className="text-gray-900">
              support@amrutam.global <br />
              Amrutam Pharmaceuticals Pvt. Ltd. <br />
              Chitragupt Ganj, Nai Sadak, Lashkar, <br />
              Gwalior - 474001 <br /><br />
              +91 9713171999
            </p>
          </div>

          {/* INFORMATION */}
          <div className="lg:w-1/3 md:w-1/2 w-full">
            <h1 className="font-extrabold text-green-700 mb-4">Information</h1>
            <nav className="list-none mb-10">
              {[
                { text: 'About us', href: '/about' },
                { text: 'Terms and Condition', href: '/terms' },
                { text: 'Privacy Policy', href: '/privacypolicy' },
                { text: 'Privacy Policy for Mobile App', href: '/privacypolicy' },
                { text: 'Shipping and Return Policy', href: '/shipping-return' },
                { text: 'International Delivery', href: '/international-delivery' },
                { text: 'For Business, Hotels and Resorts', href: '/business' },
              ].map((item, index) => (
                <li key={index} className="mb-2">
                  <a href={item.href} className="text-gray-600 hover:text-gray-800">
                    {item.text}
                  </a>
                </li>
              ))}
            </nav>

          </div>

          {/* SUBSCRIBE */}
          <div className="lg:w-1/4 md:w-1/2 w-full">
            <h2 className="title-font font-extrabold text-green-700 mb-3">Follow Us</h2>

            <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-4 mr-0.5">
              {/* Facebook */}
              <div className="relative group">
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-green-800">
                  Facebook
                </div>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  className="relative w-[30px] h-[30px] rounded-full bg-green-800 text-white flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[3px_2px_30px_0px_rgba(0,0,0,0.12)] hover:text-white cursor-pointer"
                >
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 group-hover:h-full" />
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="relative z-10 w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </a>
              </div>
              {/* youtube */}
              <div className="relative group">
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-green-800">
                  Youtube
                </div>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  className="relative w-[30px] h-[30px] rounded-full bg-green-800 text-white flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[3px_2px_30px_0px_rgba(0,0,0,0.12)] hover:text-white cursor-pointer"
                >
                  <span className="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 group-hover:h-full" />
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path d="M23.498 6.186a2.95 2.95 0 0 0-2.077-2.087C19.589 3.5 12 3.5 12 3.5s-7.589 0-9.421.599A2.95 2.95 0 0 0 .502 6.186 30.421 30.421 0 0 0 0 12a30.421 30.421 0 0 0 .502 5.814 2.95 2.95 0 0 0 2.077 2.087C4.411 20.5 12 20.5 12 20.5s7.589 0 9.421-.599a2.95 2.95 0 0 0 2.077-2.087A30.421 30.421 0 0 0 24 12a30.421 30.421 0 0 0-.502-5.814ZM9.75 15.02V8.98l6.5 3.02-6.5 3.02Z" />
                  </svg>

                </a>
              </div>

              {/* Twitter */}
              <div className="relative group">
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-green-800">
                  Twitter
                </div>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  className="relative w-[30px] h-[30px] rounded-full bg-green-800 text-white flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[3px_2px_30px_0px_rgba(0,0,0,0.12)] hover:text-white cursor-pointer"
                >
                  <span className="absolute bottom-0 left-0 w-full h-0  transition-all duration-300 group-hover:h-full" />
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="relative z-10 w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0012 8v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
              </div>

              {/* Instagram */}
              <div className="relative group">
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-green-800">
                  Instagram
                </div>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  className="relative w-[30px] h-[30px] rounded-full bg-green-800 text-white flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[3px_2px_30px_0px_rgba(0,0,0,0.12)] hover:text-white cursor-pointer"
                >
                  <span className="absolute bottom-0 left-0 w-full h-0  transition-all duration-300 group-hover:h-full" />
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="relative z-10 w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
              </div>
              {/* Pinterest */}
              <div className="relative group">
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-green-800">
                  Pinterest
                </div>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  className="relative w-[30px] h-[30px] rounded-full bg-green-800 text-white flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[3px_2px_30px_0px_rgba(0,0,0,0.12)] hover:text-white cursor-pointer"
                >
                  <span className="absolute bottom-0 left-0 w-full h-0  transition-all duration-300 group-hover:h-full" />
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12 0C5.375 0 0 5.375 0 12c0 4.833 2.908 8.958 7.042 10.708-.097-.911-.183-2.312.038-3.312.2-.862 1.292-5.496 1.292-5.496s-.33-.659-.33-1.633c0-1.531.888-2.677 1.993-2.677.938 0 1.391.704 1.391 1.548 0 .943-.6 2.352-.909 3.661-.26 1.103.553 2 1.637 2 1.963 0 3.475-2.072 3.475-5.06 0-2.647-1.902-4.503-4.614-4.503-3.144 0-4.991 2.358-4.991 4.8 0 .944.364 1.958.818 2.507a.33.33 0 0 1 .078.316c-.086.35-.281 1.104-.319 1.257-.05.2-.162.243-.376.146-1.396-.646-2.267-2.678-2.267-4.31 0-3.512 2.552-6.735 7.36-6.735 3.863 0 6.866 2.755 6.866 6.438 0 3.841-2.419 6.941-5.779 6.941-1.129 0-2.194-.59-2.556-1.283l-.695 2.645c-.252.974-.935 2.193-1.392 2.939C10.933 23.856 11.459 24 12 24c6.625 0 12-5.375 12-12S18.625 0 12 0Z" />
                  </svg>
                </a>
              </div>

              {/* LinkedIn */}
              <div className="relative group">
                <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 bg-green-800">
                  Linkdin
                </div>
                <a
                  href="https://linkdin.com"
                  target="_blank"
                  className="relative w-[30px] h-[30px] rounded-full bg-green-800 text-white flex items-center justify-center overflow-hidden transition-all duration-300 hover:shadow-[3px_2px_30px_0px_rgba(0,0,0,0.12)] hover:text-white cursor-pointer"
                >
                  <span className="absolute bottom-0 left-0 w-full h-0  transition-all duration-300 group-hover:h-full" />
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M4.983 3.5c0 1.381-1.12 2.5-2.501 2.5S0 4.881 0 3.5 1.119 1 2.5 1s2.483 1.119 2.483 2.5zM0 8.999h5v15.001H0V8.999zM8.5 8.999h4.788v2.102h.068c.667-1.266 2.299-2.598 4.732-2.598 5.063 0 6 3.311 6 7.615V24H18v-6.553c0-1.562-.027-3.571-2.178-3.571-2.178 0-2.511 1.702-2.511 3.455V24H8.5V8.999z" />
                  </svg>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <style jsx>{`
        .BKC {
          background-color: #aec68f;
        }
      `}</style>
    </footer>
  );
};

export default Footer;


