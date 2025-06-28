'use client';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#2c3440] text-white px-6 md:px-12 lg:px-24 py-12 text-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
                <div>
                    <h3 className="text-2xl font-bold text-orange-500 mb-4">Demo</h3>
                    <p className="text-gray-300 leading-relaxed text-sm">
                        The company is India&apos;s largest insurance aggregator, and has expanded its operations to the United Arab Emirates.
                    </p>

                    <div className="flex gap-4 mt-6">
                        <a href="#" className="text-xl hover:text-blue-500">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="text-xl hover:text-blue-500">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-xl hover:text-blue-500">
                            <RiTwitterXLine />
                        </a>
                    </div>
                </div>
                <div>
                    <h4 className="text-gray-400 font-semibold mb-3">Health Insurance</h4>
                    <ul className="space-y-2">
                        <li><Link href="#">Family Floater Health Insurance</Link></li>
                        <li><Link href="#">Critical Illness cover</Link></li>
                        <li><Link href="#">Personal Accident Policy</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-400 font-semibold mb-3">Motor Insurance</h4>
                    <ul className="space-y-2">
                        <li><Link href="#">Car Insurance</Link></li>
                        <li><Link href="#">Two Wheeler Insurance</Link></li>
                        <li><Link href="#">Pay as you Drive</Link></li>
                        <li><Link href="#">Third Party Insurance</Link></li>
                        <li><Link href="#">Commercial Vehicle Insurance</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-gray-400 font-semibold mb-3">Other Insurance</h4>
                    <ul className="space-y-2">
                        <li><Link href="#">International Travel Insurance</Link></li>
                        <li><Link href="#">Home Insurance</Link></li>
                        <li><Link href="#">Home Loan Insurance</Link></li>
                        <li><Link href="#">Director & Officer Insurance</Link></li>
                        <li><Link href="#">Transit Insurance (Marine)</Link></li>
                        <li><Link href="#">CPM Insurance</Link></li>
                        <li><Link href="#">Contractor All Risk Insurance</Link></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
                <p>©2025 Demo, All Rights Reserved.</p>
                <Link href="#" className="text-white font-semibold hover:underline">Login as Agent</Link>
                <div className="flex gap-4">
                    <Link href="#" className="hover:underline">Policy Statements</Link>
                    <Link href="#" className="hover:underline">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
};
