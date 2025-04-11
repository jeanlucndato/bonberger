import Image from "next/image";
import Sidebar from "../components/AdminComponent/Sidebar";
import { assets } from "../Assets/assets";
import { ToastContainer, toast } from 'react-toastify';

export default function Layout({ children }) {
    return (
        <div className="flex min-h-screen"> {/* Ensures the layout spans at least the full height of the screen */}
            <ToastContainer position="top-right" theme="dark" />
            {/* ToastContainer for notifications */}
            <Sidebar />
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-4"> {/* Added padding for better spacing */}
                    <h3 className="font-medium text-lg">Panneau D'administration</h3> {/* Added text size for better readability */}
                    {assets.author_img ? ( /* Check if author_img is valid */
                        <Image
                            src={assets.author_img}
                            width={40}
                            height={40}
                            alt="Profile Icon"
                            className="rounded-full"
                        />
                    ) : (
                        <div className="w-10 h-10 bg-gray-300 rounded-full" /> /* Fallback: Placeholder circle */
                    )}
                </div>
                <main className="flex-grow"> {/* Ensures the main content takes up remaining space */}
                    {children}
                </main>
            </div>
        </div>
    );
}