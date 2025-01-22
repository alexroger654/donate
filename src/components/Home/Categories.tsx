import Link from "next/link";
import React from "react";

export default function Categories() {
  return (
    <section>
      <h1 className="text-5xl font-bold text-center mt-[80px]">
        Your Help, the Strength of Our Mission!
      </h1>
      <div className="bg-white  max-w-screen-xl grid grid-cols-2 gap-8 lg:grid-cols-4 py-24 px-2 lg:px-16  mx-auto space-y-10 lg:space-y-0 ">
        {/* card */}
        <Link
          href="/campaigns"
          className="w-full lg:h-72 h-48  bg-[#cae4f7] group p-6 rounded-3xl transform duration-700 ease-linear delay-150 hover:translate-y-5 relative"
        >
          <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] -mt-16  rounded-full h-20 w-20  lg:h-32 lg:w-32 mx-auto bg-white transform duration-700 transition-all  group-hover:-mt-12 ">
            <img
              src="/assets/home/category.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm lg:text-lg font-semibold text-muted-foreground">
              Donate for
            </p>
            <h4 className="font-semibold text:lg lg:text-2xl text-primary-foreground leading-tight">
              Education
            </h4>
            <p className="text-sm lg:text-lg  font-semibold text-primary">
              More details...
            </p>
          </div>
          <img
            src="/assets/home/round.png"
            className="absolute right-5 bottom-8 hidden lg:block"
            alt=""
          />
        </Link>
        {/* card */}
        <Link
          href="/campaigns"
          className="w-full lg:h-72 h-48 bg-[#fdf0dd] group p-6 rounded-3xl transform duration-700 ease-linear delay-150 hover:translate-y-5 relative"
        >
          <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] -mt-16  rounded-full h-20 w-20  lg:h-32 lg:w-32 mx-auto bg-white transform duration-700 transition-all  group-hover:-mt-12 ">
            <img
              src="/assets/home/category3.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm  lg:text-lg font-semibold text-muted-foreground">
              Donate for
            </p>
            <h4 className="font-semibold text:lg lg:text-2xl text-primary-foreground leading-tight">
              Environment
            </h4>
            <p className="text-sm lg:text-lg  font-semibold text-primary">
              More details...
            </p>
          </div>
          <img
            src="/assets/home/round.png"
            className="absolute right-5 bottom-8 hidden lg:block"
            alt=""
          />
        </Link>
        {/* card */}
        <Link
          href="/campaigns"
          className="w-full lg:h-72 h-48  bg-[#d2f4f4] group p-6 rounded-3xl transform duration-700 ease-linear delay-150 hover:translate-y-5 relative"
        >
          <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] -mt-16  rounded-full h-20 w-20  lg:h-32 lg:w-32 mx-auto bg-white transform duration-700 transition-all  group-hover:-mt-12 ">
            <img
              src="/assets/home/category1.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm lg:text-lg font-semibold text-muted-foreground">
              Donate for
            </p>
            <h4 className="font-semibold text:lg lg:text-2xl text-primary-foreground leading-tight">
              Medical
            </h4>
            <p className="text-sm lg:text-lg  font-semibold text-primary">
              More details...
            </p>
          </div>
          <img
            src="/assets/home/round.png"
            className="absolute right-5 bottom-8 hidden lg:block"
            alt=""
          />
        </Link>
        {/* card */}
        <Link
          href="/campaigns"
          className="w-full lg:h-72 h-48  bg-[#e0eafd] group p-6 rounded-3xl transform duration-700 ease-linear delay-150 hover:translate-y-5 relative"
        >
          <div className="shadow-[0_8px_30px_rgb(0,0,0,0.12)] -mt-16  rounded-full h-20 w-20  lg:h-32 lg:w-32 mx-auto bg-white transform duration-700 transition-all  group-hover:-mt-12 ">
            <img
              src="/assets/home/category2.png"
              alt=""
              className="w-full h-full"
            />
          </div>
          <div className="space-y-3">
            <p className="text-sm lg:text-lg font-semibold text-muted-foreground">
              Donate for
            </p>
            <h4 className="font-semibold text:lg lg:text-2xl text-primary-foreground leading-tight">
              Emergency
            </h4>
            <p className="text-sm lg:text-lg  font-semibold text-primary">
              More details...
            </p>
          </div>
          <img
            src="/assets/home/round.png"
            className="absolute right-5 bottom-8 hidden lg:block"
            alt=""
          />
        </Link>
      </div>
    </section>
  );
}
