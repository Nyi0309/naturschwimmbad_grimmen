import Footer from '@/components/Footer'
import AktuelleGeschichte from '@/components/geschichte/AktuelleGeschichte'
import Geschichte from '@/components/geschichte/Geschichte'
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
                    <Geschichte />
                    <Cta />
                    <AktuelleGeschichte />
                </div>
                <Footer />
            </PageWrapper>
        </>
    )
}

export default Page