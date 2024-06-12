import React from "react";
import { Button } from "../ui/button";

export default function Banner() {
  return (
    <div className="relative min-h-screen">
      <img
        className="absolute inset-0 w-full h-full object-cover object-top"
        src="/assets/home/donat_banner.png"
        alt="hero background image"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full bg-black bg-opacity-30 backdrop-blur-sm"
      ></div>
      <div className="relative flex items-center justify-center  container m-auto  h-screen">
        <div className="mb-12  space-y-6 md:mb-20  lg:w-8/12 lg:mx-auto">
          <p className="text-white/90 font-semibold text-xl text-center ">
            We are here to stop poverty
          </p>
          <h3 className="text-white text-center text-3xl font-bold sm:text-4xl md:text-6xl leading-relaxed  tracking-wide">
            We are fundraising for the people who are fighting against poverty
          </h3>
          <Button className=" mx-auto block h-14 text-xl px-14">
            Explore Campaigns{" "}
          </Button>
        </div>
      </div>
    </div>
  );
}
