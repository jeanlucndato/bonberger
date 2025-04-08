'use client'
import React, { useState } from 'react'
import { blog_data } from '../Assets/assets'
import BlogItem from './BlogItem'


const BlogListe = () => {

    const [menu, setMenu] = useState("All");

    return (
        <>

            <div className='flex justify-center gap-6 my-10'>
                <button onClick={() => setMenu('All')} className={menu === "All" ? 'bg-red-300 text-gray-50 py-2 px-4 rounded-sm' : ""}>ALL
                </button>
                <button onClick={() => setMenu('Acctualites')} className={menu === "Acctualites" ? 'bg-red-300 text-gray-50 py-2 px-4 rounded-sm' : ""} >Acctualites
                </button>
                <button onClick={() => setMenu('Enseignements')} className={menu === "Enseignements" ? 'bg-red-300 text-gray-50 py-2 px-4 rounded-sm' : ""} >
                    Enseignements
                </button>
                <button onClick={() => setMenu('Vie')} className={menu === "Vie" ? 'bg-red-300 text-gray-50 py-2 px-4 rounded-sm' : ""} >
                    Vie communautaire
                </button>


            </div>
            <div className=' flex flex-wrap justify-around gap-1 gap-y-10 mb-20 xl-mx-24 '>
                {blog_data.map((item, index) => {
                    return <BlogItem key={index} image={item.image} title={item.title} content={item.content} date={item.date} category={item.category} />

                })}
            </div>

        </>

    )
}

export default BlogListe
