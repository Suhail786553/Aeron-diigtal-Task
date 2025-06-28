import React from 'react';
import Image from 'next/image';
import Button from '../ui/Button';

export default function ClaimBanner() {
  return (
    <section className="relative bg-[#1573bd] text-white py-12 px-6 md:px-24 overflow-hidden">
      <div className="absolute left-60 bottom-0 w-30 md:w-60 z-0 opacity-60">
        <Image
          src="/3.png"
          alt="Scooter"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div className="absolute right-64 bottom-0 w-30 md:w-44 z-0 opacity-60 lg:mb-4">
        <Image
          src="/4.png"
          alt="Bike"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 border-2 border-white rounded-md flex items-center justify-center text-2xl">
            📄
          </div>
          <div>
            <p className="text-sm mb-1">It’s Time to Claim Now</p>
            <h2 className="text-3xl md:text-4xl font-semibold">
              From Quote To Coverage
            </h2>
          </div>
        </div>

        <Button variant='secondary'>
          Track Your Claim
        </Button>
      </div>
    </section>
  );
};
