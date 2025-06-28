"use client"
import React from 'react';
import Image from 'next/image';
import Slider from 'react-slick';

interface Testimonial {
    image: string;
    name: string;
    position: string;
    message: string;
}

const testimonials: Testimonial[] = [
    {
        image: 'https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg',
        name: 'Mach Nelson',
        position: 'CEO',
        message:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    },
    {
        image: 'https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg',
        name: 'David Doe',
        position: 'CEO',
        message:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    },
    {
        image: 'https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg',
        name: 'John Nick',
        position: 'CEO',
        message:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    },
    {
        image: 'https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg',
        name: 'Alice Green',
        position: 'CEO',
        message:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    },
    {
        image: 'https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg',
        name: 'Chris Ray',
        position: 'CEO',
        message:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    },
    {
        image: 'https://photoheads.co.uk/wp-content/uploads/2020/05/headshot-with-client-testimonial.jpg',
        name: 'Emma Watson',
        position: 'CEO',
        message:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old',
    },
];

export default function TestimonialSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-12 bg-white text-center">
  <h2 className="text-2xl sm:text-3xl font-bold mb-8">
    What Our Customers <span className="text-orange-500">Are Saying?</span>
  </h2>

  <Slider {...settings}>
    {testimonials.map((item, index) => (
      <div key={index} className="px-2 sm:px-4">
        <div className="bg-white p-4 sm:p-6 h-full flex flex-col justify-between border-gray-100 rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
          <p className="text-left text-sm text-gray-600 mb-4 sm:mb-6">
            {item.message}
          </p>
          <div className="flex items-center mt-auto">
            <Image
              src={item.image}
              alt={item.name}
              width={50}
              height={50}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4"
            />
            <div className="text-left">
              <h4 className="text-blue-700 font-semibold text-sm sm:text-base">
                {item.name}
              </h4>
              <p className="text-black text-xs sm:text-sm font-bold">{item.position}</p>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Slider>
</div>

    );
};
