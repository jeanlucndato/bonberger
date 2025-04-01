"use client";
import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

const BlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Données statiques pour les articles de blog (à remplacer par vos données réelles)
    const articles = {
        'article-1': {
            title: 'La Foi en Action',
            content: 'Contenu de l\'article 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
            imageUrl: '/images/blog-1.jpg',
            date: '01/01/2023',
            author: 'Pasteur Jean Dupont',
        },
        'article-2': {
            title: 'L\'Amour Inconditionnel',
            content: 'Contenu de l\'article 2. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
            imageUrl: '/images/blog-2.jpg',
            date: '08/01/2023',
            author: 'Pasteur Marie Martin',
        },
        'article-3': {
            title: 'Les Béatitudes',
            content: 'Contenu de l\'article 3. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
            imageUrl: '/images/blog-3.jpg',
            date: '15/01/2023',
            author: 'Pasteur Paul Durand',
        },
        'article-4': {
            title: 'La Puissance de la Prière',
            content: 'Contenu de l\'article 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
            imageUrl: '/images/blog-4.jpg',
            date: '22/01/2023',
            author: 'Pasteur Jean Dupont',
        },
        'article-5': {
            title: 'La Grâce de Dieu',
            content: 'Contenu de l\'article 5. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
            imageUrl: '/images/blog-5.jpg',
            date: '29/01/2023',
            author: 'Pasteur Marie Martin',
        },
        'article-6': {
            title: 'La Vie Abondante',
            content: 'Contenu de l\'article 6. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
            imageUrl: '/images/blog-6.jpg',
            date: '05/02/2023',
            author: 'Pasteur Paul Durand',
        },
    };

    if (!slug || !articles[slug]) {
        return (
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6">Article non trouvé</h1>
                <p>L'article que vous recherchez n'existe pas.</p>
            </div>
        );
    }

    const article = articles[slug];

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="container mx-auto py-8 px-4">
                <article className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-4xl font-bold mb-6 text-gray-800">{article.title}</h1>
                    <div className="mb-4 relative h-64">
                        {article.imageUrl && (
                            <Image
                                src={article.imageUrl}
                                alt={article.title}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-md"
                            />
                        )}
                    </div>
                    <div className="prose prose-lg max-w-none text-gray-700">
                        <p>{article.content}</p>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                        <span className="text-sm text-gray-500">{article.date}</span>
                        <span className="text-sm text-gray-500">Par {article.author}</span>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default BlogPost;
