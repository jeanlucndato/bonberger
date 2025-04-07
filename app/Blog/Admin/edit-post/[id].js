import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const CKEditor = dynamic(() => import('@ckeditor/ckeditor5-react').then(mod => mod.CKEditor), {
    ssr: false,
});

const ClassicEditor = dynamic(() => import('@ckeditor/ckeditor5-build-classic').then(mod => mod.ClassicEditor), {
    ssr: false,
});

function EditPost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        if (id) {
            fetch(`/api/posts/${id}`) // Route pour récupérer un article par son ID
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Erreur lors de la récupération de l\'article');
                    }
                    return response.json();
                })
                .then(data => {
                    setTitle(data.title);
                    setContent(data.content);
                    setLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`/api/posts/${id}`, {
                method: 'PUT', // ou PATCH selon votre API
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content }),
            });

            if (response.ok) {
                const data = await response.json();
                router.push(`/blog/${data.slug}`); // Rediriger après la mise à jour
            } else {
                console.error('Erreur lors de la mise à jour de l\'article');
                // Gérez l'erreur
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi de la requête', error);
            // Gérez l'erreur
        }
    };

    if (loading) {
        return <div className="container mx-auto py-10"><p>Chargement de l'article...</p></div>;
    }

    if (error) {
        return <div className="container mx-auto py-10"><p className="text-red-500">Erreur: {error}</p></div>;
    }

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-6">Éditer l'article</h1>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                        Titre:
                    </label>
                    <input
                        type="text"
                        id="title"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">
                        Contenu:
                    </label>
                    {typeof CKEditor !== 'undefined' && (
                        <CKEditor
                            editor={ClassicEditor}
                            data={content}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                setContent(data);
                            }}
                        />
                    )}
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Enregistrer les modifications
                    </button>
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Annuler
                    </button>
                </div>
            </form>
        </div>
    );
}

export default EditPost;