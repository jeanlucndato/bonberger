"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
// import image
import blogimg from "../../public/assets/img/prop1.jpg"

const BlogIndex = () => {
    const articles = [
        {
            slug: 'article-1',
            title: 'La Foi en Action',
            excerpt: 'Exploration de la foi à travers les actions quotidiennes.',
            imageUrl: '/images/blog-1.jpg',
            date: '01/01/2023',
            author: 'Pasteur Jean Dupont',
        },
        {
            slug: 'article-2',
            title: 'L\'Amour Inconditionnel',
            excerpt: 'Comprendre l\'amour divin et son impact sur nos vies.',
            imageUrl: '/images/blog-2.jpg',
            date: '08/01/2023',
            author: 'Pasteur Marie Martin',
        },
        {
            slug: 'article-3',
            title: 'Les Béatitudes',
            excerpt: 'Introduction à la série sur les Béatitudes.',
            imageUrl: '/images/blog-3.jpg',
            date: '15/01/2023',
            author: 'Pasteur Paul Durand',
        },
        {
            slug: 'article-4',
            title: 'La Puissance de la Prière',
            excerpt: 'Comment la prière peut transformer nos vies.',
            imageUrl: '/images/blog-4.jpg',
            date: '22/01/2023',
            author: 'Pasteur Jean Dupont',
        },
        {
            slug: 'article-5',
            title: 'La Grâce de Dieu',
            excerpt: 'Découvrir la grâce divine et son rôle dans notre salut.',
            imageUrl: '/images/blog-5.jpg',
            date: '29/01/2023',
            author: 'Pasteur Marie Martin',
        },
        {
            slug: 'article-6',
            title: 'La Vie Abondante',
            excerpt: 'Vivre une vie pleine et épanouie selon les promesses de Dieu.',
            imageUrl: '/images/blog-6.jpg',
            date: '05/02/2023',
            author: 'Pasteur Paul Durand',
        },
    ];

    return (
        <div className="container bg-gray-300 mx-auto py-8 px-4">
            <div className="relative h-[450px] rounded-xl overflow-hidden">
                <Image src={blogimg} alt="Hero Background" layout="fill" objectFit="cover" />
                <div className="absolute inset-0 text-gray-900 flex flex-col justify-center text-left p-8">
                    <h1 className="text-4xl font-bold mb-8 text-center">Articles de blog</h1>

                    <p className="text-lg sm:text-xl md:text-2xl mb-8">
                        N'hésitez pas à nous contacter pour toute question, demande de devis ou information supplémentaire. Notre équipe est à votre disposition pour vous accompagner dans la réalisation de vos projets de construction en RDC.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 mt-9 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <div key={article.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                        {article.imageUrl && (
                            <div className="relative h-64">
                                <Image
                                    src={article.imageUrl}
                                    alt={article.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                        )}
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-4">{article.title}</h2>
                            <p className="text-gray-600 mb-4">{article.excerpt}</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-sm text-gray-500">{article.date}</span>
                                <span className="text-sm text-gray-500">Par {article.author}</span>
                            </div>
                            <Link href={`/blog/${article.slug}`} className="mt-4 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Lire la suite
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogIndex;