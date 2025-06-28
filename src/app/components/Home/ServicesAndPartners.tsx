'use client';
import Image from 'next/image';

const services = [
  {
    title: '24x7 Support',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industr',
    icon: '/1.png',
  },
  {
    title: 'Easy Clain System',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industr',
    icon: '/2.png',
  },
  {
    title: 'Easy Installments',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industr',
    icon: '/3.png',
  },
];

const categories = [
  { name: 'Health Insurance', icon: '/16.png' },
  { name: 'Motor Insurance', icon: '/15.png' },
  { name: 'Travel Insurance', icon: '/14.png' },
  { name: 'Shop Insurance', icon: '/13.png' },
  { name: 'Home Insurance', icon: '/12.png' },
  { name: 'Fire Insurance', icon: '/11.png' },
];

const partners = [
  ['/1.png', '/2.png', '/3.png'],
  ['/4.png', '/5.png', '/6.png'],
  ['/7.png', '/8.png', '/9.png'],
  ['/10.png', '/11.png', '/12.png'],
];

export default function ServicesAndPartners() {
  return (
    <section className="px-4 md:px-12 py-12 bg-white">
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        Best <span className="text-orange-500">Services</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-3 text-center max-w-6xl mx-auto mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-4 border-b-2 md:border-b-0 md:border-r-2 md:last:border-r-0 border-gray-100 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          >
            <div className="flex justify-center mb-4">
              <Image src={service.icon} alt={service.title} width={40} height={40} />
            </div>
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
        <span className="text-orange-500">Insurance</span> Partner
      </h2>
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        <div className="flex-1 bg-white border rounded-lg shadow-sm">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-3 px-4 py-3 ${idx === 0 ? 'bg-blue-50 border-l-4 border-blue-500' : ''
                }`}
            >
              <Image src={cat.icon} alt={cat.name} width={30} height={30} />
              <span className="text-sm font-medium">{cat.name}</span>
            </div>
          ))}
        </div>
        <div className="flex-[2] grid grid-cols-2 sm:grid-cols-3 gap-4 bg-white p-4 border rounded-lg shadow-sm">
          {partners.flat().map((logo, i) => (
            <div
              key={i}
              className="bg-gray-50 flex items-center justify-center h-16 rounded-lg p-2"
            >
              <Image src={logo} alt="partner logo" width={100} height={40} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
