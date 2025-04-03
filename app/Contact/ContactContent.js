import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// importe les images
import propContact from "../../public/assets/img/prop11.jpeg"

const ContactContent = () => {
    return (
        <>
            <div className="relative h-[500px] overflow-hidden">
                <Image src={propContact} alt="Hero Background" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 text-red-500 flex flex-col justify-center text-left p-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Nous joindre</h1>
                    <p className="text-lg  sm:text-xl md:text-2xl mb-8">
                        N'hésitez pas à nous contacter pour toute question, demande de devis ou information supplémentaire. Notre équipe est à votre disposition pour vous accompagner dans la réalisation de vos projets de construction en RDC.
                    </p>
                </div>
            </div>

            {/*  */}

            <div className="container mx-auto px-4 py-8">
                {/* Section Principale (Titre et Paragraphe) */}
                <div className="text-center md:text-left mb-8">
                    <h1 className="text-4xl text-red-500 font-bold mb-4">Contact</h1>
                    <p className="text-lg text-gray-600">
                        Connect with us for more information about our Non-profit Organisation and how you can contribute to our worthy causes.
                    </p>
                </div>

                {/* Section des Informations de Contact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Colonne Téléphone */}
                    <div className="bg-red-100 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">PHONE</h3>
                        <p>Tel: (555) 123-2222</p>
                        <p>Fax: (555) 123-2225</p>
                    </div>

                    {/* Colonne Centre de Dons */}
                    <div className="bg-red-100 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">FAIR UN DON</h3>
                        <p>PO Box 1234 Demotown, MD12345-5026</p>
                    </div>

                    {/* Colonne Besoin d'Assistance */}
                    <div className="bg-red-100 rounded-lg p-6">
                        <h3 className="text-xl font-semibold mb-2">BESOINS D'UNE ASSISTANCE?</h3>
                        <p>Check out our Help Center.</p>
                    </div>
                </div>
            </div>

            <div className="container bg-gray-100 mx-auto px-4 py-8">
                <div className="grid m-10  grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Colonne de Gauche (Texte et Informations) */}
                    <div className="md:col-span-1">
                        <h2 className="text-3xl text-red-500 font-bold mb-4">Comment Nous joindre?</h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Our Non-profit Organisation is dedicated to helping those in need. Contact us to see how we can help you or someone you know.
                        </p>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-2">Himbi</h3>
                            <p>2715 Demo St. San Jose, South Dakota 83475</p>
                            <p>(205) 555-0100</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-2">Illinois Office</h3>
                            <p>2972 Example Rd. Santa Ana, Illinois 85486</p>
                            <p>(603) 555-0123</p>
                        </div>

                        <div className="mt-8  ">
                            <h3 className="text-xl font-semibold mb-2">Follow us on</h3>
                            <div className="flex space-x-4">
                                {/* Icônes de Réseaux Sociaux (à remplacer par vos icônes) */}
                                <a href="#" className="text-red-500 hover:text-black">Facebook</a>
                                <a href="#" className="text-red-500 hover:text-black">Twitter</a>
                                <a href="#" className="text-red-500 hover:text-black">Instagram</a>
                                <a href="#" className="text-red-500 hover:text-black">YouTube</a>
                            </div>
                        </div>
                    </div>

                    {/* Colonne de Droite (Formulaire) */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullName">Full Name *</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullName" type="text" placeholder="John" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email *</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="example@mail.com" />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">Subject *</label>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="subject" type="text" placeholder="Subject" />
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Enter your message"></textarea>
                        </div>

                        <button animate={{ scale: 1.5 }}
                            className="bg-red-500 hover:bg-black text-white font-bold py-2 px-4 rounded-full">
                            Send Message
                        </button>
                    </div>
                </div>
            </div>

            {/* la carte  */}
            <div className="container bg-red-200 mx-auto px-4 py-8">
                <div className="grid grid-cols-1 gap-8">
                    {/* Section de Texte */}
                    <div className="text-center text-black md:text-left">
                        <h2 className="text-3xl text-center font-bold mb-4">WHERE WE WORK</h2>
                        <p className="text-lg text-center text-gray-600 mb-6">
                            More than 70,000 staff in 120 countries, serving those in need. 99% of them are locals. All with your support.
                        </p>
                    </div>

                    {/* Section de la Carte */}
                    <div className="relative">
                        {/* Carte Google Maps */}
                        <div className="w-full rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.1318864951854!2d29.192259373960454!3d-1.6659463983185958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd08d2e4fd2d11%3A0xf9cb9f2687dcba79!2sEglise%20CEPR%2FBon-Berger!5e0!3m2!1sen!2scd!4v1743504804710!5m2!1sen!2scd"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>


                        {/* Informations de l'Endroit (Eglise CEPR/Bon-BergerP) */}
                        <div className="absolute top-4 left-4 bg-white rounded-lg p-4 shadow-md w-full md:w-1/3">
                            <h3 className="text-xl font-semibold mb-2">Eglise CEPR/Bon-Berger</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                007 mission Quartier Himbi, Avenue de la Révolution, Goma

                                Directions
                            </p>

                            {/* Ajouter un lien si nécessaire */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactContent;
