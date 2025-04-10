"use client"
import React, { useEffect, useState } from 'react'
import Footer from "../../component/Footer"
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa6";
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
            <div className="bg-red-200 py-6 md:py-8 lg:py-10 xl:py-12 px-4 sm:px-6 md:px-12 lg:px-28">
                <div className="flex justify-between items-center">
                    <Link href="/">

                        <Image src={assets.logo} width={150} className="w-24 sm:w-32 md:w-40 lg:w-48" alt="Logo" />
                    </Link>
                    <Link href="/">

                        <button className="flex items-center gap-2 font-medium py-2 px-4 sm:py-3 sm:px-6 border border-gray-500 rounded-md text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 text-sm md:text-base">
                            Get Start <Image src={assets.arrow} alt="Arrow" className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>
                    </Link>

                </div>
                <div className="text-center py-12 md:py-16 lg:py-20">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold max-w-[90%] sm:max-w-[700px] mx-auto text-gray-800 leading-tight">
                        {data.title}
                    </h1>
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 mx-auto mt-6 rounded-full overflow-hidden border-2 border-white shadow-md">
                        <Image className="object-cover w-full h-full" src={data.author_img} width={80} height={80} alt={data.author} />
                    </div>
                    <p className="mt-2 pb-4 text-base sm:text-lg max-w-[90%] sm:max-w-[740px] mx-auto text-gray-600">{data.author}</p>
                </div>
            </div>
            <div className="mx-4 sm:mx-5 md:mx-auto max-w-[95%] sm:max-w-[800px] mt-[-60px] sm:mt-[-80px] mb-10 bg-white rounded-md shadow-md overflow-hidden">
                <div className="relative aspect-w-16 aspect-h-9">
                    <Image className="object-cover w-full h-full border-b-4 border-red-500 rounded-t-md" src={data.image} width={1280} height={720} alt={data.title} />
                </div>
                <div className="p-4 sm:p-6 md:p-8">
                    <h1 className="my-4 sm:my-6 text-xl sm:text-2xl font-semibold text-gray-900">Introduction</h1>
                    <p className="text-gray-700 leading-relaxed mb-4 sm:mb-6">{data.content}</p>

                    <h3 className="my-3 sm:my-5 text-lg font-semibold text-gray-900">Step 1</h3>
                    <p className="my-2 sm:my-3 text-gray-700 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

                    <h3 className="my-3 sm:my-5 text-lg font-semibold text-gray-900">Step 2</h3>
                    <p className="my-2 sm:my-3 text-gray-700 leading-relaxed">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <h3 className="my-3 sm:my-5 text-lg font-semibold text-gray-900">Conclusion</h3>
                    <p className="my-2 sm:my-3 text-gray-700 leading-relaxed">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                </div>
            </div>
            <div className="py-10 sm:py-12 md:py-16 flex flex-col items-center">
                <p className="text-gray-800 font-semibold my-4 text-lg md:text-xl">Partagez</p>
                <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
                    <FaFacebookF size={30} smSize={36} className="text-red-500 cursor-pointer hover:scale-110 transition-transform" />
                    <FaWhatsapp size={30} smSize={36} className="text-red-500 cursor-pointer hover:scale-110 transition-transform" />
                    <FaInstagram size={30} smSize={36} className="text-red-500 cursor-pointer hover:scale-110 transition-transform" />
                </div>
            </div>

            <Footer />
        </> : <></>
    )
}

export default page

