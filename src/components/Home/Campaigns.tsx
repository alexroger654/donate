"use client";
import React, { useEffect, useState } from "react";
import { LuCalendarCheck, LuUserCircle2 } from "react-icons/lu";
import { Slider } from "../ui/slider";
import { cn } from "@/lib/utils";
import { ICampaign } from "@/shared/interfaces/campaign.interface";
import { getData } from "@/shared/commonFunctions";
import Link from "next/link";

export default function Campaigns() {
  const [loading, setLoading] = useState(false);
  const [campaignData, setCampaignData] = useState<ICampaign[]>([]);

  async function fetchData() {
    getData(setCampaignData, `campaign/list?status=active`, setLoading);
  }

  // getting and setting data===========
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url('/assets/home/home-banner-bg.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full  py-24 lg:px-16 px-4"
    >
      <div className="w-full h-full max-w-screen-xl mx-auto">
        <div className="w-full lg:w-[60%] mx-auto">
          <p className="text-xl tracking-wider  font-bold text-center text-muted-foreground mt-8">
            Trending Campaign
          </p>
          <h1 className="font-semibold tracking-wider  text-center text-primary-foreground text-3xl lg:text-5xl leading-tight  ">
            We are always where other people
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-2 h-3 transform -skew-x-12 bg-secondary " />
              <span className="relative inline-block ">need</span>
            </span>{" "}
            help{" "}
          </h1>
        </div>
        {/* ================= lg screen=================== */}
        <div className="hidden sm:grid lg:grid-cols-3 my-12 gap-8  ">
          {campaignData?.map((item) => (
            <Link
              key={item?._id}
              href={`/campaigns/details/${item?._id}`}
              className="group flex flex-col bg-white w-full rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]  relative "
            >
              <div className=" relative">
                <div className="w-full h-56 overflow-hidden rounded-t-xl ">
                  <img
                    className="w-full h-56   rounded-t-xl transition-all duration-700 group-hover:scale-125"
                    src={
                      item?.image_url ||
                      "https://dkprodimages.gumlet.io/campaign/cover/Help-specially-abled-in-Ujjain264282198.jpg?format=webp&w=700&dpr=1.0"
                    }
                    alt="Image Description"
                  />
                  <div className="bg-white border w-[90%] rounded-xl  shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-4 px-4 absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center justify-between">
                      <p className="text-primary-foreground font-semibold text-sm">
                        Goal: {item?.targeted_amount}
                      </p>
                      <p className="text-primary-foreground font-semibold text-sm">
                        {item.raised_amount / (item.targeted_amount / 100)}%
                      </p>
                    </div>
                    <Slider
                      defaultValue={[
                        item.raised_amount / (item.targeted_amount / 100) || 10,
                      ]}
                      max={100}
                      step={1}
                      className={cn("w-full mt-3 bg-red-100 rounded-full")}
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-4 mt-8">
                <h3 className="text-2xl font-semibold text-primary-foreground leading-snug tracking-wide   transition-all duration-500 cursor-pointer group-hover:text-primary">
                  {item?.campaign_name}
                </h3>
                {/* <p className="mt- text-md font-semibold text-muted-foreground">
                  {item?.campaign_description
                    ?.slice(0, 120)
                    ?.replace(/<\/?[^>]+(>|$)/g, "")}
                </p> */}
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

              <div className="bg-primary px-2 py-2 rounded-md text-white absolute top-2 left-2 text-xs ">
                {item?.category_name}
              </div>
            </Link>
          ))}
        </div>

        {/* ================= sm screen=================== */}
        <div className="flex items-center overflow-x-scroll sm:hidden  my-12 gap-4  ">
          {campaignData?.map((item) => (
            <Link
              key={item?._id}
              href={`/campaigns/details/${item?._id}`}
              className="group min-w-72 flex flex-col bg-white w-full rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]  relative "
            >
              <div className=" relative">
                <div className="w-full h-56 overflow-hidden rounded-t-xl ">
                  <img
                    className="w-full h-44   rounded-t-xl transition-all duration-700 group-hover:scale-125"
                    src={
                      item?.image_url ||
                      "https://dkprodimages.gumlet.io/campaign/cover/Help-specially-abled-in-Ujjain264282198.jpg?format=webp&w=700&dpr=1.0"
                    }
                    alt="Image Description"
                  />
                  <div className="bg-white border w-[90%] rounded-xl  shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-4 px-4 absolute -bottom-3 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center justify-between">
                      <p className="text-primary-foreground font-semibold text-sm">
                        Goal: {item?.targeted_amount}
                      </p>
                      <p className="text-primary-foreground font-semibold text-sm">
                        {item.raised_amount / (item.targeted_amount / 100)}%
                      </p>
                    </div>
                    <Slider
                      defaultValue={[
                        item.raised_amount / (item.targeted_amount / 100) || 10,
                      ]}
                      max={100}
                      step={1}
                      className={cn("w-full mt-3 bg-red-100 rounded-full")}
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-5 space-y-4 mt-3">
                <h3 className="text-sm font-semibold text-primary-foreground leading-snug tracking-wide   transition-all duration-500 cursor-pointer group-hover:text-primary">
                  {item?.campaign_name}
                </h3>
                {/* <p className="mt- text-md font-semibold text-muted-foreground">
                  {item?.campaign_description
                    ?.slice(0, 120)
                    ?.replace(/<\/?[^>]+(>|$)/g, "")}
                </p> */}
                <div className="grid grid-cols-2 border-t border-muted py-2">
                  <div className="flex items-center justify-center gap-2 border-r border-muted">
                    <div className="w-10 h-10 rounded-full bg-[#fceceb] flex items-center justify-center  text-gray-900 text-xl ">
                      <LuCalendarCheck />
                    </div>
                    <div>
                      <p className="text-primary-foreground font-semibold text-sm">
                        Date:
                      </p>
                      <p className="text-muted-foreground text-[10px] ">
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
                      <p className="text-muted-foreground text-[10px] ">
                        {item?.user_name}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary px-2 py-2 rounded-md text-white absolute top-2 left-2 text-xs ">
                {item?.category_name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
