import React from 'react'
import Header from '../../app/component/Header'
import Index from './index'
import Footer from '../../app/component/Footer'
import BlogListe from './components/BlogListe'

const page = () => {
    return (
        <>
            < Header />
            {/* < Index /> */}
            < BlogListe />
            < Footer />
        </>
    )
}

export default page