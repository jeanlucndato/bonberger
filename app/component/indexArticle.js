import React from 'react';
import Image from 'next/image';

// Importez vos images
import image1 from '../../public/assets/img/prop8.jpg';
import image2 from '../../public/assets/img/prop12.jpeg';

const Page = () => {
    return (
        <>
            <div className="bg-red-50 py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-black underline mb-4">Bienvenue sur notre Blog !</h2>
                        <p className="text-lg text-black mb-8">
                            Découvrez nos articles passionnants sur [votre sujet de blog]. Nous partageons des idées, des conseils et des actualités pour vous inspirer et vous informer. Plongez-vous dans nos contenus et rejoignez notre communauté !
                        </p>
                        <div className="flex justify-center">
                            <a href="/blog" className="bg-red-500 hover:bg-black text-white font-bold py-3 px-6 rounded-full">
                                Voir tous les articles
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto py-8 px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Première section sans animation */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-48 sm:h-64">
                                <Image src={image1} alt="Image 1" layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl md:text-2xl font-bold mb-4">The Special One</h2>
                                <p className="text-black mb-4">
                                    Join our non-profit organisation to help create a brighter future for those in need. Every donation counts towards making a difference in the lives of those less fortunate.
                                </p>
                                <a href="#" className="text-red-500 hover:text-black hover:underline font-semibold">
                                    Read More →
                                </a>
                            </div>
                        </div>

                        {/* Deuxième section sans animation */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-48 sm:h-64">
                                <Image src={image2} alt="Image 2" layout="fill" objectFit="cover" />
                            </div>
                            <div className="p-6">
                                <h2 className="text-xl md:text-2xl font-bold mb-4">A Better Education for Everyone</h2>
                                <p className="text-gray-700 mb-4">
                                    Our non-profit organisation is dedicated to improving access to education for all. With your support, we can help provide the resources and opportunities needed for success.
                                </p>
                                <a href="#" className="text-red-500 hover:text-black hover:underline font-semibold">
                                    Read More →
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default Page;