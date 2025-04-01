import Image from "next/image";
import Index from "./component/index";
import Header from "./component/Header"
import Footer from "./component/Footer" // Corrected import
import { Inter } from "next/font/google";

export default function Home() {
  return (
    <>
      <Header />
      <Index />
      <Footer />
    </>
  );
}