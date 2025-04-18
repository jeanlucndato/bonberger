import React from 'react'
import PastorCard from './pasteurCard';
import Image from 'next/image';
import data from './data';
import Header from '../component/Header'
import Footer from '../component/Footer';

const PastorPage = () => {
    return (
        <>

            <Header />
            {/* <div className="container mx-auto py-4 pt-29"> */}
            <div className="container mx-auto py-4 pt-8">
                <div className="grid grid-cols-1 gap-4">
                    {data.map((item) => (
                        <PastorCard
                            key={item.id}
                            imageSrc={item.image}
                            title={item.title}
                            text={item.text}
                        />
                    ))}
                </div>
            </div>
            <Footer />

        </>


    )
}

export default PastorPage