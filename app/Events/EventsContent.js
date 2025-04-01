import React from 'react'
import Image from 'next/image'

// importe les images
import propEvents from "../../public/assets/img/prop11.jpeg"

// les evenements 
const events = [
    {
        title: "Célébration de Noël",
        date: "24 Décembre 2023, 20h00 - 22h00",
        location: "Église de la Paix, 123 Rue de la Joie, Paris",
        description: "Célébrez la naissance de Jésus avec des chants, des prières et une pièce de théâtre.",
        targetAudience: "Ouvert à tous",
        cost: "Gratuit",
        registration: "Aucune inscription requise",
        contact: "Pasteur Jean Dupont, 01 23 45 67 89",
        imageUrl: "/images/noel.jpg",
        backgroundColor: "bg-red-200",
    },
    {
        title: "Camp d'Été pour les Jeunes",
        date: "10-14 Juillet 2024",
        location: "Centre de Plein Air, Route de la Forêt, Lyon",
        description: "Une semaine d'activités en plein air pour les jeunes de 12 à 18 ans.",
        targetAudience: "Jeunes de 12 à 18 ans",
        cost: "150€ par participant",
        registration: "Inscription obligatoire avant le 1er Juin",
        contact: "Responsable Jeunesse, 02 34 56 78 90",
        imageUrl: "/images/camp.jpg",
        backgroundColor: "bg-green-200",
    },
    {
        title: "Étude Biblique Hebdomadaire",
        date: "Chaque Mercredi, 19h00 - 20h30",
        location: "Salle de Réunion, Église de la Paix, Paris",
        description: "Approfondissez votre compréhension de la Bible avec des discussions et des partages.",
        targetAudience: "Ouvert à tous",
        cost: "Gratuit",
        registration: "Pas d'inscription nécessaire",
        contact: "Pasteur Marie Martin, 03 45 67 89 01",
        imageUrl: "/images/bible.jpg",
        backgroundColor: "bg-yellow-200",
    },
    {
        title: "Repas Communautaire",
        date: "1er Dimanche de chaque mois, 12h30",
        location: "Salle Paroissiale, Église de la Paix, Paris",
        description: "Partagez un repas convivial avec les membres de la communauté.",
        targetAudience: "Ouvert à tous",
        cost: "Participation libre",
        registration: "Inscription souhaitée pour une meilleure organisation",
        contact: "Comité des Fêtes, 04 56 78 90 12",
        imageUrl: "/images/repas.jpg",
        backgroundColor: "bg-blue-200",
    },
    {
        title: "Conférence sur la Famille",
        date: "15 Mars 2024, 18h00 - 20h00",
        location: "Auditorium de l'Église, 456 Avenue de la Paix, Paris",
        description: "Conférence animée par un expert en relations familiales.",
        targetAudience: "Parents et futurs parents",
        cost: "10€ par personne",
        registration: "Inscription obligatoire",
        contact: "Service Famille, 05 67 89 01 23",
        imageUrl: "/images/conference.jpg",
        backgroundColor: "bg-purple-200",
    },
    {
        title: "Concert de Gospel",
        date: "20 Avril 2024, 20h00",
        location: "Église de la Paix, 123 Rue de la Joie, Paris",
        description: "Venez écouter notre chorale gospel et passer une soirée inspirante.",
        targetAudience: "Ouvert à tous",
        cost: "Entrée libre, dons acceptés",
        registration: "Pas d'inscription nécessaire",
        contact: "Chorale de l'Église, 06 78 90 12 34",
        imageUrl: "/images/gospel.jpg",
        backgroundColor: "bg-pink-200",
    },
    {
        title: "Retraite Spirituelle",
        date: "5-7 Mai 2024",
        location: "Maison de Retraite, Chemin de la Sérénité, Bordeaux",
        description: "Trois jours de retraite pour se ressourcer spirituellement.",
        targetAudience: "Adultes",
        cost: "200€ tout compris",
        registration: "Inscription obligatoire avant le 15 Avril",
        contact: "Pasteur Paul Durand, 07 89 01 23 45",
        imageUrl: "/images/retraite.jpg",
        backgroundColor: "bg-indigo-200",
    },
    {
        title: "Atelier de Parentalité",
        date: "10 Juin 2024, 14h00 - 16h00",
        location: "Salle de Réunion, Église de la Paix, Paris",
        description: "Apprenez des astuces et échangez avec d'autres parents.",
        targetAudience: "Parents",
        cost: "Gratuit",
        registration: "Inscription souhaitée",
        contact: "Service Famille, 08 90 12 34 56",
        imageUrl: "/images/parentalite.jpg",
        backgroundColor: "bg-teal-200",
    },
    {
        title: "Célébration de Pâques",
        date: "31 Mars 2024, 10h00 - 12h00",
        location: "Église de la Paix, 123 Rue de la Joie, Paris",
        description: "Célébrez la résurrection de Jésus avec une messe spéciale et des activités pour les enfants.",
        targetAudience: "Ouvert à tous",
        cost: "Gratuit",
        registration: "Pas d'inscription nécessaire",
        contact: "Pasteur Jean Dupont, 01 23 45 67 89",
        imageUrl: "/images/paques.jpg",
        backgroundColor: "bg-gray-200",
    },
];





const EventsContent = () => {
    return (
        <>
            <div className="relative h-[500px] overflow-hidden">
                <Image src={propEvents} alt="Hero Background" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 text-gray-900 flex flex-col justify-center text-left p-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Découvrez nos événements à venir et rejoignez-nous !</h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        N'hésitez pas à nous contacter pour toute question, demande de devis ou information supplémentaire. Notre équipe est à votre disposition pour vous accompagner dans la réalisation de vos projets de construction en RDC.
                    </p>
                </div>
            </div>

            {/* the events */}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {events.map((event, index) => (
                    <div
                        key={index}
                        className={`${event.backgroundColor} p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform border-l-8 border-blue-500`}
                    >
                        <img src={event.imageUrl} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4" />
                        <h2 className="text-2xl font-semibold text-gray-800">{event.title}</h2>
                        <p className="mt-2 text-gray-600">{event.date}</p>
                        <p className="text-gray-600">{event.location}</p>
                        <p className="mt-4 text-gray-600">{event.description}</p>
                        <p className="text-gray-600">Public : {event.targetAudience}</p>
                        <p className="text-gray-600">Coût : {event.cost}</p>
                        <p className="text-gray-600">Inscription : {event.registration}</p>
                        <p className="text-gray-600">Contact : {event.contact}</p>
                    </div>
                ))}
            </div>



        </>
    )
}

export default EventsContent
