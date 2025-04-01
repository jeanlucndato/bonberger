import React from 'react'
import Image from 'next/image'
import Header from "./../component/Header"
import EventsContent from './EventsContent'
import Footer from "./../component/Footer"



const page = () => {
    return (
        <>
            <Header />
            <EventsContent />
            <Footer />
        </>
    )
}

export default page
