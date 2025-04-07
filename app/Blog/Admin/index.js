import React from 'react';
import Link from 'next/link';

function AdminDashboard() {
    return (
        <div className="container mx-auto py-10">
            <h1 className="text-3xl font-bold mb-6">Tableau de bord de l'administrateur</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow rounded-md p-6">
                    <h2 className="text-xl font-semibold mb-2">Actions rapides</h2>
                    <ul>
                        <li>
                            <Link href="/admin/create-post" className="text-indigo-600 hover:underline">
                                Créer un nouvel article
                            </Link>
                        </li>
                        <li>
                            <Link href="/admin/posts" className="text-indigo-600 hover:underline">
                                Gérer les articles
                            </Link>
                        </li>
                        {/* Ajoutez d'autres actions rapides ici */}
                    </ul>
                </div>

                {/* Vous pouvez ajouter d'autres widgets ou informations ici (ex: statistiques) */}
            </div>
        </div>
    );
}

export default AdminDashboard;