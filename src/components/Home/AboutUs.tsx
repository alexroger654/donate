import React from "react";
import { LuCheckCircle } from "react-icons/lu";

export default function AboutUs() {
  return (
    <div className="py-24 lg:px-16 px-4 max-w-screen-xl mx-auto">
      <div className="grid gap-5 row-gap-10 lg:grid-cols-2">
        <div>
          <img
            className="object-cover w-full  rounded  h-full"
            src="/assets/about.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6 space-y-6">
            <p className="text-xl tracking-wider  font-bold  text-muted-foreground ">
              Are you ready to explore
            </p>
            <h1 className="font-semibold tracking-wider   text-primary-foreground text-3xl lg:text-5xl leading-tight  ">
              {`We are India's most crowd funding trusted and`}
              <span className="relative px-1">
                <div className="absolute inset-x-0 bottom-2 h-3 transform -skew-x-12 bg-secondary " />
                <span className="relative inline-block "> transparent</span>
              </span>{" "}
              <span className="font-normal">
                platform, dedicated to creating social impact
              </span>
            </h1>
            <p className="text-lg font-semibold text-muted-foreground md:text-lg">
              Our unique model enables global donors to fund essential products
              for Indian NGOs and charities, which we then deliver directly to
              them.
            </p>
          </div>

          <div className="grid space-y-3 sm:gap-2 sm:grid-cols-2 sm:space-y-0">
            <ul className="space-y-3 text-muted-foreground text-lg font-semibold ">
              <li className="flex">
                <span className="mr-1 mt-1 text-primary">
                  <LuCheckCircle />
                </span>
                A slice of heaven
              </li>
              <li className="flex">
                <span className="mr-1 mt-1 text-primary">
                  <LuCheckCircle />
                </span>
                Disrupt inspire
              </li>
              <li className="flex">
                <span className="mr-1 mt-1 text-primary">
                  <LuCheckCircle />
                </span>
                Preliminary thinking
              </li>
            </ul>
            <ul className="space-y-3 text-muted-foreground text-lg font-semibold ">
              <li className="flex">
                <span className="mr-1 mt-1 text-primary">
                  <LuCheckCircle />
                </span>
                Flipboard curmudgeon
              </li>
              <li className="flex">
                <span className="mr-1 mt-1 text-primary">
                  <LuCheckCircle />
                </span>
                Storage shed
              </li>
              <li className="flex">
                <span className="mr-1 mt-1 text-primary">
                  <LuCheckCircle />
                </span>
                Satoshi Nakamoto
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
