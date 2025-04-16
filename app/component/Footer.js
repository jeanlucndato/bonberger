"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

// Importing the image
import prop from "../../public/assets/img/prop8.jpg";

const Footer = () => {
    const [email, setEmail] = useState('');

    // Animation variants for the footer
    const footerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
    };

    const newsletterVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.4 } },
    };

    return (
        <footer className="bg-red-100 py-12">
            <div className="container mx-auto px-4">
                {/* Partners Section */}
                <section className="mb-12">
                    <motion.h2
                        variants={footerVariants}
                        initial="hidden"
                        animate="visible"
                        className="text-2xl font-semibold mb-6 text-center text-gray-800 sm:text-3xl"
                    >
                        Nos Partenaires
                    </motion.h2>
                    <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-12">
                        {[1, 2, 3, 4, 5, 6].map((item) => (
                            <motion.div
                                key={item}
                                variants={footerVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ duration: 0.5, delay: 0.2 + item * 0.05 }}
                                className="flex items-center group"
                            >
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                                    <Image
                                        src={prop}
                                        alt={`Logo ${item}`}
                                        fill
                                        className="object-cover rounded-full border-2 border-gray-300 p-1 group-hover:border-gray-800 transition-colors duration-300"
                                    />
                                </div>
                                {item <= 3 && (
                                    <span className="ml-3 text-gray-600 group-hover:text-gray-800 transition-colors duration-300 font-medium sm:text-lg">
                                        Lipsum {item}
                                    </span>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Footer Links Section */}
                <section className="bg-white py-12">
                    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4">
                        {/* Charity Section */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 sm:text-xl">Charity</h3>
                            <p className="text-gray-600 leading-relaxed">
                                The power of giving: Support a cause and make a difference through charity. Join us in making the world a better place.
                            </p>
                        </div>

                        {/* About Section */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 sm:text-xl">À Propos</h3>
                            <ul className="space-y-3">
                                {['Notre Histoire', 'Nos Valeurs', 'Nos Programmes', 'Partenaires', 'Équipe'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Donation Methods Section */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 sm:text-xl">Moyens de Don</h3>
                            <ul className="space-y-3">
                                {['Don en Ligne', 'Collecte de Fonds', 'Bénévolat', 'Dons d\'Entreprise', 'Legs et Testaments'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Section */}
                        <div className="text-center sm:text-left">
                            <h3 className="text-lg font-semibold mb-4 text-gray-800 sm:text-xl">Contact</h3>
                            <p className="text-gray-600">1234 Rue de la Charité</p>
                            <p className="text-gray-600">Goma, Nord-Kivu</p>
                            <p className="text-gray-600">+243 970 000 000</p>
                            <p className="text-gray-600">contact@charite.org</p>
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <motion.div
                    variants={newsletterVariants}
                    initial="hidden"
                    animate="visible"
                    className="bg-gray-50 py-10 mt-12 rounded-md shadow-md"
                >
                    <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 px-4">
                        <div className="text-center lg:text-left">
                            <h3 className="text-xl font-semibold mb-3 text-gray-800">Newsletter</h3>
                            <p className="text-gray-600 leading-relaxed">Abonnez-vous à notre newsletter pour les dernières nouvelles et mises à jour.</p>
                        </div>
                        <div className="flex w-full lg:w-96">
                            <input
                                type="email"
                                placeholder="Entrez votre adresse email"
                                className="w-full px-4 py-3 rounded-l-md border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 text-gray-600"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button className="bg-gray-800 hover:bg-black text-white py-3 px-6 rounded-r-md transition-colors duration-300 font-semibold">
                                S'abonner
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Footer Bottom Section */}
                <div className="bg-gray-800 py-6 mt-12">
                    <motion.div
                        variants={footerVariants}
                        initial="hidden"
                        animate="visible"
                        className="container mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center text-center sm:text-left gap-4 px-4"
                    >
                        <p className="text-sm text-white">© {new Date().getFullYear()} Votre Organisation Caritative. Tous droits réservés.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                                <FaTwitter size={24} />
                            </a>
                            <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
                                <FaInstagram size={24} />
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;







