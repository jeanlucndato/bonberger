import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosAdd } from "react-icons/io";
import { assets } from '../../Assets/assets';

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-gray-100 mt-20  text-gray-800 shadow-md w-64'>
            <div className='h-16 flex items-center justify-center p-4'>
                <Link href="/blog/admin" className="focus:outline-none">
                    <Image src={assets.logo} width={100} height={30} alt="Logo du Blog" />
                </Link>
            </div>
            <nav className='flex-1 p-4'>
                <div className='mb-4'>
                    <Link href='/Blog/Admin/addProduct' className='flex items-center p-2 rounded-md hover:bg-gray-200 transition-colors focus:outline-none'>
                        <IoIosAdd className='mr-2 text-xl' />
                        <span className='text-sm font-medium'>Ajouter un Blog</span>
                    </Link>
                </div>
                <div className='mb-4'>
                    <Link href='/Blog/Admin/blogList' className='flex items-center p-2 rounded-md hover:bg-gray-200 transition-colors focus:outline-none'>
                        <IoIosAdd className='mr-2 text-xl' />
                        <span className='text-sm font-medium'>Liste des Blogs</span>
                    </Link>
                </div>
                <div>
                    <Link href='/Blog/Admin/subscription' className='flex items-center p-2 rounded-md hover:bg-gray-200 transition-colors focus:outline-none'>
                        <IoIosAdd className='mr-2 text-xl' />
                        <span className='text-sm font-medium'>Abonnements</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;