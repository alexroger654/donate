import React from 'react'
import Hero from './(components)/Hero'
import About from './(components)/About'
import HowWeWork from './(components)/HowWeWork'
import Status from './(components)/Status'
import FounderMessage from './(components)/FounderMessage'
import Testimonial from './(components)/Testimonial'
import Partners from './(components)/Partners'
import Team from './(components)/Team'

export default function Page() {
    return (
        <div className='space-y-24'>

            <Hero />
            <About />
            <HowWeWork />
            <Status />
            <Team />
            {/* <FounderMessage /> */}
            <Partners />
            <Testimonial />
        </div>
    )
}
