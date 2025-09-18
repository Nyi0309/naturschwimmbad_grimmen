import Footer from '@/components/Footer'
import Nav from '@/components/Nav'
import PageWrapper from '@/components/PageWrapper'
import React from 'react'

const page = () => {
    return (
        <>
            <PageWrapper>
                <Nav />
                <div className='section'>
                    <section className='section'>
                        <div className="container mx-auto">Datenschutz</div>
                    </section>
                </div>
                <Footer />
            </PageWrapper>
        </>
    )
}

export default page