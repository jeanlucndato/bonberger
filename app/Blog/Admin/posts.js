// pages/admin/posts.js
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

function AdminPosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/api/posts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data);
                setLoading(false);
            } catch (e) {
                setError(e.message);
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
            try {
                const response = await fetch(`/api/posts/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    // Filtrer la liste des articles après la suppression
                    setPosts(posts.filter(post => post._id !== id));
                } else {
                    console.error('Erreur lors de la suppression de l\'article');
                    // Gérer l'erreur (afficher un message)
                }
            } catch (error) {
                console.error('Erreur lors de l\'envoi de la requête de suppression', error);
                // Gérer l'erreur
            }
        }
    };

    if (loading) return <p>Chargement des articles...</p>;
    if (error) return <p>Erreur : {error}</p>;

    return (
        <div className="container mx-auto py-10">
            <h1 className="text-2xl font-bold mb-6">Gestion des articles</h1>
            {posts.length === 0 ? (
                <p>Aucun article trouvé.</p>
            ) : (
                <ul className="space-y-4">
                    {posts.map(post => (
                        <li key={post._id} className="bg-white shadow rounded-md p-4 flex items-center justify-between">
                            <div>
                                <Link href={`/admin/edit-post/${post._id}`} className="text-indigo-600 hover:underline font-semibold">
                                    {post.title}
                                </Link>
                                <p className="text-gray-500 text-sm">Publié le {new Date(post.createdAt).toLocaleDateString()}</p>
                                <p className="text-gray-600 text-xs">Auteur: {post.author}</p>
                                {post.tags && post.tags.length > 0 && (
                                    <p className="text-gray-600 text-xs">Tags: {post.tags.join(', ')}</p>
                                )}
                            </div>
                            <div className="space-x-2">
                                <Link href={`/admin/edit-post/${post._id}`} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                    Modifier
                                </Link>
                                <button
                                    onClick={() => handleDelete(post._id)}
                                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Supprimer
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div className="mt-6">
                <Link href="/admin/create-post" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Créer un nouvel article
                </Link>
            </div>
        </div>
    );
}

export default AdminPosts;