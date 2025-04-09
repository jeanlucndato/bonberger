"use client"
import React from 'react'
import Link from 'next/link'
import next from 'next'
import { blog_data } from '../Assets/assets'
import Image from 'next/image'
import { FaLongArrowAltRight } from "react-icons/fa";


const BlogItem = ({ title, id, content, category, image }) => {
    return (
        <div className='max-w-[330px]' >
            <Link href={`/Blog/${id}`}>
                < Image src={image} alt='' width={400} height={400} className=' border-b border-black  ' />
            </Link>
            <p className='ml-5 mt-5 px-1 inline-block bg-black text-amber-50'>
                {category}

            </p>
            <div className='p-5'>
                <h5>{title}
                </h5>
                <p className='mb-3 text-sm text-gray-700'>{content}
                </p>
                <Link href={`/Blog/${id}`} className='inline-flex items-center py-2 font-semibold text-gray-800 '>Readmore ...
                    <FaLongArrowAltRight />

                </Link>



            </div>




        </div >
    )
}

export default BlogItem
