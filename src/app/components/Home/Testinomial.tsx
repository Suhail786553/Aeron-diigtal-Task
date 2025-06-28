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
        <div className="w-full px-24 py-12 bg-white text-center">
            <h2 className="text-3xl font-bold mb-8">
                What Our Customers <span className="text-orange-500">Are Saying?</span>
            </h2>
            <Slider {...settings}>
                {testimonials.map((item, index) => (
                    <div key={index} className="px-4">
                        <div className="bg-white p-6 h-full flex flex-col justify-between md:border-b-0 md:border-r-2 md:last:border-r-0 border-gray-100  rounded-xl shadow-md transition-transform duration-300 hover:scale-105">
                            <p className="text-left text-sm text-gray-600 mb-6">{item.message}</p>
                            <div className="flex items-center mt-auto">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                    className="w-16 h-16 rounded-full object-cover mr-4"
                                />
                                <div className="text-left">
                                    <h4 className="text-blue-700 font-semibold">{item.name}</h4>
                                    <p className="text-black text-sm font-bold">{item.position}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
