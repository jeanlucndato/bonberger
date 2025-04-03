import React from 'react'
import Image from 'next/image'

// importe les images
import propAbout from "../../public/assets/img/prop11.jpeg"
import prop1 from "../../public/assets/img/prop12.jpg"

const AboutContent = () => {
    return (
        <>
            {/* entete du about */}
            <div className="relative h-[500px] overflow-hidden">
                <Image src={propAbout} alt="Hero Background" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 text-red-500 flex flex-col justify-center text-left p-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Nous joindre</h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        N'hésitez pas à nous contacter pour toute question, demande de devis ou information supplémentaire. Notre équipe est à votre disposition pour vous accompagner dans la réalisation de vos projets de construction en RDC.
                    </p>
                </div>
            </div>

            {/*  */}
            <div className="container mx-auto mt-8 px-4 py-8">
                <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Colonne de Texte */}
                    <div className="md:col-span-1 border border-red-500 p-12 lg:col-span-1">
                        <h1 className="text-4xl text-red-500 text-center -underline-offset-1 font-bold mb-4">Introduction & Vision</h1>
                        <p className="mb-6">
                            Join Non-profit Organisation in our mission of making the world a better place. We strive to create positive change through various charitable initiatives and community outreach programs.
                        </p>
                        <div className="mb-6">
                            <h2 className="text-2xl font-semibold mb-2">Changing Lives</h2>
                            <p>Improving lives one step at a time with our non-profit organization.</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold mb-2">Building Futures</h2>
                            <p>Creating opportunities and a better future with our non-profit organization.</p>
                        </div>
                    </div>

                    {/* Colonne d'Images */}
                    <div className="md:col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="aspect-w-16 aspect-h-9">
                            <Image src={prop1} alt="Image 1" className="object-cover rounded-lg" />
                        </div>
                        <div className="aspect-w-16 aspect-h-9">
                            <Image src={prop1} alt="Image 2" className="object-cover rounded-lg" />
                        </div>
                        <div className="aspect-w-16 aspect-h-9 md:col-span-2">
                            <Image src={prop1} alt="Image 3" className="object-cover rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 bg-red-100">
                <div className="bg-gray-100 rounded-lg p-6 mb-8">
                    <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Colonne 1 */}
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-semibold mb-2">01. Prove every project</h2>
                            <p className="mb-4">
                                Our Non-profit Organisation delivers transparent and accountable results for every project we undertake.
                            </p>
                            <a href="#" className="text-blue-500 hover:underline">See Proof →</a>
                        </div>

                        {/* Colonne 2 */}
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-semibold mb-2">02. Open book</h2>
                            <p className="mb-4">
                                We firmly believe in transparency and strive to maintain an open book approach with all stakeholders.
                            </p>
                            <a href="#" className="text-blue-500 hover:underline">View Financials →</a>
                        </div>

                        {/* Colonne 3 */}
                        <div className="text-center md:text-left">
                            <h2 className="text-2xl font-semibold mb-2">03. Local partnerships</h2>
                            <p className="mb-4">
                                Building strong relationships with the community is vital and we work closely with local partners.
                            </p>
                            <a href="#" className="text-blue-500 hover:underline">Learn More →</a>
                        </div>
                    </div>
                </div>

                {/* Section d'Image (si vous avez besoin de la partie image) */}
                <div className="relative h-[400px] overflow-hidden rounded-3xl">
                    <Image src={propAbout} alt="Hero Background" layout="fill" objectFit="cover" />
                    <div className="absolute inset-0 text-red-500 flex flex-col justify-center text-left p-8">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Nous joindre</h1>
                        <p className="text-lg text-white sm:text-xl md:text-2xl mb-8">
                            N'hésitez pas à nous contacter pour toute question, demande de devis ou information supplémentaire. Notre équipe est à votre disposition pour vous accompagner dans la réalisation de vos projets de construction en RDC.
                        </p>
                    </div>
                </div>

                {/* ... (ajoutez ici le code pour la section d'image si nécessaire) ... */}
            </div>

            {/* a container for donation */}

            <div className="container mx-auto px-4 py-8">
                <div className="text-center ">
                    <p className="uppercase text-red-500 font-semibold mb-2">Make a difference today</p>
                    <h2 className="text-3xl font-bold mb-4">Your contribution matters. Support our cause by making a donation.</h2>
                    <p className="mb-6">
                        Every dollar counts and helps us bring hope, joy, and essential resources to those in need. Together, we can create a better tomorrow.
                    </p>
                    <button className="bg-red-500 hover:bg-black text-white font-bold py-3 px-6 rounded-full">
                        Donate Today
                    </button>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Colonne de l'Image */}
                    <div className="md:col-span-1">
                        <Image src={prop1} alt="Donation" className="w-full rounded-lg" />
                    </div>

                    {/* Colonne du Texte */}
                    <div className="md:col-span-1">
                        <h2 className="text-3xl font-bold mb-4">Our Vision & Mission</h2>
                        <p className="mb-6">
                            Non-profit Organisation's vision is to create a world where all people have equal access to education and healthcare. Our mission the necessary resources and support to underprivileged communities and improve their quality of life.
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Changing lives improving lives one step at a time with our non-profit organization.</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Building futures creating opportunities and a better future with our non-profit organization.</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Movement for change creating impact, promoting change through non-profit work.</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                <span>Lasting impact our charity strives for long-term impact in communities we serve.</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AboutContent
