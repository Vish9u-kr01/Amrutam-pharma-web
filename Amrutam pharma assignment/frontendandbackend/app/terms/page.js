'use client';

import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsAndConditionsPage = () => {
  return (
    <>
      <Header />

      <main className="px-4 py-8 bg-gradient-to-br from-yellow-50 to-orange-50 text-gray-800 max-w-full mx-auto">
        <h1 className="text-3xl font-semibold text-green-800 mb-6">Terms and Conditions</h1>

        {/* All your content sections go here exactly as I shared earlier */}
        {/* You can paste the formatted sections from previous response here */}
        
           
        {/* Example: */}
        <section className="mb-6">
          <p className="mb-4">
            By accessing or using the Website, or any of our services, you agree that you have read, understood,
            and are bound by these terms and conditions (“Terms”) without any recourse or liability to us.
          </p>
          <p className="mb-4">
            These Terms form an electronic record under the Information Technology Act, 2000. It does not require
            any physical or digital signatures.
          </p>
        </section>
  
         <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">1. Definitions</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Applicable Law:</strong> Laws and regulations of the Republic of India.</li>
          <li><strong>Bulk Order:</strong> Any order negotiated directly with the Company.</li>
          <li><strong>Company:</strong> Onashi Nature Private Limited and its associated parties.</li>
          <li><strong>Company Intellectual Property:</strong> Includes website content, designs, user data, etc.</li>
          <li><strong>Products:</strong> Branded lifestyle and medicinal products.</li>
          <li><strong>Services:</strong> All services provided through the Website.</li>
          <li><strong>User:</strong> All users of the Website, whether registered or not.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">2. Interpretation</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Words in singular include plural; gender includes all genders.</li>
          <li>Headings are for reference and do not affect interpretation.</li>
          <li>"Writing" includes electronic formats under the IT Act, 2000.</li>
          <li>Terms like "you", "your" refer to the User.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">3. Use of the Website; Registration; Account Security</h2>
        <p className="mb-2">
          Only individuals 18+ and competent to contract can access or use the Website.
        </p>
        <p className="mb-2">
          Users may register to gain access to features such as consultations or discounts.
        </p>
        <p className="mb-2">
          Registered users are responsible for maintaining the confidentiality of their account credentials.
        </p>
        <p className="mb-2">
          The Company reserves the right to suspend or terminate user accounts without notice.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">4. Products</h2>
        <p className="mb-2">
          Products are offered on an "as available" basis and meant for personal use only.
        </p>
        <p className="mb-2">
          Bulk orders or commercial resale may be restricted or canceled by the Company.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">5. Payments</h2>
        <p className="mb-2">
          Prices are subject to change. Payment methods include cards, net banking, and cash on delivery.
        </p>
        <p className="mb-2">
          The Company is not liable for payment failures or gateway issues.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">6. Shipping and Delivery</h2>
        <p className="mb-2">
          Shipping is handled by third-party partners. Delivery charges are applicable.
        </p>
        <p className="mb-2">
          Returns are not accepted except for defective or expired items.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">7. Intellectual Property Rights</h2>
        <p className="mb-2">
          All IP related to the Website and its contents belong solely to the Company. No redistribution or
          commercial use is permitted.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">8. Indemnity</h2>
        <p className="mb-2">
          Users agree to indemnify and hold harmless the Company for any claims, damages, or legal disputes arising
          from their usage or violation of these Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">9. Limitation of Liability</h2>
        <p className="mb-2">
          The Company is not liable for any direct or indirect damages arising from your use of the Website or its
          services. Total liability will not exceed ₹200.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">10. Rules of Conduct</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Do not upload or share harmful, illegal, or offensive content.</li>
          <li>Respect intellectual property rights.</li>
          <li>Do not impersonate others or spread misinformation.</li>
          <li>Do not threaten the integrity of India or violate applicable laws.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">11. Governing Law and Dispute Resolution</h2>
        <p className="mb-2">
          These Terms are governed by Indian law. Disputes will be subject to arbitration and courts at [•].
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-2">12. Miscellaneous</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>The Company can modify these Terms at any time.</li>
          <li>Invalid terms do not affect the rest of the agreement.</li>
          <li>Company may assign rights without user consent.</li>
          <li>No joint venture or agency is formed by these Terms.</li>
        </ul>
      </section>

      </main>

      <Footer />
    </>
  );
};

export default TermsAndConditionsPage;

