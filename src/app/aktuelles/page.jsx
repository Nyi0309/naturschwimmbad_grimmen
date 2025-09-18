import Aktuelles from '@/components/aktuelles/Aktuelles'
import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import PageWrapper from '@/components/PageWrapper'
import Cta from '@/components/startseite/Cta'
import React from 'react'

const Page = () => {
    return (
        <>
            <PageWrapper>
                <Nav />
                <div className='section'>
                    <Aktuelles />
                    <Cta />
                </div>
                <Footer />
            </PageWrapper>
        </>
    )
}

export default Page