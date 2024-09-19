import { Button } from '@/components/ui/button'
import React from 'react'

export default function Hero() {
    return (
        <section
            style={{
                backgroundImage: `url('/assets/home/home-banner-bg.png')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className="w-full  h-screen max-h-[700px] bg-slate-100">
            <main className=" w-full h-full relative flex-col items-start lg:pt-14 mx-auto ">
                <section className="relative overflow-hidden bg-gradient-to-t from-blue-50 via-transparent to-transparent lg:py-16 ">

                    <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8">
                        <div className="mx-auto max-w-screen-xl px-2.5 flex flex-col items-center justify-center text-center h-full w-full py-6">

                            <h1 className="font-bold text-primary-foreground text-4xl lg:text-7xl leading-tight  capitalize ">
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
                            <p className="text-lg text-muted-foreground max-w-4xl mt-10">Ensuring Transparency in Fund Utilization: We focus on delivering essential relief materials directly to those in need, avoiding cash transactions to maintain accountability and trust</p>
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-5 mt-5">
                                <Button size='lg' className='font-semibold'>Get Started</Button>
                                <Button variant='outline' className='border-primary text-primary font-semibold' size='lg'>Get Started</Button>


                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    )
}
