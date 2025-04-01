import React from 'react'
import Image from 'next/image'
import Header from "./../component/Header"
import SermonContent from './../Sermon/SermonContent'
import Footer from "./../component/Footer"



const page = () => {
    return (
        <>
            <Header />
            <SermonContent />
            <Footer />
        </>
    )
}

export default page
