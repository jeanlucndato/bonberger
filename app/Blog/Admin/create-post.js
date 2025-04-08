import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const CKEditor = dynamic(() => import('@ckeditor/ckeditor5-react').then(mod => mod.CKEditor), {
    ssr: false,
});

const ClassicEditor = dynamic(() => import('@ckeditor/ckeditor5-build-classic').then(mod => mod.ClassicEditor), {
    ssr: false,
});

function CreatePost() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');
    const [tags, setTags] = useState(''); // Les tags seront entrés comme une chaîne séparée par des virgules
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, content, author, tags: tags.split(',').map(tag => tag.trim()) }),
            });

            if (response.ok) {
                const data = await response.json();
                router.push(`/blog/${data.slug}`); // Assurez-vous que votre API renvoie le slug
            } else {
                console.error('Erreur lors de la création de l\'article');
                // Gérez l'erreur (afficher un message à l'utilisateur)
            }
        } catch (error) {
            console.error('Erreur lors de l\'envoi de la requête', error);
            // Gérez l'erreur
        }
    };

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-6">Créer un nouvel article</h1>
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
                    <label htmlFor="author" className="block text-gray-700 text-sm font-bold mb-2">
                        Auteur:
                    </label>
                    <input
                        type="text"
                        id="author"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="tags" className="block text-gray-700 text-sm font-bold mb-2">
                        Tags (séparés par des virgules):
                    </label>
                    <input
                        type="text"
                        id="tags"
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
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
                        Publier l'article
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

export default CreatePost;