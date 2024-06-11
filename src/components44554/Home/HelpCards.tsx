"use client";

import React, { useEffect, useState } from "react";
import PrimaryButton from "../PrimaryButton";
import { getData } from "@/shared/commonFunctions";
import { ICampaign } from "@/shared/interfaces/campaign.interface";

export default function HelpCards() {
  const [campaignData, setCampaignData] = useState<ICampaign[]>([]);
  const [loading, setLoading] = useState(false);

  // getting and setting data===========
  useEffect(() => {
    getData(setCampaignData, `campaign/list`, setLoading);
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-center pt-24 text-black sm:text-4xl md:text-4xl lg:leading-tight xl:text-5xl">
          Help Children ✨ In Need
        </h1>
        <p className="text-base font-medium pb-24  mt-4 text-center leading-7 text-gray-600 lg:px-8">
          Whether you have a team of 2 or 200, our shar everyone
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
          {campaignData?.map((item: any) => (
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
                  <p className="text-lg font-bold text-black">
                    {item?.campaign_name}
                  </p>
                  <p className="mt-6 text-xs font-medium tracking-widest text-gray-500 uppercase">
                    {item?.category_name}
                  </p>
                  <div className="flex items-end mt-1">
                    <p className="text-lg font-bold text-black">
                      {" "}
                      Targeted Amount : {item?.targeted_amount}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 mt-7 gap-x-4">
                    <PrimaryButton title="Donate Now" />

                    <a
                      href="#"
                      title=""
                      className="inline-flex items-center justify-center px-4 py-4 text-sm font-bold text-black transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                      role="button"
                    >
                      View Details
                    </a>
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
