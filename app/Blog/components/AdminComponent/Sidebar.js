import React from 'react'
import { assets } from '../../Assets/assets'
import { IoIosAdd } from "react-icons/io";

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-red-500'>


                <Image src={assets.logo} width={120} />
            </div>
            <div className='w-28 sm:w-80 h-[100vh] relative py-12 border border-red-500 ' >

                <div className='flex items-center border border-red-500 gap-3 font-medium px-3 py-2 bg-red-200 shadow-[-5px_5px_0px_#000000]' >
                    <Link href='/admin/addProduct'>
                        <IoIosAdd />
                        <p>Ajouter Blog     </p>
                    </Link>
                </div>
                <div className='mt-5 flex items-center border border-red-500 gap-3 font-medium px-3 py-2 bg-red-200 shadow-[-5px_5px_0px_#000000]' >
                    <Link href='/admin/blogList'>
                        <IoIosAdd />
                        <p>Blog List     </p>
                    </Link>
                </div>
                <div className='mt-5 flex items-center border border-red-500 gap-3 font-medium px-3 py-2 bg-red-200 shadow-[-5px_5px_0px_#000000]' >
                    <Link href='/admin/subscription'>
                        <IoIosAdd />
                        <p>Subscription     </p>
                    </Link>
                </div>
            </div>


        </div>
    )
}

export default Sidebar
