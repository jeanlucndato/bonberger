// app/Blog/index.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import blogimg from "../../public/assets/img/prop1.jpg";
import connectToDatabase from '@/lib/mongodb';

async function getPosts() {
    try {
        const db = await connectToDatabase();
        const collection = db.collection('posts');
        const posts = await collection.find({}).sort({ createdAt: -1 }).toArray();
        return posts.map(post => ({ ...post, _id: post._id.toString(), createdAt: post.createdAt ? post.createdAt.toISOString() : null }));
    } catch (error) {
        console.error("Erreur lors de la récupération des articles :", error);
        return []; // Retourner un tableau vide en cas d'erreur
    }
}

export default async function BlogIndex() {
    const posts = await getPosts();

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 md:px-0 py-10">

                <main className="mt-8">
                    <div className="relative h-[450px] rounded-xl overflow-hidden mb-8">
                        <Image src={blogimg} alt="Hero Background" layout="fill" objectFit="cover" className="object-center" />
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 opacity-70"></div>
                        <div className="absolute inset-0 text-white flex flex-col justify-center items-center text-center p-8">
                            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Bienvenue sur notre Blog de Construction en RDC</h1>
                            <p className="text-lg sm:text-xl md:text-2xl mb-6">
                                Découvrez nos articles, conseils et réalisations dans le secteur de la construction à Goma et au-delà.
                            </p>
                            {/* Recherche Input et Bouton Centrés */}
                            <div className="flex w-full max-w-md rounded-full overflow-hidden shadow-md">
                                <input
                                    type="text"
                                    placeholder="Rechercher des articles..."
                                    className="w-full px-4 py-3 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
                                />
                                <button className="bg-red-500 hover:bg-gray-600 text-white font-semibold mt-5px py-3 px-6 rounded-r-full transition-colors duration-300">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts && posts.map((article) => ( // Vérification ici
                            <div key={article._id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <Link href={`/blog/${article._id}`} className="block hover:shadow-lg transition duration-300">
                                    {article.imageUrl && (
                                        <div className="relative h-64 overflow-hidden">
                                            <Image
                                                src={article.imageUrl}
                                                alt={article.title}
                                                layout="fill"
                                                objectFit="cover"
                                                className="object-center"
                                            />
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">{article.title}</h2>
                                        <p className="text-gray-700 text-sm mb-4 line-clamp-3">{article.excerpt || (article.content ? article.content.substring(0, 150) + '...' : '')}</p>
                                        <div className="flex justify-between items-center text-gray-500 text-xs mb-2">
                                            <span>Publié le {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : 'Date inconnue'}</span>
                                            {article.author && <span>Par {article.author}</span>}
                                        </div>
                                        {article.category && (
                                            <span className="inline-block bg-indigo-100 text-indigo-800 px-2 py-1 rounded-full text-xs font-semibold mr-2 mb-2">
                                                {article.category}
                                            </span>
                                        )}
                                        <div className="text-right">
                                            <span className="text-indigo-600 hover:text-indigo-800 font-semibold transition duration-300">
                                                Lire la suite &rarr;
                                            </span>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                        ))}
                    </section>
                </main>
            </div>
        </div>
    );
}