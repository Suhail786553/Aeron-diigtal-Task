'use client';
import { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const faqs = [
    {
        question: 'Which cancer types is covered?',
        answer:
            'Most comprehensive cancer insurance policies cover common types such as breast cancer, lung cancer, prostate cancer, colon cancer, cervical cancer, and ovarian cancer. The exact types covered may vary depending on the insurer and plan.',
    },
    {
        question: 'Are there any age limit?',
        answer:
            'Yes, there is an age limit. The age span is between 18–50 for this product. This age group is important for some critical illnesses. Insurers can renew their policies every other year till 51 years old.',
    },
    {
        question: 'How %25 cash back payment works?',
        answer:
            'If no claim is made during the policy period, you are eligible to receive 25% of the total premium paid as cashback. This benefit encourages policyholders to maintain good health and avoid unnecessary claims.',
    },
    {
        question: 'How I use 3 year freemium option?',
        answer:
            'The 3-year freemium option allows you to lock in coverage for three years by paying upfront. During this period, you will not be charged any additional premium, and the coverage will remain active with no annual renewal needed.',
    },
    {
        question: 'What is the process to get lump sum payment when risk is realized?',
        answer:
            'In case of diagnosis of a covered illness or event, you need to submit your claim form along with medical documents and identification. Once the claim is verified and approved, a lump sum payment is credited to your registered account.',
    },
];

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>();

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-32"
            data-aos="fade-up"
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
                Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>

            <div className="space-y-4 max-w-4xl mx-auto">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ${activeIndex === index ? 'p-4' : 'py-3 px-4'
                            }`}
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <button
                            className="w-full flex justify-between items-center text-left"
                            onClick={() => toggleFAQ(index)}
                        >
                            <span className="font-semibold text-sm sm:text-base">
                                {faq.question}
                            </span>
                            {activeIndex === index ? (
                                <IoIosArrowUp className="text-xl" />
                            ) : (
                                <IoIosArrowDown className="text-xl" />
                            )}
                        </button>

                        {activeIndex === index && faq.answer && (
                            <div
                                className="mt-3 text-sm text-gray-700"
                                data-aos="fade-down"
                                data-aos-delay="150"
                            >
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};
