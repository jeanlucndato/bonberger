import Image from "next/image";
import Header from "../../app/component/Header";
import ServicesContent from "./ServiceContent"
import Footer from "../component/Footer" // Corrected import
import { Inter } from "next/font/google";

export default function Home() {
    return (
        <>
            <Header />
            <ServicesContent />
            <Footer />
        </>
    );
}