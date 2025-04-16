"use client"
import React from 'react';
import Image from 'next/image';
import Articles from "./indexArticle";
import { motion, stagger } from "framer-motion"
import Link from 'next/link';

import indeximg from '../../public/assets/img/prop1.jpg';
import handsImg from '../../public/assets/img/prop12.jpeg';
import peopleHelpingImg from '../../public/assets/img/prop8.jpg';
import donationImg from '../../public/assets/img/prop8.jpg';
import givingImg from '../../public/assets/img/prop9.jpg';
import volunteerImg from '../../public/assets/img/prop8.jpg';

const Index = () => {
    // Animation variants for the footer
    const section = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            }
        }
    };

    const div = {
        hidden: { opacity: 0 }, show: { opacity: 1 }
    }




    return (
        <>
            <motion.section variants={section} initial="hidden" animate="show" className=''>

                <motion.div variants={section} className="relative h-[650px] rounde-xl overflow-hidden">
                    <Image src={indeximg} alt="Hero Background" layout="fill" objectFit="cover" />
                    <motion.div initial={{ opacity: 0, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 2, ease: "easeInOut", delay: 0.4 }} className="absolute inset-0 text-white flex flex-col justify-center text-left p-8">
                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Nous joindre</h1>

                        <p className="text-lg sm:text-xl md:text-2xl mb-8">
                            N'hésitez pas à nous contacter pour toute question, demande de devis ou information supplémentaire. Notre équipe est à votre disposition pour vous accompagner dans la réalisation de vos projets de construction en RDC.
                        </p>
                    </motion.div>
                </motion.div>

                <main className="">
                    <section className="container mx-auto py-12 px-4">
                        <motion.div variants={section} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: "easeOut", delay: 0.2 }} className="md:pr-8">
                                <h2 className="text-3xl md:text-4xl font-bold mb-4">Vous êtes à la recherche d'un lieu d'accueil, de communauté et de foi ? L'Église Bonberger vous ouvre ses portes.</h2>
                                <p className="text-lg mb-6">

                                    Nous sommes une congrégation <b> Pentecotiste</b> engagée à partager l'amour de
                                    Dieu et à construire ensemble un avenir rempli d'espérance.
                                </p>
                                <p className="text-lg mb-6">
                                    A transformational journey towards bringing hope and compassion to the world.
                                </p >
                                <motion.button whileTap={{ scale: 1.2 }} whileHover={{ scale: 1.1, background: "#d1d5db", color: 'black' }} transition={{ bounceDamping: 10, bounceStiffness: 600 }}
                                    className="bg-red-600 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                                    <Link href='/Services'>
                                        Decouvrir Nos Services
                                    </Link>
                                </motion.button>
                            </motion.div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="relative h-48 sm:h-64 overflow-hidden">
                                    <Image src={handsImg} alt="Hands" layout="fill" objectFit="cover" />
                                </div>
                                <div className="relative h-48 sm:h-64 overflow-hidden">
                                    <Image src={peopleHelpingImg} alt="People Helping" layout="fill" objectFit="cover" />
                                </div>
                                <div className="relative h-48 sm:h-64 overflow-hidden">
                                    <Image src={donationImg} alt="Donation" layout="fill" objectFit="cover" />
                                </div>
                                <div className="relative h-48 sm:h-64 overflow-hidden">
                                    <Image src={givingImg} alt="Giving" layout="fill" objectFit="cover" />
                                </div>
                            </div>
                        </motion.div>
                    </section>

                    <section className="bg-red-100 py-12">
                        <div className="container mx-auto px-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                                <motion.div variants={div}>
                                    <h2 className="text-2xl md:text-3xl font-bold mb-4">The impact we have made in our community</h2>
                                    <p className="text-lg text-gray-700">
                                        We have made a significant impact in our community through our non-profit organization. By providing services and support to those in need, we have created a positive change. Our efforts have helped to improve the lives of many and we are committed to continuing to make a difference.
                                    </p>
                                </motion.div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <h3 className="text-3xl md:text-4xl font-bold text-blue-500">20M+</h3>
                                        <p className="text-sm text-gray-600">People served worldwide</p>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-3xl md:text-4xl font-bold text-green-500">142,790</h3>
                                        <p className="text-sm text-gray-600">Projects funded</p>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-3xl md:text-4xl font-bold text-yellow-500">1.8M</h3>
                                        <p className="text-sm text-gray-600">People to take action</p>
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-3xl md:text-4xl font-bold text-red-500">5,246</h3>
                                        <p className="text-sm text-gray-600">Partner organizations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white p-8 mt-8 rounded-lg text-center">
                                <h2 className="text-2xl md:text-3xl font-bold mb-4">We can create a better tomorrow</h2>
                                <p className="text-lg text-gray-700 mb-6">
                                    Every dollar counts and helps us bring hope and essential resources to those in need.
                                </p>
                                <button className="bg-red-500 hover:bg-black text-white font-bold py-2 px-6 rounded-full">
                                    Faire un Don
                                </button>
                            </div>
                        </div>
                    </section>

                    <section className="container mx-auto py-12 px-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="relative h-64 md:h-96 overflow-hidden">
                                <Image src={volunteerImg} alt="Volunteers" layout="fill" objectFit="cover" />
                            </div>
                            <div>
                                <motion.h2 variants={div} animate="visible" initial="hidden" className="text-2xl md:text-3xl font-bold mb-4">Join our movement for change</motion.h2>
                                <motion.p variants={div} animate="visible" initial="hidden" className="text-lg text-gray-700 mb-6">
                                    Join our non-profit organisation and be a part of our movement for positive change. We empower communities, support vulnerable individuals and strive towards building an equitable society. Together, we can create a better world. Join us now!
                                </motion.p>
                                <p className="text-lg text-gray-700 mb-6">
                                    Become part of a transformative movement by supporting our non-profit organization. Together we can make lasting change.
                                </p>
                                <button className="bg-red-500 hover:bg-black text-white font-bold py-2 px-6 rounded-full">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </section>
                </main >

                <Articles />
            </motion.section >
        </>


    );
};

export default Index;