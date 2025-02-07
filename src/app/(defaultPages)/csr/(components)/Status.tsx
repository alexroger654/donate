import React from 'react'

export default function Status() {
    return (
        <section
            style={{
                backgroundImage: `url('/assets/home/home-banner-bg.png')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className="py-10  leading-6 text-blue-900 sm:py-16 lg:py-24">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="font-bold text-primary-foreground text-3xl lg:text-5xl leading-tight  capitalize ">
                        <span className="relative px-1">
                            <div className="absolute inset-x-0 bottom-2 h-3 transform -skew-x-12 bg-secondary " />
                            <span className="relative inline-block "> We are connected </span>
                        </span>{" "}
                        till the last  mile
                        <span className="font-normal">
                            {" "}
                            across India
                        </span>
                    </h1>

                </div>

                <div className="mt-8 grid  grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-8 lg:mt-16">
                    <div className="relative overflow-hidden rounded-xl shadow border-t-4 border-secondary bg-white">
                        <div className="py-10 px-6">
                            <div className="flex items-center">
                                <h3 className="relative ml-2 inline-block text-primary-foreground text-4xl font-bold leading-none">
                                    <span className="absolute -top-2 rounded-full h-1  w-[60%] bg-secondary"></span>
                                    200+
                                </h3>
                                <span className="ml-3 text-base  capitalize text-muted-foreground font-semibold">Districts</span>
                            </div>

                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl shadow border-t-4 border-secondary bg-white">
                        <div className="py-10 px-6">
                            <div className="flex items-center">
                                <h3 className="relative ml-2 text-primary-foreground inline-block text-4xl font-bold leading-none">
                                    <span className="absolute -top-2 rounded-full h-1  w-[60%] bg-secondary"></span>
                                    16+
                                </h3>
                                <span className="ml-3 text-base  capitalize text-muted-foreground font-semibold">Total NGOs</span>
                            </div>

                        </div>
                    </div>

                    <div className="relative overflow-hidden rounded-xl shadow border-t-4 border-secondary bg-white">
                        <div className="py-10 px-6">
                            <div className="flex items-center">
                                <h3 className="relative ml-2 text-primary-foreground inline-block text-4xl font-bold leading-none">
                                    <span className="absolute -top-2 rounded-full h-1  w-[60%] bg-secondary"></span>
                                    15+
                                </h3>
                                <span className="ml-3 text-base  capitalize text-muted-foreground font-semibold">States</span>
                            </div>

                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-xl shadow border-t-4 border-secondary bg-white">
                        <div className="py-10 px-6">
                            <div className="flex items-center">
                                <h3 className="relative ml-2 text-primary-foreground inline-block text-4xl font-bold leading-none">
                                    <span className="absolute -top-2 rounded-full h-1  w-[60%] bg-secondary"></span>
                                    50+
                                </h3>
                                <span className="ml-3 text-base  capitalize text-muted-foreground font-semibold">Relief projects</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
