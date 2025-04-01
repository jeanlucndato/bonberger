import React from 'react'
import Image from 'next/image'

// importe les images
import propServices from "../../public/assets/img/prop11.jpeg"

const ServiceContent = () => {
    return (
        <>
            <div className="relative h-[500px] overflow-hidden">
                <Image src={propServices} alt="Hero Background" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 text-gray-900 flex flex-col justify-center text-left p-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Nous joindre</h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        N'hésitez pas à nous contacter pour toute question, demande de devis ou information supplémentaire. Notre équipe est à votre disposition pour vous accompagner dans la réalisation de vos projets de construction en RDC.
                    </p>
                </div>
            </div>

            {/* les services */}
            <div class="container mx-auto py-10">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div class="bg-blue-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform random-height-1 md:col-span-2">
                        <h2 class="text-2xl font-semibold text-white">Div 1</h2>
                        <p class="mt-4 text-white">Contenu de la div 1. Hauteur aléatoire.</p>
                    </div>
                    <div class="bg-green-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform random-height-2 md:col-span-1 md:row-span-2">
                        <h2 class="text-2xl font-semibold text-white">Div 2</h2>
                        <p class="mt-4 text-white">Contenu de la div 2. Hauteur et largeur aléatoires.</p>
                    </div>
                    <div class="bg-red-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform random-height-3 md:col-span-1">
                        <h2 class="text-2xl font-semibold text-white">Div 3</h2>
                        <p class="mt-4 text-white">Contenu de la div 3. Hauteur aléatoire.</p>
                    </div>
                </div>
            </div>

            {/* autres  */}
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Horaires des cultes */}
                    <div className="bg-blue-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform h-64">
                        <h2 className="text-2xl font-semibold text-white">Horaires des cultes</h2>
                        <p className="mt-4 text-white">Culte dominical : tous les dimanches à 10h30.</p>
                        <p className="text-white">Étude biblique : les mercredis à 19h00.</p>
                    </div>

                    {/* Sacrements et cérémonies */}
                    <div className="bg-green-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform h-64">
                        <h2 className="text-2xl font-semibold text-white">Sacrements et cérémonies</h2>
                        <p className="mt-4 text-white">Baptêmes : contactez le pasteur pour planifier une cérémonie.</p>
                        <p className="text-white">Mariages : informations et préparation disponibles sur demande.</p>
                    </div>

                    {/* Groupes de prière */}
                    <div className="bg-red-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform h-64">
                        <h2 className="text-2xl font-semibold text-white">Groupes de prière</h2>
                        <p className="mt-4 text-white">Groupe de prière pour les malades : tous les mardis à 15h00.</p>
                        <p className="text-white">Groupe de prière des mères : 1 vendredi par mois.</p>
                    </div>

                    {/* Musique et chorale */}
                    <div className="bg-yellow-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform h-64">
                        <h2 className="text-2xl font-semibold text-white">Musique et chorale</h2>
                        <p className="mt-4 text-white">La chorale de l'église répète tous les jeudis à 20h00.</p>
                        <p className="text-white">Concert de Noël annuel : le 24 décembre à 22h00.</p>
                    </div>

                    {/* Services communautaires et sociaux */}
                    <div className="bg-purple-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform h-64">
                        <h2 className="text-2xl font-semibold text-white">Services communautaires et sociaux</h2>
                        <p className="mt-4 text-white">Distribution de repas chauds : tous les samedis à 12h00.</p>
                        <p className="text-white">Épicerie solidaire : ouverte les mardis et jeudis de 14h00 à 17h00.</p>
                    </div>

                    {/* Activités pour les jeunes */}
                    <div className="bg-pink-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform h-64">
                        <h2 className="text-2xl font-semibold text-white">Activités pour les jeunes</h2>
                        <p className="mt-4 text-white">Aumônerie pour les adolescents : rencontres hebdomadaires le vendredi soir.</p>
                        <p className="text-white">Scoutisme : réunions tous les samedis après-midi.</p>
                    </div>

                    {/* Événements spéciaux */}
                    <div className="bg-indigo-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform h-64">
                        <h2 className="text-2xl font-semibold text-white">Événements spéciaux</h2>
                        <p className="mt-4 text-white">Fête de la paroisse : pique-nique et jeux le premier dimanche de juillet.</p>
                        <p className="text-white">Conférence sur la famille : animée par un expert en relations familiales.</p>
                    </div>

                    {/* Location de salles */}
                    <div className="bg-teal-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform h-64">
                        <h2 className="text-2xl font-semibold text-white">Location de salles</h2>
                        <p className="mt-4 text-white">La salle paroissiale est disponible à la location pour des événements familiaux ou associatifs.</p>
                    </div>

                    {/* Informations pratiques */}
                    <div className="bg-gray-500 p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform h-64">
                        <h2 className="text-2xl font-semibold text-white">Informations pratiques</h2>
                        <p className="mt-4 text-white">Adresse : 123, rue de l'Église, 75000 Paris.</p>
                        <p className="text-white">Téléphone : 01 23 45 67 89.</p>
                        <p className="text-white">Courriel : [adresse e-mail supprimée]</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServiceContent;
