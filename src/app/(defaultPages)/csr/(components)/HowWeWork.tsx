import React from 'react'

export default function HowWeWork() {
    return (
        <div
            style={{
                backgroundImage: `url('/assets/home/home-banner-bg.png')`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
            className=" mx-auto rounded-xl py-10 grid max-w-screen-xl grid-cols-1 text-white pl-6 pr-4 sm:px-20 lg:grid-cols-3">
            <div className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
                <h1 className="font-bold text-primary-foreground text-3xl lg:text-5xl leading-tight  capitalize ">
                    <span className="relative px-1">
                        <div className="absolute inset-x-0 bottom-2 h-3 transform -skew-x-12 bg-secondary " />
                        <span className="relative inline-block ">    In times </span>
                    </span>{" "}
                    {`of need, we're`}
                    <span className="font-normal">
                        {" "}
                        the first to arrive
                    </span>
                </h1>

            </div>
            <div className="col-span-2 mt-10 grid grid-cols-1 gap-6 rounded-2xl bg-white shadow-sm p-5 sm:p-10 md:grid-cols-2 lg:mt-0">
                <div className="relative flex gap-5">
                    <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full text-lg text-gray-200 sm:relative md:bg-transparent md:text-5xl">01</div>
                    <div className="">
                        <h3 className="text-xl font-semibold text-primary-foreground">Assessment</h3>
                        <p className="text-sm font-semibold text-muted-foreground">Understand the gravity of the disaster</p>

                    </div>
                </div>
                <div className="relative flex gap-5">
                    <div className=" absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full text-lg text-gray-200 sm:relative md:bg-transparent md:text-5xl">02</div>
                    <div className="">
                        <h3 className="text-xl font-semibold text-primary-foreground">Procurement</h3>
                        <p className="text-sm font-semibold text-muted-foreground">Procuring raw materials from our trusted list of vendors</p>

                    </div>
                </div>
                <div className="relative flex gap-5">
                    <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full text-lg text-gray-200 sm:relative md:bg-transparent md:text-5xl">03</div>
                    <div className="">
                        <h3 className="text-xl font-semibold text-primary-foreground">Delivery</h3>
                        <p className="text-sm font-semibold text-muted-foreground">Delivery of relief materials to NGOs operating directly in disaster-affected areas</p>

                    </div>
                </div>
                {/* <div className="relative flex gap-5">
                    <div className="absolute -left-12 sm:left-auto flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-lg text-gray-500 sm:relative md:bg-transparent md:text-5xl">04</div>
                    <div className="">
                        <h3 className="text-xl font-semibold">Ending with a hook</h3>
                        <p className="text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
                    </div>
                </div> */}
            </div>
        </div>

    )
}
