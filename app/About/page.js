import React from 'react'
import Image from 'next/image'
import Header from "./../component/Header"
import AboutContent from './AboutContent'
import Footer from "./../component/Footer"



const page = () => {
    return (
        <>
            <Header />
            <AboutContent />
            <Footer />
        </>
    )
}

export default page
