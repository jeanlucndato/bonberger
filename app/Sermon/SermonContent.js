import React from 'react';
import Image from 'next/image';

// Importe l'image
import propSermon from "../../public/assets/img/prop11.jpeg";

const SermonsPage = () => {
    const sermons = [
        {
            title: "La Foi en Action",
            bibleVerse: "Jacques 2:17",
            date: "01/01/2023",
            speaker: "Pasteur Jean Dupont",
            summary: "Exploration de la foi à travers les actions quotidiennes.",
            audioSrc: "/path/to/audio1.mp3",
            backgroundColor: "bg-blue-200",
        },
        {
            title: "L'Amour Inconditionnel",
            bibleVerse: "1 Jean 4:8",
            date: "08/01/2023",
            speaker: "Pasteur Marie Martin",
            summary: "Comprendre l'amour divin et son impact sur nos vies.",
            audioSrc: "/path/to/audio2.mp3",
            backgroundColor: "bg-green-200",
        },
        {
            title: "Les Béatitudes",
            bibleVerse: "Matthieu 5:3-12",
            date: "15/01/2023",
            speaker: "Pasteur Paul Durand",
            summary: "Introduction à la série sur les Béatitudes.",
            audioSrc: "/path/to/audio3.mp3",
            backgroundColor: "bg-yellow-200",
        },
        {
            title: "La Puissance de la Prière",
            bibleVerse: "Jacques 5:16",
            date: "22/01/2023",
            speaker: "Pasteur Jean Dupont",
            summary: "Comment la prière peut transformer nos vies.",
            audioSrc: "/path/to/audio4.mp3",
            backgroundColor: "bg-red-200",
        },
        {
            title: "La Grâce de Dieu",
            bibleVerse: "Éphésiens 2:8-9",
            date: "29/01/2023",
            speaker: "Pasteur Marie Martin",
            summary: "Découvrir la grâce divine et son rôle dans notre salut.",
            audioSrc: "/path/to/audio5.mp3",
            backgroundColor: "bg-purple-200",
        },
        {
            title: "La Vie Abondante",
            bibleVerse: "Jean 10:10",
            date: "05/02/2023",
            speaker: "Pasteur Paul Durand",
            summary: "Vivre une vie pleine et épanouie selon les promesses de Dieu.",
            audioSrc: "/path/to/audio6.mp3",
            backgroundColor: "bg-pink-200",
        },
        {
            title: "La Foi qui Déplace les Montagnes",
            bibleVerse: "Matthieu 17:20",
            date: "12/02/2023",
            speaker: "Pasteur Jean Dupont",
            summary: "Le pouvoir de la foi dans nos vies quotidiennes.",
            audioSrc: "/path/to/audio7.mp3",
            backgroundColor: "bg-indigo-200",
        },
        {
            title: "L'Espoir en Temps de Crise",
            bibleVerse: "Romains 5:3-5",
            date: "19/02/2023",
            speaker: "Pasteur Marie Martin",
            summary: "Trouver l'espoir et la force dans les moments difficiles.",
            audioSrc: "/path/to/audio8.mp3",
            backgroundColor: "bg-teal-200",
        },
        {
            title: "La Joie du Seigneur",
            bibleVerse: "Néhémie 8:10",
            date: "26/02/2023",
            speaker: "Pasteur Paul Durand",
            summary: "Comment trouver la joie dans notre foi.",
            audioSrc: "/path/to/audio9.mp3",
            backgroundColor: "bg-gray-200",
        },
    ];

    return (
        <>
            <div className="relative h-[500px] overflow-hidden">
                <Image src={propSermon} alt="Hero Background" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 text-gray-900 flex flex-col justify-center text-left p-8">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Nous joindre</h1>
                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        N'hésitez pas à nous contacter pour toute question, demande de devis ou information supplémentaire. Notre équipe est à votre disposition pour vous accompagner dans la réalisation de vos projets de construction en RDC.
                    </p>
                </div>
            </div>

            <div className="container mx-auto py-10">
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-gray-800">Sermons</h1>
                    <p className="mt-2 text-gray-600">Explorez nos sermons et enseignements</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {sermons.map((sermon, index) => (
                        <div
                            key={index}
                            className={`${sermon.backgroundColor} p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform border-l-8 border-blue-500`}
                        >
                            <h2 className="text-2xl font-semibold text-gray-800">{sermon.title}</h2>
                            <p className="mt-2 text-gray-600">Passage biblique : {sermon.bibleVerse}</p>
                            <p className="text-gray-600">Date : {sermon.date}</p>
                            <p className="text-gray-600">Orateur : {sermon.speaker}</p>
                            <p className="mt-4 text-gray-600">{sermon.summary}</p>
                            <div className="mt-4">
                                <audio controls className="w-full">
                                    <source src={sermon.audioSrc} type="audio/mp3" />
                                    Votre navigateur ne supporte pas l'élément audio.
                                </audio>
                            </div>
                            <a href="#" className="text-blue-500 mt-2 inline-block">
                                Télécharger la transcription
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default SermonsPage;