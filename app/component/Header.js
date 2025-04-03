"use client";
import Link from 'next/link';
import Image from 'next/image';
import { Bebas_Neue } from 'next/font/google';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import logo from '../../public/assets/img/prop12.jpg';

const bebasNeue = Bebas_Neue({
    subsets: ['latin'],
    weight: '400',
});

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-white bg-opacity-80 backdrop-blur-lg p-3'
                : 'bg-transparent p-4'
                }`}
        >
            <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="flex justify-between items-center w-full md:w-auto">
                    <div className="flex items-center">
                        <Image
                            src={logo}
                            alt="Logo BonBerger"
                            width={50}
                            height={50}
                            className="mr-2"
                        />
                        <Link
                            href="/"
                            className={`text-red-500 font-bold text-3xl ${bebasNeue.className}`}
                        >
                            BonBerger
                        </Link>
                    </div>
                    <button
                        className="md:hidden text-red-500 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.829-4.828 4.829a1 1 0 0 1-1.414-1.414l4.829-4.828-4.829-4.828a1 1 0 1 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 1 1 1.414 1.414l-4.828 4.828 4.829 4.828z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div
                    className={`space-x-4 mt-4 md:mt-0 md:flex transition-all duration-300 ${isMenuOpen
                        ? 'flex flex-col bg-gray-200 p-4 rounded-md'
                        : 'hidden'
                        } md:flex relative`}
                >
                    <Link
                        href="/"
                        className={`text-red-500 hover:text-black hover:bg-red-200 ${pathname === '/' ? 'text-red-500 border-b-2 border-white' : ''
                            } p-2`}
                    >
                        ACCUEIL
                    </Link>
                    <Link
                        href="/About"
                        className={`text-red-500 hover:text-black hover:bg-red-200 ${pathname === '/About' ? 'text-red-500 border-b-2 border-white' : ''
                            } p-2`}
                    >
                        APPROPOS
                    </Link>
                    <Link
                        href="/Services"
                        className={`text-red-500 hover:text-black hover:bg-red-200 ${pathname === '/Service' ? 'text-red-500 border-b-2 border-white' : ''
                            } p-2`}
                    >
                        Service
                    </Link>
                    <Link
                        href="/Sermon"
                        className={`text-red-500 hover:text-black hover:bg-red-200  ${pathname === '/Realisation' ? 'text-red-500 border-b-2 border-white' : ''
                            } p-2`}
                    >
                        Sermon
                    </Link>
                    <Link
                        href="/Events"
                        className={`text-red-500 hover:text-black hover:bg-red-200 ${pathname === '/Contact' ? 'text-red-500 border-b-2 border-white' : ''
                            } p-2`}
                    >
                        Events
                    </Link>
                    <div className="relative group">
                        <button className="text-red-500 hover:text-black hover:bg-red-200  p-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500">
                            Eglise
                        </button>
                        <div className="absolute hidden group-hover:block bg-white rounded-md shadow-md mt-2 min-w-[150px] z-10">
                            <Link
                                href="/Eglise/Pasteur"
                                className="block px-4 py-2 text-red-500 hover:bg-red-200 hover:text-black transition-colors duration-300"
                            >
                                Pasteur
                            </Link>
                            <Link
                                href="/Eglise/Doctrine"
                                className="block px-4 py-2 text-red-500 hover:bg-red-200 hover:text-black transition-colors duration-300"
                            >
                                Doctrine
                            </Link>
                            <Link
                                href="/Eglise/Pentecote"
                                className="block px-4 py-2 text-red-500 hover:bg-red-200 hover:text-black transition-colors duration-300"
                            >
                                Pentecôte
                            </Link>
                            <Link
                                href="/Eglise/Reunions"
                                className="block px-4 py-2 text-red-500  hover:bg-red-200 hover:text-black transition-colors duration-300"
                            >
                                Nos réunions
                            </Link>
                        </div>
                    </div>
                    <Link
                        href="/Blog"
                        className={`text-red-500 hover:text-black  hover:bg-red-200 ${pathname === '/Contact' ? 'text-red-500 border-b-2 border-white' : ''
                            } p-2`}
                    >
                        Blog
                    </Link>
                    <Link
                        href="/Contact"
                        className={`text-red-500 hover:text-black hover:bg-red-200 ${pathname === '/Contact' ? 'text-red-500 border-b-2 border-white' : ''
                            } p-2`}
                    >
                        CONTACT
                    </Link>
                </div>
            </div>
        </nav>
    );
}









