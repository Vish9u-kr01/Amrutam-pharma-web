// 'use client';

// export default function WhyChooseSection() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-yellow-50 to-orange-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl lg:text-5xl font-bold text-green-700 mb-4">
//             Why Doctors Choose Us?
//           </h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             Unlock the Benefits of Smarter Healthcare Management and Patient Care
//           </p>
//         </div>

//         <div className="space-y-24">
//           {/* Instant FREE 5-Mins Call */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="absolute -top-8 -left-8 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
//                 <div className="w-10 h-10 flex items-center justify-center">
//                   <i className="ri-phone-line text-2xl text-green-700"></i>
//                 </div>
//               </div>
//               <img
//                 src="https://readdy.ai/api/search-image?query=Professional%20mobile%20app%20interface%20showing%20doctor%20consultation%20booking%20screen%2C%20clean%20medical%20appointment%20scheduling%20UI%20design%2C%20modern%20healthcare%20app%20with%20doctor%20profile%20and%20instant%20call%20feature%2C%20warm%20beige%20background%20with%20green%20accent%20colors%2C%20professional%20medical%20technology%20interface%20design&width=600&height=400&seq=call-interface-001&orientation=landscape"
//                 alt="Instant Call Interface"
//                 className="w-full rounded-2xl shadow-xl object-cover object-top"
//               />
//             </div>

//             <div className="space-y-6">
//               <div className="space-y-4">
//                 <h3 className="text-3xl font-bold text-gray-800">
//                   Instant <span className="text-green-700">FREE</span> 5-Mins Call
//                 </h3>
//                 <p className="text-lg text-gray-600 leading-relaxed"> 
//                   We understand the importance of building trust with your patients. 
//                   That's why Amrutam offers a  
//                    <span className="font-semibold text-green-700">  free 5-minute call</span> 
//                   ,Helping you connect instantly and foster lasting patient relationship with ease.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Forum for Meaningful Connections */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-6 lg:order-2">
//               <div className="relative">
//                 <div className="absolute -top-8 -right-8 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
//                   <div className="w-10 h-10 flex items-center justify-center">
//                     <i className="ri-discuss-line text-2xl text-green-700"></i>
//                   </div>
//                 </div>
//                 <h3 className="text-3xl font-bold text-green-700 mb-4">
//                   Forum for Meaningful Connections
//                 </h3>
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   We value your journey in Ayurveda. The Amrutam Forum 
//                   helps you engage with patients, answer questions, while 
//                   the 'Thoughts' section allows you to share deeper 
//                   Ayurvedic wisdom.
//                 </p>
//               </div>
//             </div>

//             <div className="relative lg:order-1">
//               <img
//                 src="https://readdy.ai/api/search-image?query=Medical%20forum%20discussion%20interface%20screenshot%2C%20healthcare%20professional%20community%20platform%20with%20chat%20messages%20and%20user%20profiles%2C%20clean%20modern%20medical%20app%20UI%20design%20with%20forum%20threads%20and%20discussions%2C%20warm%20beige%20medical%20interface%20with%20green%20accent%20colors%2C%20professional%20healthcare%20communication%20platform&width=600&height=400&seq=forum-interface-001&orientation=landscape"
//                 alt="Forum Interface"
//                 className="w-full rounded-2xl shadow-xl object-cover object-top"
//               />
//             </div>
//           </div>

//           {/* Choose Your Session Mode */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="absolute -top-8 -left-8 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
//                 <div className="w-10 h-10 flex items-center justify-center">
//                   <i className="ri-video-chat-line text-2xl text-green-700"></i>
//                 </div>
//               </div>
//               <img
//                 src="https://readdy.ai/api/search-image?query=Medical%20consultation%20options%20interface%20showing%20chat%2C%20call%20and%20video%20call%20modes%2C%20modern%20healthcare%20app%20session%20selection%20screen%20with%20multiple%20communication%20options%2C%20clean%20medical%20UI%20design%20with%20warm%20beige%20background%20and%20green%20accents%2C%20professional%20telemedicine%20platform%20interface&width=600&height=400&seq=session-modes-001&orientation=landscape"
//                 alt="Session Modes Interface"
//                 className="w-full rounded-2xl shadow-xl object-cover object-top"
//               />
//             </div>

