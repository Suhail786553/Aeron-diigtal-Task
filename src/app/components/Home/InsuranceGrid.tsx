'use client';
import Image from 'next/image';
import Link from 'next/link';

const insuranceItems = [
  { title: 'Family Floater Health', image: '/1.png' },
  { title: 'Critical Illness Cover', image: '/2.png' },
  { title: 'Personal Accident Policy', image: '/3.png' },
  { title: 'Car Insurance', image: '/4.png' },
  { title: '2 Wheeler Insurance', image: '/5.png' },
  { title: 'Pay As you Drive', image: '/6.png' },
  { title: 'Third Party Insurance', image: '/7.png' },
  { title: 'Commercial Vehicle Insurance', image: '/8.png' },
  { title: 'Home Insurance', image: '/9.png' },
  { title: 'Home Loan', image: '/10.png' },
];

export default function InsuranceGrid() {
  return (
    <section className="relative bg-white">
      <div className="absolute bottom-0 w-full z-0 overflow-hidden">
        <svg viewBox="0 0 1440 200" className="w-full h-[200px]">
          <path
            fill="#E5F1FB"
            d="M0,64L60,90.7C120,117,240,171,360,160C480,149,600,75,720,74.7C840,75,960,149,1080,186.7C1200,224,1320,224,1380,224L1440,224V0H1380C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0H0Z"
          ></path>
        </svg>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Click to buy an <span className="text-orange-500">Insurance</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {insuranceItems.map((item, index) => (
            <div
              key={index}
             className={`group bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-between border border-transparent transition-all duration-300 hover:shadow-lg hover:border-orange-400`}
            >
              <div className="mb-4 p-2 rounded-full border border-transparent group-hover:border-orange-400 transition-all duration-300">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={80}
                  height={80}
                />
              </div>
              <p className="text-center text-sm font-semibold mb-4">
                {item.title}
              </p>
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                  className="text-gray-800"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="#"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold"
          >
            View ALL
          </Link>
        </div>
      </div>
    </section>
  );
}
