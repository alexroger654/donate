import { Button } from '@/components/ui/button'
import React from 'react'

export default function Hero() {
    return (
        <section className="py-10 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                    <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                        <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
                            <h1 className="font-bold text-primary-foreground text-4xl lg:text-5xl leading-tight  capitalize ">
                                <span className="relative px-1">
                                    <div className="absolute inset-x-0 bottom-3 h-5 transform -skew-x-12 bg-secondary " />
                                    <span className="relative inline-block "> We ensure </span>
                                </span>{" "}
                                transparency   by providing only essential relief materials,
                                <span className="font-normal">
                                    {" "}
                                    avoiding cash transactions
                                </span>
                            </h1>
                            <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">Through collaborationperse perspectives and strengths are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society.</p>
                        </div>
                        <Button size='lg'>
                            Get Started
                        </Button>
                    </div>
                    <img className="lg:mx-0 mx-auto h-full rounded-3xl object-cover" src="https://pagedone.io/asset/uploads/1717751272.png" alt="about Us image" />
                </div>
            </div>
        </section>

    )
}
