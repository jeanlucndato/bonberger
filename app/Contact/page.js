import React from 'react'
import Image from 'next/image'
import Header from "./../component/Header"
import ContactContent from './ContactContent'
import Footer from "./../component/Footer"



const page = () => {
    return (
        <>
            <Header />
            <ContactContent />
            <Footer />
        </>
    )
}

export default page
