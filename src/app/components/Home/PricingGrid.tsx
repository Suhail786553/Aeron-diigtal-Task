import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const pricingData = Array.from({ length: 8 }).map((_, index) => ({
    id: index + 1,
    image: "/24.png",
    text: "Lorem Ipsum is simply dummy text",
    price: "999 / Month",
}));

export default function PricingGrid() {
    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {pricingData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
                        >
                            <Image
                                src={item.image}
                                alt="icon"
                                width={120}
                                height={40}
                                className="h-12 w-12 object-contain mb-2"
                            />
                            <p className="text-sm font-medium text-gray-800 mb-3">{item.text}</p>
                            <Button
                                className="w-full px-4 py-1 rounded-md text-sm font-semibold"
                            >
                                {item.price}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
