import React from "react";
import Image from "next/image";
import prop11 from "../../public/assets/img/prop12.jpeg";
import doctrineAssets from "./assets";

const DoctrineContent = () => {
    return (
        <>
            {/* Hero Section: Image with overlay text */}
            <div className="min-h-screen flex justify-center items-center bg-gray-100 py-10">
                <div className="relative max-w-4xl mx-auto w-full rounded-md shadow-lg overflow-hidden">
                    <div className="relative w-full aspect-w-16 aspect-h-9">
                        <Image
                            src={prop11}
                            alt="Montagnes"
                            className="object-cover"
                            priority
                            layout="fill"
                            sizes="(max-width: 768px) 100vw, 768px"
                        />
                    </div>
                    <div className="absolute inset-0 bg-gray-700 opacity-60"></div>
                    <div className="absolute inset-0 flex items-center justify-center px-8">
                        <h2 className="text-white text-xl sm:text-3xl font-bold text-center">
                            Get Lost in Mountains
                        </h2>
                    </div>
                </div>
            </div>

            {/* Doctrine Section: Cards with image and text */}
            <div className="container mx-auto py-8 md:py-16">
                <h1 className="text-2xl md:text-4xl font-bold text-center text-gray-800 mb-6 md:mb-8">
                    Notre Doctrine
                </h1>
                {doctrineAssets.map((doctrinePoint) => (
                    <div
                        key={doctrinePoint.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden mb-6 md:mb-8 flex flex-col lg:flex-row"
                    >
                        {/* Image Section */}
                        <div className="lg:w-1/2 relative h-64 lg:h-auto">
                            <Image
                                src={doctrinePoint.image}
                                alt={doctrinePoint.title}
                                className="object-cover w-full h-full lg:rounded-l-lg"
                                layout="fill"
                            />
                        </div>

                        {/* Text Section */}
                        <div className="py-6 px-4 md:py-12 md:px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 flex flex-col justify-center">
                            <h2 className="text-xl md:text-3xl text-gray-800 font-bold mb-2 md:mb-4">
                                {doctrinePoint.title}
                            </h2>
                            <p className="mt-2 md:mt-4 text-gray-700 leading-relaxed text-sm md:text-base">
                                {doctrinePoint.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default DoctrineContent;