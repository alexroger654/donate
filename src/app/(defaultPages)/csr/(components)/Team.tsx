import React from 'react'

export default function Team() {
    return (
        <section className="  ">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="font-bold text-primary-foreground text-4xl lg:text-5xl leading-tight  capitalize ">
                        <span className="relative px-1">
                            <div className="absolute inset-x-0 bottom-3 h-3 transform -skew-x-12 bg-secondary " />
                            <span className="relative inline-block "> Meet the Visionaries </span>
                        </span>{" "}
                        Behind Our
                        <span className="font-normal">
                            {" "}
                            Success
                        </span>
                    </h1>
                    <p className="mt-3 text-lg text-muted-foreground">At Galleria Foundation, our passionate and skilled team drives our mission forward. Together, we support communities, inspire hope, and work towards lasting change.</p>
                    <a href="/sign_up" title="" className="inline-flex items-center justify-center px-6 py-4 mt-12 text-base font-semibold text-white transition-all duration-200 bg-primary border border-transparent rounded-md " role="button">
                        <svg className="w-5 h-5 mr-2 -ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        Join Us Now
                    </a>
                </div>
            </div>

            <div className="container mx-auto 2xl:px-12">
                <img className="w-full mt-6" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/4/group-of-people.png" alt="" />
            </div>
        </section>

    )
}
