// 'use client';

// export default function DownloadAppSection() {
//   const features = [
//     {
//       icon: "ri-leaf-line",
//       title: "Build Trust and Community with Forum",
//       bgColor: "bg-green-100",
//     },
//     {
//       icon: "ri-money-dollar-circle-line",
//       title: "Earn More with Pay Per Conversation",
//       bgColor: "bg-green-100",
//     },
//     {
//       icon: "ri-phone-line",
//       title: "Attract Patients with 5-Minute Free Call",
//       bgColor: "bg-green-100",
//     },
//     {
//       icon: "ri-wallet-line",
//       title: "Instant Access to Your Earnings with Wallet",
//       bgColor: "bg-green-100",
//     },
//   ];

//   const doctorProfiles = [
//     {
//       image:
//         "https://readdy.ai/api/search-image?query=Professional%20female%20doctor%20smiling%20warmly%20in%20white%20medical%20coat%2C%20confident%20healthcare%20practitioner%2C%20friendly%20medical%20professional%20portrait%20with%20soft%20lighting%2C%20approachable%20doctor%20with%20stethoscope&width=80&height=80&seq=doc-profile-001&orientation=squarish",
//       position: "top-20 left-10",
//     },
//     {
//       image:
//         "https://readdy.ai/api/search-image?query=Professional%20male%20doctor%20in%20white%20coat%20with%20warm%20smile%2C%20confident%20healthcare%20practitioner%2C%20medical%20specialist%20portrait%2C%20friendly%20doctor%20with%20professional%20appearance&width=80&height=80&seq=doc-profile-002&orientation=squarish",
//       position: "top-32 right-16",
//     },
//     {
//       image:
//         "https://readdy.ai/api/search-image?query=Professional%20female%20healthcare%20practitioner%20with%20confident%20smile%2C%20medical%20doctor%20in%20white%20coat%2C%20warm%20friendly%20doctor%20portrait%20with%20professional%20lighting&width=80&height=80&seq=doc-profile-003&orientation=squarish",
//       position: "bottom-32 left-8",
//     },
//     {
//       image:
//         "https://readdy.ai/api/search-image?query=Professional%20male%20doctor%20with%20beard%20in%20white%20medical%20coat%2C%20confident%20healthcare%20practitioner%2C%20friendly%20medical%20specialist%20portrait%20with%20warm%20smile&width=80&height=80&seq=doc-profile-004&orientation=squarish",
//       position: "bottom-20 right-12",
//     },
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-br from-yellow-100 to-orange-100 overflow-hidden">
//       <div className="container mx-auto px-4">
//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-8">
//             <div>
//               <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-6 leading-tight">
//                 Get Started Today – Download the App Now!
//               </h2>
//               <p className="text-xl text-gray-600 leading-relaxed">
//                 Simplify consultations, manage patients, and grow your
//                 practice—all in one place.
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {features.map((feature, index) => (
//                 <div
//                   key={index}
//                   className="bg-white rounded-2xl p-6 shadow-sm border border-green-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer"
//                 >
//                   <div className="flex items-start space-x-4">
//                     <div
//                       className={`w-10 h-10 ${feature.bgColor} rounded-full flex items-center justify-center flex-shrink-0`}
//                     >
//                       <div className="w-6 h-6 flex items-center justify-center">
//                         <i className={`${feature.icon} text-green-700`}></i>
//                       </div>
//                     </div>
//                     <h3 className="font-semibold text-gray-800 text-sm leading-tight">
//                       {feature.title}
//                     </h3>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="flex flex-col sm:flex-row gap-4 pt-4">
//               <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer flex items-center justify-center space-x-3">
//                 <div className="w-6 h-6 flex items-center justify-center">
//                   <i className="ri-google-play-line text-xl"></i>
//                 </div>
//                 <div className="text-left">
//                   <div className="text-xs text-gray-300">GET IT ON</div>
//                   <div className="text-lg font-bold">Google Play</div>
//                 </div>
//               </button>

//               <button className="bg-black text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer flex items-center justify-center space-x-3">
//                 <div className="w-6 h-6 flex items-center justify-center">
//                   <i className="ri-apple-line text-xl"></i>
//                 </div>
//                 <div className="text-left">
//                   <div className="text-xs text-gray-300">Download on the</div>
//                   <div className="text-lg font-bold">App Store</div>
//                 </div>
//               </button>
//             </div>
//           </div>

//           <div className="relative flex justify-center">
//             <div className="relative z-10">
//               <img
//                 src="https://readdy.ai/api/search-image?query=Modern%20smartphone%20displaying%20medical%20appointments%20app%20interface%20with%20patient%20scheduling%20system%2C%20clean%20healthcare%20mobile%20app%20UI%20showing%20appointment%20details%20and%20patient%20management%2C%20professional%20medical%20app%20design%20with%20green%20accents%20and%20appointment%20cards&width=400&height=800&seq=app-phone-001&orientation=portrait"
//                 alt="Amrutam Mobile App"
//                 className="w-80 h-auto rounded-3xl shadow-2xl object-cover object-top"
//               />
//             </div>

//             {doctorProfiles.map((profile, index) => (
//               <div key={index} className={`absolute ${profile.position} z-0`}>
//                 <div className="w-16 h-16 rounded-full overflow-hidden shadow-lg ring-4 ring-white hover:scale-110 transition-transform duration-300">
//                   <img
//                     src={profile.image}
//                     alt={`Doctor Profile ${index + 1}`}
//                     className="w-full h-full object-cover object-top"
//                   />
//                 </div>
//               </div>
//             ))}

//             <div className="absolute inset-0 bg-gradient-to-r from-green-200/20 to-yellow-200/20 rounded-full blur-3xl -z-10 scale-150"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import React from 'react';
import Image from 'next/image';

const DownloadApp = () => {
  return (
    <section className="w-full bg-white px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        <Image
          src="/Frame.jpg"
          width={1200}
          height={600}
          alt="Download App"
          className="w-full h-auto rounded-lg object-cover shadow-md"
          priority
        />
      </div>
    </section>
  );
};

export default DownloadApp;


