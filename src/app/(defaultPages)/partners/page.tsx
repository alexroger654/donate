import React from 'react'
import Hero from './(components)/Hero'
import Contact from './(components)/Contact'
import WhyUs from './(components)/WhyUs'

export default function page() {
    return (
        <div>
            <Hero />
            <WhyUs />
            <Contact />
        </div>
    )
}
