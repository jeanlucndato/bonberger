import React from 'react'
import Image from 'next/image'
import Header from "./../component/Header"
// import EventsContent from './EventsContent'
import Footer from "./../component/Footer"
import BrandIconGride from "./BrandIconGride"
import Feature from "./Feature"



const page = () => {
    return (
        <>
            <Header />
            {/* <EventsContent /> */}
            <Feature />
            <BrandIconGride />
            <Footer />
        </>
    )
}

export default page
