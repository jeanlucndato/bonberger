import React from 'react';
import { useRouter } from 'next/router';

const BlogPost = () => {
    const router = useRouter();
    const { slug } = router.query;

    // Données statiques pour les articles de blog (à remplacer par vos données réelles)
    const articles = {
        'article-1': {
            title: 'Titre de l\'article 1',
            content: 'Contenu de l\'article 1...',
        },
        'article-2': {
            title: 'Titre de l\'article 2',
            content: 'Contenu de l\'article 2...',
        },
        'article-3': {
            title: 'Titre de l\'article 3',
            content: 'Contenu de l\'article 3...',
        },
    };

    const article = articles[slug];

    if (!article) {
        return (
            <div className="container mx-auto py-8">
                <h1 className="text-3xl font-bold mb-6">Article non trouvé</h1>
                <p>L'article que vous recherchez n'existe pas.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
            <p className="text-gray-700">{article.content}</p>
        </div>
    );
};

export default BlogPost;