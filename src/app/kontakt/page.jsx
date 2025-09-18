import Footer from '@/components/Footer'
import Kontakt from '@/components/kontakt/Kontakt'
import Nav from '@/components/Nav'
import PageWrapper from '@/components/PageWrapper'
import React from 'react'

const page = () => {
    return (
        <>
            <PageWrapper>
                <Nav />
                <div className='section'>
                    <Kontakt />
                </div>
                <Footer />
            </PageWrapper>
        </>
    )
}

export default page