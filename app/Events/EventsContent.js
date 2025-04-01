import React from 'react'
import Image from 'next/image'

// importe les images
import propEvents from "../../public/assets/img/prop11.jpeg"

const EventsContent = () => {
    return (
        <>
            <div className="relative h-[500px] overflow-hidden">
                <Image src={propEvents} alt="Hero Background" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 text-gray-900 flex flex-col justify-center text-left p-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Nous joindre</h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        N'hésitez pas à nous contacter pour toute question, demande de devis ou information supplémentaire. Notre équipe est à votre disposition pour vous accompagner dans la réalisation de vos projets de construction en RDC.
                    </p>
                </div>
            </div>

        </>
    )
}

export default EventsContent
