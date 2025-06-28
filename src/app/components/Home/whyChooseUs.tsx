'use client';
import Image from 'next/image';

const features = [
  {
    title: 'Over 9 Million',
    description: 'customers trust us & have bought their insurance on Policybazaar',
    icon: '/11.png',
    bg: 'bg-blue-50',
  },
  {
    title: '50+ Insurers',
    description: 'partnered with us so that you can compare easily & transparently',
    icon: '/12.png',
    bg: 'bg-blue-50',
  },
  {
    title: 'Great Price',
    description: 'for all kinds of insurance plans available online for all kinds of insurance plans available online',
    icon: '/13.png',
    bg: 'bg-red-50',
  },
  {
    title: 'Claims',
    description: 'support built in with every policy for help, when you need it the most',
    icon: '/14.png',
    bg: 'bg-orange-50',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#f9f9fc] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Why is <span className="text-orange-500">Demo</span> India’s go-to for insurance?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto text-sm md:text-base mb-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industries standard dummy text ever since the 1500
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition duration-300"
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.bg}`}>
                <Image src={item.icon} alt={item.title} width={50} height={32} />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-md md:text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
