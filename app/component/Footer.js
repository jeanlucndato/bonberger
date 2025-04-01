"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

// les images
import prop from "../../public/assets/img/prop8.jpg";

const Footer = () => {
    const [email, setEmail] = useState('');

    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
    };

    const newsletterVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
    };

    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4"> {/* Ajout de px-4 pour la marge horizontale */}
                <section className="mb-8">
                    <motion.h2
                        variants={footerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl font-semibold mb-4 text-center"
                    >
                        Nous Partenairs
                    </motion.h2>
                    <div className="flex flex-wrap justify-center items-center">
                        <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
                            <Image src={prop} alt="Logo 1" width={50} height={50} />
                            <span className="ml-2">Lipsum</span>
                        </div>
                        <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
                            <Image src={prop} alt="Logo 2" width={50} height={50} />
                            <span className="ml-2">Lipsum</span>
                        </div>
                        <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
                            <Image src={prop} alt="Logo 3" width={50} height={50} />
                        </div>
                        <div className="flex items-center mb-4 sm:mb-0 sm:mr-4">
                            <Image src={prop} alt="Logo 4" width={50} height={50} />
                        </div>
                        <div className="flex items-center">
                            <Image src={prop} alt="Logo 5" width={50} height={50} />
                        </div>
                    </div>
                </section>

                <section className="bg-white py-8">
                    <div className="container mx-auto flex flex-wrap justify-center md:justify-between">
                        <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-4">Charity</h3>
                            <p className="text-gray-600">
                                The power of giving: Support a cause and make a difference through charity.
                            </p>
                        </div>
                        <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-4">About Us</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-blue-500">Our History</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-500">What We Believe</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-500">Our Programs</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-500">Partners</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-4">Ways To Give</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-600 hover:text-blue-500">Fundraise</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-500">Planned Giving</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-500">Brand Partnership</a></li>
                                <li><a href="#" className="text-gray-600 hover:text-blue-500">Legacy Giving</a></li>
                            </ul>
                        </div>
                        <div className="w-full md:w-1/4 text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
                            <p className="text-gray-600">1234 Thornridge Cir. Syracuse, Connecticut 56789</p>
                            <p className="text-gray-600">(406) 555-0121</p>
                            <p className="text-gray-600">mail@example.com</p>
                        </div>
                    </div>
                </section>

                <motion.div
                    variants={newsletterVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-gray-200 py-8"
                >
                    <div className="container mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between">
                        <div className="mb-4 sm:mb-0 text-center">
                            <h3 className="text-lg font-semibold mb-2">Newsletter</h3>
                            <p className="text-gray-600">Subscribe to our newsletter for updates.</p>
                        </div>
                        <div className="flex w-full sm:w-auto mt-4 sm:mt-0">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full sm:w-auto px-4 py-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-r-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </motion.div>

                <div className="bg-gray-300 py-4">
                    <motion.div
                        variants={footerVariants}
                        initial="hidden"
                        animate="visible"
                        className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left"
                    >
                        <p className="text-sm text-gray-600 mb-2 sm:mb-0">© 2025 Non-Profit Organization. All rights reserved.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-600 hover:text-blue-500">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-500">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-500">
                                <FaInstagram size={20} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;