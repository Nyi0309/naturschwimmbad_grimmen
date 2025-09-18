import Footer from '@/components/Footer'
import Galerie from '@/components/galerie/Galerie'
import Nav from '@/components/Nav'
import PageWrapper from '@/components/PageWrapper'
import React from 'react'

const Page = () => {
    return (
        <PageWrapper>
            <Nav />
            <div className='section'>
                <Galerie />
            </div>
            <Footer />
        </PageWrapper>
    )
}

export default Page