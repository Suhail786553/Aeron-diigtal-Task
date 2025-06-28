import React from "react";
import Image from "next/image";

const steps = [
    {
        title: "Fill Your Details",
        image: "/20.png", 
        description:
            "Fill in your details and get insurance policy premium quotes from top-rated insurers instantly.",
    },
    {
        title: "Select a Plan",
        image: "/21.png", 
        description:
            "From numerous available quotes, choose the one that best suits your requirements and budget.",
    },
    {
        title: "Make Payment and sit back",
        image: "/22.png", 
        description:
            "Pay online and get your policy right away in your inbox.",
    },
];

export default function HowItWorks() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                    How We <span className="text-orange-500">Works?</span>
                </h2>

                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <div key={index} className="text-center">
                            <div className="flex justify-center mb-4">
                                <Image
                                    src={step.image}
                                    width={360}
                                    height={200}
                                    alt={step.title}
                                    className="h-28 object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 text-sm max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
