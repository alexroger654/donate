import React from 'react'

export default function Partners() {
    return (
        <section className="py-10  sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-6 sm:gap-x-12 gap-y-12">
                    <div className="lg:col-span-2">
                        <h1 className="font-bold text-primary-foreground text-3xl lg:text-5xl leading-tight  capitalize ">
                            <span className="relative px-1">
                                <div className="absolute inset-x-0 bottom-2 h-3 transform -skew-x-12 bg-secondary " />
                                <span className="relative inline-block ">Alliances </span>
                            </span>{" "}
                            Built on Shared
                            <span className="font-normal">
                                {" "}
                                Values and Goals
                            </span>
                        </h1>
                        <p className="mt-3 text-sm font-semibold text-muted-foreground text-justify">At Galleria Foundation, we partner with organizations that share our values and commitment to making a positive impact. Together, we amplify our efforts to bring meaningful change to communities in need.</p>
                    </div>

                    <div className="lg:col-span-3 xl:col-span-4">
                        <div className="grid items-center max-w-4xl grid-cols-2 mx-auto lg:grid-cols-4 gap-x-10 gap-y-16">
                            <div>
                                <img className="object-contain w-full h-6 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-1.png" alt="" />
                            </div>

                            <div>
                                <img className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-2.png" alt="" />
                            </div>

                            <div>
                                <img className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-3.png" alt="" />
                            </div>

                            <div>
                                <img className="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-4.png" alt="" />
                            </div>

                            <div className="hidden lg:block">
                                <img className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-5.png" alt="" />
                            </div>

                            <div className="hidden lg:block">
                                <img className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-6.png" alt="" />
                            </div>

                            <div className="hidden lg:block">
                                <img className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-7.png" alt="" />
                            </div>

                            <div className="hidden lg:block">
                                <img className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-8.png" alt="" />
                            </div>

                            <div className="hidden lg:block">
                                <img className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-9.png" alt="" />
                            </div>

                            <div className="hidden lg:block">
                                <img className="object-contain w-full mx-auto h-7" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-10.png" alt="" />
                            </div>

                            <div className="hidden lg:block">
                                <img className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-11.png" alt="" />
                            </div>

                            <div className="hidden lg:block">
                                <img className="object-contain w-full h-8 mx-auto" src="https://cdn.rareblocks.xyz/collection/celebration/images/logos/3/logo-12.png" alt="" />
                            </div>
                        </div>

                        <div className="flex items-center justify-start mt-10 space-x-3 lg:hidden">
                            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 block"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-gray-300 block"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
