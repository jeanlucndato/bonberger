import React from 'react'
import Image from 'next/image'
import Header from "./../component/Header"
import SermonContent from './../Sermon/SermonContent'
import UserReviewCards from './UserReviewCards'
import Question from './Question'
import Footer from "./../component/Footer"



const page = () => {
    return (
        <>
            <Header />
            <SermonContent />
            <UserReviewCards />
            <Question />
            <Footer />
        </>
    )
}

export default page
