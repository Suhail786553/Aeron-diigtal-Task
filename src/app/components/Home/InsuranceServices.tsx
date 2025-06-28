import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Family Insurance",
    image: "/17.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    title: "Travel Insurance",
    image: "/183.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
  {
    title: "Home Insurance",
    image: "/19.png",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
  },
];

export default function InsuranceServices() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          We’re Giving all the{" "}
          <span className="text-orange-500 font-bold">Insurance</span> Services to you
        </h2>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center">
                <Image
                  src={service.image}
                  width={500}
                  height={200}
                  alt={service.title}
                  className="h-48 object-contain mb-4"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-center text-black text-xl">
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
