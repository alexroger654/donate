import React from "react";
import { LuCalendarCheck, LuUserCircle2 } from "react-icons/lu";
import { Slider } from "../ui/slider";
import { cn } from "@/lib/utils";

export default function LatestCampaigns() {
  return (
    <section
      style={{
        backgroundImage: `url('/assets/home/home-banner-bg.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full  py-24 lg:px-16"
    >
      <div className="w-full h-full max-w-screen-xl mx-auto">
        <div className="w-full lg:w-[60%] mx-auto">
          <p className="text-xl tracking-wider  font-bold text-center text-muted-foreground mt-8">
            Our Latest News
          </p>
          <h1 className="font-semibold tracking-wider  text-center text-primary-foreground text-3xl lg:text-5xl leading-tight  ">
            Check all our latest
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-2 h-3 transform -skew-x-12 bg-secondary " />{" "}
              <span className="relative inline-block "> news and</span>
            </span>{" "}
            updates
          </h1>
        </div>
        <div className="grid lg:grid-cols-3 my-12 gap-8">
          {[...Array(6)]?.map((item) => (
            <div className="group flex flex-col bg-white w-full rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]  ">
              <div className=" relative">
                <div className="w-full h-56 overflow-hidden rounded-t-xl ">
                  <img
                    className="w-full h-56   rounded-t-xl transition-all duration-700 group-hover:scale-125"
                    src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                    alt="Image Description"
                  />
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-4 mt-2">
                <p className=" text-md font-semibold text-primary">
                  # Child Education
                </p>
                <h3 className="text-2xl font-semibold text-primary-foreground leading-snug tracking-wide   transition-all duration-500 cursor-pointer group-hover:text-primary">
                  New era for children learning and remove discrimination
                </h3>
                <p className="mt- text-md font-semibold text-muted-foreground">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="grid grid-cols-2 border-t border-muted py-2">
                  <div className="flex items-center justify-center gap-2 border-r border-muted">
                    <div className="w-10 h-10 rounded-full bg-[#fceceb] flex items-center justify-center  text-gray-900 text-xl ">
                      <LuCalendarCheck />
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold text-sm">
                        Date:
                      </p>
                      <p className="text-muted-foreground text-xs ">
                        20 Dec, 2021
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2 ">
                    <div className="w-10 h-10 rounded-full bg-[#fceceb]  flex items-center justify-center  text-gray-900 text-xl ">
                      <LuUserCircle2 />
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold text-sm">
                        By:
                      </p>
                      <p className="text-muted-foreground text-xs ">
                        Tausif Abid
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
