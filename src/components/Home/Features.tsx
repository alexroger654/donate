"use client";

import React, { useEffect, useState } from "react";
import { LuCalendarCheck, LuUserCircle2 } from "react-icons/lu";
import { Slider } from "../ui/slider";
import { cn } from "@/lib/utils";
import { IPost } from "@/shared/interfaces/post.interface";
import { getData } from "@/shared/commonFunctions";

export default function Features() {
  // states ====================================

  return (
    <section className="w-full  pb-16 lg:px-16 bg-white px-4">
      <div className="w-full h-full max-w-screen-xl mx-auto">
        <div className="w-full lg:w-[60%] mx-auto">
          <p className="text-xl tracking-wider  font-bold text-center text-muted-foreground mt-8">
            How It Works
          </p>
          <h1 className="font-semibold tracking-wider  text-center text-primary-foreground text-3xl lg:text-5xl leading-tight  ">
            Founded to empower all of humanity,
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-2 h-3 transform -skew-x-12 bg-secondary " />{" "}
              <span className="relative inline-block ">we strive</span>
            </span>{" "}
            for greatness.
          </h1>
        </div>
        <div className="grid lg:grid-cols-4 my-12 gap-8">
          {/* ================card */}
          <div className="group flex flex-col bg-[#eef4f8] p-3 w-full rounded-xl  ">
            <div className=" relative">
              <div className="w-full  overflow-hidden rounded-t-xl ">
                <img
                  className=" h-48 w-48 mx-auto    rounded-full transition-all duration-700 group-hover:scale-125"
                  src={"/assets/home/choose_cause.jpeg"}
                  alt="CHOOSE A CAUSE"
                />
              </div>
            </div>

            <div className="p-4 md:p-5 space-y-4 mt-0">
              <h3 className="text-xl text-center font-semibold text-primary-foreground leading-snug tracking-wide   transition-all duration-500 cursor-pointer group-hover:text-primary">
                CHOOSE A CAUSE
              </h3>
              <p className="mt-2 text-center text-md font-semibold text-muted-foreground">
                Browse different campaigns and select a cause.
              </p>
            </div>
          </div>
          {/* ================card */}
          <div className="group flex flex-col bg-[#eef4f8] p-3 w-full rounded-xl  ">
            <div className=" relative">
              <div className="w-full  overflow-hidden rounded-t-xl ">
                <img
                  className=" h-48 w-48 mx-auto    rounded-full transition-all duration-700 group-hover:scale-125"
                  src={"/assets/home/product.jpeg"}
                  alt="CHOOSE A CAUSE"
                />
              </div>
            </div>

            <div className="p-4 md:p-5 space-y-4 mt-0">
              <h3 className="text-xl text-center font-semibold text-primary-foreground leading-snug tracking-wide   transition-all duration-500 cursor-pointer group-hover:text-primary">
                Select type of Donation
              </h3>
              <p className="mt-2 text-center text-md font-semibold text-muted-foreground">
                Select the type of donation that aligns with your passion and
                values.Your help can change lives.
              </p>
            </div>
          </div>
          {/* ================card */}
          <div className="group flex flex-col bg-[#eef4f8] p-3 w-full rounded-xl  ">
            <div className=" relative">
              <div className="w-full  overflow-hidden rounded-t-xl ">
                <img
                  className=" h-48 w-48 mx-auto    rounded-full transition-all duration-700 group-hover:scale-125"
                  src={"/assets/home/process.jpeg"}
                  alt="CHOOSE A CAUSE"
                />
              </div>
            </div>

            <div className="p-4 md:p-5 space-y-4 mt-0">
              <h3 className="text-xl text-center font-semibold text-primary-foreground leading-snug tracking-wide   transition-all duration-500 cursor-pointer group-hover:text-primary">
                ORDER PROCESSING
              </h3>
              <p className="mt-2 text-center text-md font-semibold text-muted-foreground">
                Checkout and pay for your contributions.
              </p>
            </div>
          </div>

          {/* ================card */}
          <div className="group flex flex-col bg-[#eef4f8] p-3 w-full rounded-xl  ">
            <div className=" relative">
              <div className="w-full  overflow-hidden rounded-t-xl ">
                <img
                  className=" h-48 w-48 mx-auto    rounded-full transition-all duration-700 group-hover:scale-125"
                  src={"/assets/home/report.jpeg"}
                  alt="CHOOSE A CAUSE"
                />
              </div>
            </div>

            <div className="p-4 md:p-5 space-y-4 mt-0">
              <h3 className="text-xl text-center font-semibold text-primary-foreground leading-snug tracking-wide   transition-all duration-500 cursor-pointer group-hover:text-primary">
                Track Your Impact
              </h3>
              <p className="mt-2 text-center text-md font-semibold text-muted-foreground">
                Stay updated on how your donation is making a difference in the
                community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
