import React from 'react';
import Image from 'next/image'; // Assurez-vous que cette importation est présente

const PastorCard = ({ imageSrc, title, text }) => {
    return (
        <div className="flex items-center justify-center bg-white rounded-lg shadow-md p-6">
            <Image
                src={imageSrc}
                alt={title}
                width={150} // N'oubliez pas d'ajouter width et height pour les images locales
                height={150}
                className="w-full h-48 object-cover rounded-lg"
            />
            <div className="pl-6">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
                <p className="text-gray-700 text-base">{text}</p>
            </div>
        </div>
    );
};

export default PastorCard;