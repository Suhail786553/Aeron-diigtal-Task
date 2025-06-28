'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Button from '../ui/Button';

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gray-50 py-20 px-4 sm:px-8 lg:px-24">
      <div className="max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
          Get in <span className="text-orange-500">Touch</span>
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Have questions, feedback, or want to work with us? Fill out the form below and we’ll get back to you shortly.
        </p>

        <form
          className="bg-white shadow-lg rounded-xl p-8 grid gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="Your subject here"
              className="border border-gray-300 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-700">Your Message</label>
            <textarea
              placeholder="Type your message here..."
              rows={5}
              className="border border-gray-300 rounded-md px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="300">
            <Button  type="submit" className="px-8 py-3 rounded-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};
