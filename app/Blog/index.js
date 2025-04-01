import React from 'react';
import Link from 'next/link';

const BlogIndex = () => {
    // Données statiques pour les articles de blog (à remplacer par vos données réelles)
    const articles = [
        {
            slug: 'article-1',
            title: 'Titre de l\'article 1',
            excerpt: 'Extrait de l\'article 1...',
        },
        {
            slug: 'article-2',
            title: 'Titre de l\'article 2',
            excerpt: 'Extrait de l\'article 2...',
        },
        {
            slug: 'article-3',
            title: 'Titre de l\'article 3',
            excerpt: 'Extrait de l\'article 3...',
        },
    ];

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">Articles de blog</h1>
            <ul>
                {articles.map((article) => (
                    <li key={article.slug} className="mb-4">
                        <Link href={`/blog/${article.slug}`}>
                            <a className="text-blue-500 hover:underline">
                                <h2 className="text-xl font-semibold">{article.title}</h2>
                                <p className="text-gray-600">{article.excerpt}</p>
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogIndex;