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
        <footer className="bg-gray-200 py-8">
            <div className="container mx-auto px-4">
                <section className="mb-8">
                    <motion.h2
                        variants={footerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl font-semibold mb-4 text-center text-red-600"
                    >
                        Nos Partenaires
                    </motion.h2>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {[1, 2, 3, 4, 5].map((item) => (
                            <div key={item} className="flex items-center group">
                                <Image
                                    src={prop}
                                    alt={`Logo ${item}`}
                                    width={70}
                                    height={70}
                                    className="rounded-full border-2  p-1 group-hover:border-black transition-colors"
                                />
                                {item <= 2 && (
                                    <span className="ml-2 text-red-600 group-hover:text-black transition-colors">
                                        Lipsum
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="bg-white py-8">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-4 text-red-600">Charity</h3>
                            <p className="text-gray-600">
                                The power of giving: Support a cause and make a difference through charity.
                            </p>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-4 text-red-600">À Propos</h3>
                            <ul className="space-y-2">
                                {['Notre Histoire', 'Nos Valeurs', 'Nos Programmes', 'Partenaires'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-red-600 hover:text-black transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-4 text-red-600">Moyens de Don</h3>
                            <ul className="space-y-2">
                                {['Collecte', 'Don Planifié', 'Partenariat', 'Legs'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-red-600 hover:text-black transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="text-lg font-semibold mb-4 text-red-600">Contact</h3>
                            <p className="text-gray-600">1234 Rue Example</p>
                            <p className="text-gray-600">Paris, France 75000</p>
                            <p className="text-gray-600">+33 6 12 34 56 78</p>
                            <p className="text-gray-600">contact@charity.fr</p>
                        </div>
                    </div>
                </section>

                <motion.div
                    variants={newsletterVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-red-50 py-8 mt-8"
                >
                    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-4 px-4">
                        <div className="text-center lg:text-left">
                            <h3 className="text-lg font-semibold mb-2 text-red-600">Newsletter</h3>
                            <p className="text-gray-600">Abonnez-vous pour recevoir nos actualités.</p>
                        </div>
                        <div className="flex w-full lg:w-96">
                            <input
                                type="email"
                                placeholder="Entrez votre email"
                                className="w-full px-4 py-2 rounded-l-md border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="bg-red-900 hover:bg-black text-white py-2 px-6 rounded-r-md transition-colors">
                                S'abonner
                            </button>
                        </div>
                    </div>
                </motion.div>

                <div className="bg-gray-800 py-4 mt-8">
                    <motion.div
                        variants={footerVariants}
                        initial="hidden"
                        animate="visible"
                        className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left gap-4 px-4"
                    >
                        <p className="text-sm text-white">© 2024 Charity. Tous droits réservés.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-red-600 hover:text-black transition-colors">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="text-red-600 hover:text-black transition-colors">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="text-red-600 hover:text-black transition-colors">
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