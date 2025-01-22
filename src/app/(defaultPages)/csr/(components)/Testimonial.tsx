import React from "react";

export default function Testimonial() {
  return (
    <section
      style={{
        backgroundImage: `url('/assets/home/home-banner-bg.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="relative w-full h-auto px-5   lg:px-20 lg:py-20 flex flex-col items-center mt-20 mb-20"
    >
      <div className="  flex flex-col items-center max-w-7xl mx-auto">
        <div className="relative w-[80%] h-full flex flex-col items-center">
          <h3 className="uppercase font-semibold text-primary text-lg my-5">
            testimonials
          </h3>
          <h1 className="font-bold text-primary-foreground text-3xl lg:text-4xl leading-tight  capitalize ">
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-2 h-2 transform -skew-x-12 bg-secondary " />
              <span className="relative inline-block "> Our client </span>
            </span>{" "}
            Reviews
            {/* <span className="font-normal">
                            {" "}
                            the first to arrive
                        </span> */}
          </h1>
          {/* <h4 className=" font-bold text-2xl lg:text-4xl  "></h4> */}
        </div>
        <div className="relative px-3 lg:px-20 grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 w-full mb-10">
          <figure className="relative bg-white dark:bg-gray-800 w-full h-auto rounded-xl shadow-md flex flex-col  items-center p-5">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800  rounded-full w-16 h-16 flex items-center justify-center">
              <img
                src="/testimonials/avatar13.jpg"
                alt=""
                className="h-12 w-12 rounded-full "
              />
            </div>
            <figcaption className="font-bold mt-6 text-gray-900 dark:text-white">
              Meera Joshi
            </figcaption>
            <figcaption className="text-xs text-primary">Supporter</figcaption>
            <blockquote className="text-sm text-pretty text-center mt-5 text-gray-700 dark:text-gray-300">
              I trust Galleria Foundation because they deliver on their
              promises. The updates I receive show how my small contribution is
              making a big difference in people’s lives. It’s truly rewarding!
            </blockquote>
          </figure>
          <figure className="relative bg-white dark:bg-gray-800 w-full h-auto rounded-xl shadow-md flex flex-col  items-center p-5">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800  rounded-full w-16 h-16 flex items-center justify-center">
              <img
                src="/testimonials/avatar24.jpg"
                alt=""
                className="h-12 w-12 rounded-full "
              />
            </div>
            <figcaption className="font-bold mt-6 text-gray-900 dark:text-white">
              Rahul Verma
            </figcaption>
            <figcaption className="text-xs text-primary">Donor</figcaption>
            <blockquote className="text-sm text-pretty text-center mt-5 text-gray-700 dark:text-gray-300">
              Being part of Galleria Foundation’s journey has been so
              fulfilling. Their efforts in education and healthcare are
              transforming lives, and I’m proud to play a small role in that.
            </blockquote>
          </figure>
          <figure className="relative bg-white dark:bg-gray-800 w-full h-auto rounded-xl shadow-md flex flex-col  items-center p-5">
            <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-800  rounded-full w-16 h-16 flex items-center justify-center">
              <img
                src="/testimonials/avatar23.jpg"
                alt=""
                className="h-12 w-12 rounded-full "
              />
            </div>
            <figcaption className="font-bold mt-6 text-gray-900 dark:text-white">
              Priya Kapoor
            </figcaption>
            <figcaption className="text-xs text-primary">
              Volunteer and Supporter
            </figcaption>
            <blockquote className="text-sm text-pretty text-center mt-5 text-gray-700 dark:text-gray-300">
              The team at Galleria Foundation does amazing work. Their
              commitment to empowering women and protecting the environment is
              inspiring. I’m happy to support their impactful initiatives.
            </blockquote>
          </figure>
          {/* <button className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center bg-primary rounded-full text-white hover:opacity-80">
                        <span className="sr-only">Previous Button</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-left">
                            <path d="M6 8L2 12L6 16">
                            </path>
                            <path d="M2 12H22">
                            </path>
                        </svg>
                    </button>
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center  bg-primary rounded-full text-white hover:opacity-80">
                        <span className="sr-only">Next Button</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-move-right">
                            <path d="M18 8L22 12L18 16">
                            </path>
                            <path d="M2 12H22">
                            </path>
                        </svg>
                    </button> */}
        </div>
      </div>
    </section>
  );
}
