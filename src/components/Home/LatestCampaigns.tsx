"use client";

import React, { useEffect, useState } from "react";
import { LuCalendarCheck, LuUserCircle2 } from "react-icons/lu";
import { Slider } from "../ui/slider";
import { cn } from "@/lib/utils";
import { IPost } from "@/shared/interfaces/post.interface";
import { getData } from "@/shared/commonFunctions";

export default function LatestCampaigns() {
  // states ====================================
  const [postData, setPostData] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  // getting and setting data===========
  useEffect(() => {
    getData(setPostData, "blog_post/list", setLoading);
  }, []);

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
          {postData?.map((item) => (
            <div
              key={item?._id}
              className="group flex flex-col bg-white w-full rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]  "
            >
              <div className=" relative">
                <div className="w-full h-56 overflow-hidden rounded-t-xl ">
                  <img
                    className="w-full h-56   rounded-t-xl transition-all duration-700 group-hover:scale-125"
                    src={item?.imageUrl}
                    alt={item?.title}
                  />
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-4 mt-2">
                <p className=" text-md font-semibold text-primary">
                  # {item?.tag}
                </p>
                <h3 className="text-2xl font-semibold text-primary-foreground leading-snug tracking-wide   transition-all duration-500 cursor-pointer group-hover:text-primary">
                  {item?.title}
                </h3>
                <p className="mt- text-md font-semibold text-muted-foreground">
                  {item?.pageContent
                    ?.replace(/<\/?[^>]+(>|$)/g, "")
                    ?.slice(0, 40)}
                  ...
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
                        {item?.createdAt?.slice(0, 10)}
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
                        {item?.userName}
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
