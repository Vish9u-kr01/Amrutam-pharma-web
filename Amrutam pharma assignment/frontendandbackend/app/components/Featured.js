'use client';
import Image from 'next/image';

export default function FeaturedSection() {
  const publications = [
    { name: 'THE TIMES OF INDIA', logo: 'https://readdy.ai/api/search-image?query=The%20Times%20of%20India%20newspaper%20logo%2C%20clean%20professional%20media%20brand%20logo%2C%20red%20and%20black%20typography%2C%20established%20newspaper%20branding%2C%20simple%20background&width=200&height=100&seq=toi-logo-001&orientation=landscape' },
    { name: 'YOURSTORY', logo: 'https://readdy.ai/api/search-image?query=YourStory%20media%20publication%20logo%2C%20modern%20startup%20media%20brand%2C%20bold%20red%20text%20logo%2C%20professional%20media%20company%20branding%2C%20clean%20white%20background&width=200&height=100&seq=yourstory-logo-001&orientation=landscape' },
    { name: 'Condé Nast Traveller', logo: 'https://readdy.ai/api/search-image?query=Conde%20Nast%20Traveller%20magazine%20logo%2C%20elegant%20travel%20publication%20branding%2C%20sophisticated%20typography%2C%20luxury%20travel%20magazine%20logo%2C%20professional%20media%20brand&width=200&height=100&seq=cnt-logo-001&orientation=landscape' },
    { name: 'THE VOICE OF FASHION', logo: 'https://readdy.ai/api/search-image?query=The%20Voice%20of%20Fashion%20magazine%20logo%2C%20fashion%20industry%20publication%2C%20elegant%20fashion%20media%20branding%2C%20stylish%20typography%2C%20fashion%20magazine%20logo&width=200&height=100&seq=vof-logo-001&orientation=landscape' },
    { name: 'GQ', logo: 'https://readdy.ai/api/search-image?query=GQ%20magazine%20logo%2C%20luxury%20mens%20lifestyle%20publication%2C%20sophisticated%20black%20and%20gold%20branding%2C%20premium%20magazine%20logo%2C%20clean%20professional%20design&width=200&height=100&seq=gq-logo-001&orientation=landscape' },
    { name: 'LIFESTYLE ASIA', logo: 'https://readdy.ai/api/search-image?query=Lifestyle%20Asia%20magazine%20logo%2C%20Asian%20lifestyle%20publication%2C%20modern%20sophisticated%20branding%2C%20luxury%20lifestyle%20magazine%2C%20elegant%20typography&width=200&height=100&seq=lifestyle-asia-logo-001&orientation=landscape' },
    { name: 'VOGUE', logo: 'https://readdy.ai/api/search-image?query=Vogue%20magazine%20logo%2C%20iconic%20fashion%20publication%2C%20elegant%20black%20typography%2C%20luxury%20fashion%20magazine%20branding%2C%20sophisticated%20media%20brand&width=200&height=100&seq=vogue-logo-001&orientation=landscape' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 md:px-8 bg-gradient-to-br from-yellow-50 to-orange-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-700 mb-4">
            Featured
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Recognized and celebrated by leading publications: Amrutam in the spotlight!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {publications.map((publication, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <Image
                height={100}
                width={200}
                src={publication.logo}
                alt={publication.name}
                className="h-10 sm:h-12 w-auto max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


