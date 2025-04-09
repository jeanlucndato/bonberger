"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { blog_data, assets } from '../Assets/assets';


const page = ({ params }) => {

    const [data, setData] = useState(null);

    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {
            if (Number(params.id) === blog_data[i].id) {
                setData(blog_data[i]);
                console.log(blog_data[i]);
                break

            }
        }

    }

    useEffect(() => {
        fetchBlogData();

    }, [])



    return (data ?
        <>
            <div class="bg-white text-gray-800 py-12">
                <div class="container mx-auto px-4 sm:px-6 lg:px-8">
                    <main class="bg-white rounded-lg shadow-md overflow-hidden">
                        <div class=" mx-5 max-w-[800px] mt-[-100px] mb-8">
                            <Image
                                src={data.image}
                                width={1280}
                                height={720}
                                alt="Image de l'article"
                                class="object-cover rounded-t-lg"
                            />
                        </div>
                        <div class="px-6 py-8">
                            <div class="flex items-center justify-between mb-6">
                                <div class="flex items-center">
                                    <div class="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                                        <Image
                                            src={data.author_img}
                                            alt="{data.author}"
                                            class="object-cover w-full h-full"
                                        />
                                    </div>
                                    <div>
                                        <h2 class="text-xl font-semibold text-gray-900">{data.author}</h2>
                                        <p class="text-sm text-gray-500">Publié le {data.date}</p>
                                    </div>
                                </div>
                                <div class="relative w-16 h-8">
                                    <Image
                                        src={assets.logo}
                                        alt="Logo du site"
                                        class="object-contain w-full h-full"
                                    />
                                </div>
                            </div>

                            <h1 class="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl">
                                {data.title}
                            </h1>
                            <div class="mb-4 space-x-2">
                                <span
                                    class="inline-block bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded-full shadow-sm"
                                >{data.category}</span
                                >
                                {data.tags &&
                                    data.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            class="inline-block bg-gray-200 text-gray-500 text-xs font-semibold py-1 px-2 rounded-full shadow-sm"
                                        >{tag}</span
                                        >
                                    ))}
                            </div>

                            <article class="prose prose-lg mx-auto text-gray-700">
                                <p class="leading-relaxed">
                                    Ceci est le premier paragraphe de votre article de blog. Il devrait
                                    introduire le sujet et capter l'attention du lecteur. Utilisez des
                                    mots percutants et préparez le terrain pour le contenu à venir.
                                </p>

                                <h2 class="text-2xl font-semibold text-gray-900 mt-8">
                                    Sous-titre Principal
                                </h2>
                                <p class="leading-relaxed mt-2">
                                    Développez ici le premier point principal de votre article. Fournissez
                                    des détails croustillants, des exemples concrets et des explications
                                    claires. N'hésitez pas à utiliser des listes pour organiser vos idées.
                                </p>
                                <ul class="list-disc list-inside mt-4">
                                    <li>Point clé numéro un, mis en évidence.</li>
                                    <li>Un autre point important à considérer.</li>
                                    <li>Le dernier élément de cette section.</li>
                                </ul>

                                <h3 class="text-xl font-semibold text-gray-900 mt-6">
                                    Sous-titre Secondaire
                                </h3>
                                <p class="leading-relaxed mt-2">
                                    Approfondissez un aspect spécifique du point principal précédent. Vous
                                    pouvez utiliser des citations mises en évidence avec une couleur
                                    distincte pour attirer l'attention.
                                </p>

                                <blockquote
                                    class="mt-4 p-4 italic border-l-4 border-red-500 bg-gray-100 rounded-md"
                                >
                                    <p class="text-gray-700">
                                        "Une citation puissante qui renforce votre argument principal."
                                    </p>
                                    <cite class="text-sm text-gray-500">- Source de la citation</cite>
                                </blockquote>

                                <p class="leading-relaxed mt-4">
                                    Continuez à tisser votre récit avec d'autres paragraphes et
                                    sous-titres. Utilisez des images ou des éléments visuels pour briser
                                    la monotonie du texte.
                                </p>

                                <h2 class="text-2xl font-semibold text-gray-900 mt-8">Conclusion</h2>
                                <p class="leading-relaxed mt-2">
                                    Résumez les principaux points de votre article et offrez une
                                    conclusion mémorable. Incitez vos lecteurs à réfléchir ou à passer à
                                    l'action.
                                </p>
                            </article>
                        </div>
                        <div class="px-6 py-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
                            <div class="flex items-center">
                                <div class="relative w-8 h-8 rounded-full overflow-hidden mr-2">
                                    <img
                                        src="{data.author_img}"
                                        alt="{data.author}"
                                        class="object-cover w-full h-full"
                                    />
                                </div>
                                <p class="text-sm text-gray-600">Écrit par {data.author}</p>
                            </div>
                            <a
                                href="#"
                                class="inline-flex items-center px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-md shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                            >
                                Commentaires
                                <svg
                                    class="ml-2 -mr-1 w-4 h-4"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M18 10c0 3.866-3.582 7-8 7a8.002 8.002 0 01-2.004-.322l-3.244 1.144a1 1 0 01-1.374-1.224l.43-1.281a8.005 8.005 0 01-4.199-5.758 8.014 8.014 0 017-8 8 8 0 018 8zm-8-2a2 2 0 11-4 0 2 2 0 014 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </main>
                </div>
            </div>
        </> : <></>
    )
}

export default page