//             <div className="space-y-6">
//               <div className="space-y-4">
//                 <h3 className="text-3xl font-bold text-green-700">
//                   Choose Your Session Mode
//                 </h3>
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   Amrutam offers you to connect with patients via Instant Chat, 
//                   Instant Call, or Schedule Video call. Each option offers 
//                   flexibility and personalized care to suit individual needs.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Smart Wallet */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-6 lg:order-2">
//               <div className="relative">
//                 <div className="absolute -top-8 -right-8 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
//                   <div className="w-10 h-10 flex items-center justify-center">
//                     <i className="ri-wallet-3-line text-2xl text-green-700"></i>
//                   </div>
//                 </div>
//                 <h3 className="text-3xl font-bold text-green-700 mb-4">
//                   Smart Wallet
//                 </h3>
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   We understand the need for seamless transactions. With 
//                   Amrutam Wallet, you can easily withdraw payments, and for 
//                   your security, a one-time password is sent to your 
//                   registered mobile number during withdrawals.
//                 </p>
//               </div>
//             </div>

//             <div className="relative lg:order-1">
//               <img
//                 src="https://readdy.ai/api/search-image?query=Digital%20wallet%20interface%20for%20medical%20professionals%20showing%20recent%20withdrawals%20and%20account%20balance%2C%20modern%20healthcare%20payment%20system%20UI%20with%20transaction%20history%2C%20clean%20financial%20app%20design%20with%20warm%20beige%20background%20and%20green%20accents%2C%20professional%20medical%20wallet%20dashboard&width=600&height=400&seq=wallet-interface-001&orientation=landscape"
//                 alt="Smart Wallet Interface"
//                 className="w-full rounded-2xl shadow-xl object-cover object-top"
//               />
//             </div>
//           </div>

//           {/* Flexible Work Timing */}
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="relative">
//               <div className="absolute -top-8 -left-8 w-20 h-20 bg-green-100 rounded-full flex items-center justify-center shadow-lg">
//                 <div className="w-10 h-10 flex items-center justify-center">
//                   <i className="ri-time-line text-2xl text-green-700"></i>
//                 </div>
//               </div>
//               <img
//                 src="https://readdy.ai/api/search-image?query=Medical%20scheduling%20calendar%20interface%20showing%20flexible%20work%20hours%20and%20appointment%20slots%2C%20healthcare%20professional%20time%20management%20app%20with%20availability%20toggle%2C%20modern%20medical%20appointment%20system%20UI%20with%20warm%20beige%20design%20and%20green%20accents%2C%20doctor%20schedule%20management%20platform&width=600&height=400&seq=scheduling-001&orientation=landscape"
//                 alt="Flexible Timing Interface"
//                 className="w-full rounded-2xl shadow-xl object-cover object-top"
//               />
//             </div>

//             <div className="space-y-6">
//               <div className="space-y-4">
//                 <h3 className="text-3xl font-bold text-green-700">
//                   Flexible Work Timing
//                 </h3>
//                 <p className="text-lg text-gray-600 leading-relaxed">
//                   We recognize the importance of managing your time. With the 
//                   availability toggle in the doctor's app, you control when 
//                   patients can book consultations, ensuring a balanced and 
//                   stress-free practice.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import React from 'react'
import Image from 'next/image';
const WhyChoose = () => {
  return (
    <div>
      <section>
        <Image
        src="/Desktop-23.jpg"
        alt="Why Choose Us"
        width={1000}    
        height={2000}
        className="w-full object-cover"
      />
      </section>
    </div>
  )
}

export default WhyChoose
