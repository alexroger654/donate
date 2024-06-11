"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import PrimaryButton from "../PrimaryButton";
import { ICampaign } from "@/shared/interfaces/campaign.interface";
import { getData } from "@/shared/commonFunctions";
import Link from "next/link";
import { Button } from "../ui/button";

/////////////////// component /////////////////////////////

const HelpNow = () => {
  const [campaignData, setCampaignData] = useState<ICampaign[]>([]);
  const [loading, setLoading] = useState(false);

  // getting and setting data===========
  useEffect(() => {
    getData(setCampaignData, `campaign/list`, setLoading);
  }, []);

  return (
    <section>
      <div className="relative py-12 overflow-hidden bg-white sm:py-16 lg:py-20 xl:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="max-w-md mx-auto text-center xl:max-w-lg lg:mx-0 lg:text-left">
              <h1 className="text-3xl font-bold text-black sm:text-4xl md:text-5xl lg:leading-tight xl:text-6xl">
                Help Children ✨ In Need
              </h1>
              <p className="mt-5 text-lg font-medium text-black lg:mt-8">
                Buy & sell NFTs from world’s top artist
              </p>

              <div className="mt-8 lg:mt-10">
                <Button className="py-6 px-8">Explore Campaigns</Button>
              </div>

              <div className="mt-8 lg:mt-12">
                <svg
                  className="w-auto h-4 mx-auto text-gray-300 lg:mx-0"
                  viewBox="0 0 172 16"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 11 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 46 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 81 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 116 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 151 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 18 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 53 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 88 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 123 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 158 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 25 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 60 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 95 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 130 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 165 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 32 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 67 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 102 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 137 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 172 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 39 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 74 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 109 1)"
                  ></line>
                  <line
                    y1="-0.5"
                    x2="18.0278"
                    y2="-0.5"
                    transform="matrix(-0.5547 0.83205 0.83205 0.5547 144 1)"
                  ></line>
                </svg>
              </div>

              <div className="inline-grid grid-cols-2 mt-8 gap-x-8">
                <div>
                  <p className="text-4xl font-bold text-black">50k+</p>
                  <p className="mt-2 text-base font-medium text-gray-500">
                    Children Saved
                  </p>
                </div>

                <div>
                  <p className="text-4xl font-bold text-black">17k+</p>
                  <p className="mt-2 text-base font-medium text-gray-500">
                    Children Need Help
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full col-span-2 relative mt-12 lg:mt-0 lg:absolute lg:-translate-y-1/2 lg:translate-x-[35%] lg:top-1/2 ">
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: "#slider-button-right",
                  prevEl: "#slider-button-left",
                }}
                autoplay={true}
                slidesPerView={1.3}
              >
                {campaignData?.map((item) => (
                  <SwiperSlide key={item._id} className="max-w-[480px] p-6">
                    <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 ">
                      <div className="overflow-hidden bg-white rounded shadow-xl">
                        <div className="aspect-w-4 aspect-h-3">
                          <img
                            className="object-cover w-full h-80"
                            src={
                              item.image_url
                                ? item?.image_url
                                : "https://images.pexels.com/photos/5771459/pexels-photo-5771459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            }
                            alt={item?.campaign_name}
                          />
                        </div>
                        <div className="p-8 overflow-hidden">
                          <p className="text-lg font-bold text-black pr-5">
                            {item?.campaign_name}
                          </p>
                          <p className="mt-6 text-xs font-medium text-wrap text-gray-500 uppercase">
                            {item?.category_name}
                          </p>
                          <div className="flex items-end mt-1">
                            <p className="text-lg font-bold text-black">
                              Targeted Amount : {item?.targeted_amount}
                            </p>
                          </div>
                          <div className="grid grid-cols-2 mt-7 gap-x-4">
                            <Link href={`/campaigns/details/${item?._id}`}>
                              <Button className="py-6 px-8">Donate Now</Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HelpNow;
