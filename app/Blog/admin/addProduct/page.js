"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { assets } from '../../Assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Page = () => {
    const [image, setImage] = useState(null);
    const [data, setData] = useState({
        title: "",
        content: "", // Fixed typo: Content -> content
        article: "",
        author: "Pasteur Valentin",
        date: Date.now(),
        category: "Méditations",
        author_img: "/prop11",
    });

    const onChangeHandler = (event) => {
        const { name, value } = event.target;
        setData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file); // Update the image state
            setData((prevData) => ({ ...prevData, image: file })); // Store the file in the data state
        }
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', data.title);
        formData.append('content', data.content); // Fixed typo: Content -> content
        formData.append('article', data.article);
        formData.append('author', data.author);
        formData.append('date', data.date);
        formData.append('category', data.category);
        formData.append('author_img', data.author_img);
        formData.append('image', image);

        try {
            const response = await axios.post('/api/blog', formData);
            if (response.data.success) {
                toast.success(response.data.message);
            } else {
                toast.error(response.data.message);
            }
        } catch (error) {
            toast.error("Une erreur s'est produite lors de la soumission.");
        }
    };

    return (
        <div className="pt-5 px-5 sm:pt-12 sm:pl-16">
            <form onSubmit={onSubmitHandler}>
                <p className="text-xl">Charger une image</p>
                <label htmlFor="image" className="block mt-4">
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-md overflow-hidden shadow-md cursor-pointer">
                        {image ? (
                            <Image
                                src={URL.createObjectURL(image)} // Dynamically set the image preview
                                alt="Aperçu de l'image"
                                layout="fill"
                                objectFit="cover"
                                className="transition-opacity duration-300"
                            />
                        ) : (
                            <Image
                                src={assets.upload_area} // Placeholder image
                                alt="Zone de téléchargement"
                                layout="fill"
                                objectFit="cover"
                                className="transition-opacity duration-300"
                            />
                        )}
                    </div>
                    <input
                        onChange={handleImageChange}
                        type="file"
                        id="image"
                        accept="image/png, image/jpeg, image/jpg"
                        className="hidden"
                        required
                    />
                </label>

                <p className="text-xl mt-5">Le Titre de l'article</p>
                <input
                    name="title"
                    onChange={onChangeHandler}
                    value={data.title}
                    className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-red-500 rounded-md"
                    required
                    placeholder="Titre de votre article"
                />

                <p className="text-xl mt-5">La Description de l'article</p>
                <input
                    name="content"
                    onChange={onChangeHandler}
                    value={data.content}
                    className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-red-500 rounded-md"
                    required
                    placeholder="Description de votre article"
                />

                <p className="text-xl mt-5">Écrivez l'article</p>
                <textarea
                    name="article"
                    onChange={onChangeHandler}
                    value={data.article}
                    className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-red-500 rounded-md"
                    required
                    rows={6}
                    placeholder="Écrivez votre article"
                />

                <p className="text-xl mt-5">Choisir la catégorie de l'article</p>
                <select
                    name="category"
                    onChange={onChangeHandler}
                    value={data.category}
                    className="w-full sm:w-[500px] mt-4 px-4 py-3 border border-red-500 rounded-md"
                    required
                >
                    <option value="">Sélectionnez une catégorie</option>
                    <option value="Méditations">Méditations & Dévotions</option>
                    <option value="Témoignages">Témoignages</option>
                    <option value="Événements">Événements & Activités</option>
                    <option value="Vie">Vie communautaire</option>
                    <option value="Jeunesse">Jeunesse & Famille</option>
                    <option value="Inspiration">Inspiration & Citations</option>
                    <option value="Évangélisations">Mission & Évangélisations</option>
                    <option value="Foi">Foi & Questions</option>
                </select>

                <p className="text-red-500 text-sm mt-4">
                    * Veuillez vous assurer que l'image est au format PNG, JPG ou JPEG et ne dépasse pas 2 Mo.
                </p>

                <button className="bg-red-500 m-3 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                    Publier l'article
                </button>

                <div className="flex justify-between mb-5 mt-5">
                    <p className="text-xl">Aperçu de l'article</p>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
                        Aperçu
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Page;










// "use client"
// import React from 'react'
// import Image from 'next/image'
// // Removed unused import for FaUpload
// import { assets } from '../../Assets/assets'
// import { useState } from 'react';
// // Removed unused import for Content
// import axios from 'axios';


// const page = () => {

//     const [image, setImage] = useState(false);
//     const [data, setdata] = useState({
//         title: "",
//         Content: "",
//         article: "",
//         author: "Pasteur Valentin",
//         date: Date.now(),
//         category: "Méditations",
//         author_img: "/prop11",
//         image: null,
//     });

//     const onChangeHandler = (event) => {
//         const { name, value } = event.target;
//         setdata(prevData => ({ ...prevData, [name]: value }));
//         console.log(data);
//     };

//     const onSubmitHandler = async (event) => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append('title', data.title);
//         formData.append('Content', data.Content);
//         formData.append('article', data.article);
//         formData.append('author', data.author);
//         formData.append('date', data.date);
//         formData.append('category', data.category);
//         formData.append('author_img', data.author_img);
//         formData.append('image', image);
//         const response = await axios.post('/api/blog', formData);
//         if (response.data.success) {
//             toast.success(response.data.message)
//         }
//         else {
//             toast.error(response.data.message)
//         }
//     }

//     return (
//         <>
//             <form onSubmit={onSubmitHandler} className='pt-5 px-5 sm:pt-12 sm:pl-16'>
//                 <p className='text-xl' >Charger une image</p>
//                 <label htmlFor="image" >
//                     <Image src={!image ? assets.upload_area : URL.createObjectURL} className="mt-4" width={140} height={140} alt='' />
//                     <input onChange={(e) => setImage(e.target.files[0])} type='file' id='image' hidden required />
//                 </label>

//                 <p className='text-xl mt-5' >Le Titre de l'article </p>
//                 <input onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-red-500 ' required placeholder='titre de votre article' />

//                 <p className='text-xl mt-5' >La Description de l'article </p>
//                 <input name='content' onChange={onChangeHandler} value={data.Content} className='w-full sm:w-[500px] mt-4 px-4 py-3 border border-red-500 ' required placeholder='titre de votre article' />

//                 <p className='text-xl mt-5' >Ecrivez l'article </p>
//                 <textarea className='w-full sm:w-[500px] mt-4 px-4 mb-10 py-3 border border-red-500 ' required rows={6} placeholder='Ecrive votre article' />
//                 <p className='text-xl mt-5' >Choisir la catégorie de l'article </p>
//                 <select name='category' onChange={onChangeHandler} value={data.category} className='w-full sm:w-[500px] mt-4 px-4 py-3  mb-10 border border-red-500 ' required>
//                     <option value=''>Sélectionnez une catégorie </option>
//                     <option value='Méditations'>Méditations & Dévotions</option>
//                     <option value='Témoignages'>Témoignages</option>
//                     <option value='Événements'>Événements & Activités </option>
//                     <option value='Vie'>Vie communautaire</option>
//                     <option value='Jeunesse'>Jeunesse & Famille</option>
//                     <option value='Inspiration'>Inspiration & Citations </option>
//                     <option value='Évangélisations'>Mission & Évangélisations</option>
//                     <option value='Foi'>Foi & Questions</option>
//                 </select>
//                 <p className='text-red-500 text-sm mt-4'>* Veuillez vous assurer que l'image est au format PNG, JPG ou JPEG et ne dépasse pas 2 Mo.</p>
//                 <button className='bg-red-500 m-3 text-white px-4 py-2 rounded-md'>Publier l'article</button>
//                 <div className='flex justify-between mb-5 mt-5'>
//                     <p className='text-xl' >Aperçu de l'article</p>
//                     <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Aperçu</button>
//                 </div>


//             </form>



//         </>
//     )
// }

// export default page
