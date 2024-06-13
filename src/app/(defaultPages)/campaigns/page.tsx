"use client";

import PrimaryButton from "@/components/PrimaryButton";
import { getData } from "@/shared/commonFunctions";
import { ICampaign } from "@/shared/interfaces/campaign.interface";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { DonateNowModal } from "@/components/DonateNowModal";
import { Button } from "@/components/ui/button";
import { ICategory } from "@/shared/interfaces/category.interface";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { LuCalendarCheck, LuUserCircle2 } from "react-icons/lu";
import Loading from "@/components/Loading";
export default function MainPage() {
  const [campaignData, setCampaignData] = useState<ICampaign[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryData, setCategoryData] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);
  const { data: session }: any = useSession();

  async function fetchSearchData() {
    getData(
      setCampaignData,
      `campaign/list?category=${selectedCategory}`,
      setLoading
    );
  }

  async function fetchData() {
    getData(setCategoryData, "category/list", setLoading);
    getData(setCampaignData, `campaign/list?status=active`, setLoading);
  }

  // getting and setting data===========
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchSearchData();
    }
  }, [selectedCategory]);

  if (loading) {
    return <Loading />;
  }

  // render=============================
  return (
    <>
      <section
        style={{
          backgroundImage: `url('/assets/home/home-banner-bg.png')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="py-4 relative pb-96"
      >
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* devider ======================== */}
          <svg
            className="my-7 w-full"
            xmlns="http://www.w3.org/2000/svg"
            width="1216"
            height="2"
            viewBox="0 0 1216 2"
            fill="none"
          >
            <path d="M0 1H1216" stroke="#E5E7EB" />
          </svg>
          <div className="grid grid-cols-12">
            {/* side bar =========================== */}
            <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto mb-10">
              <div className="box rounded-xl  bg-white p-3 w-full md:max-w-sm shadow-[0_8px_30px_rgb(0,0,0,0.12)] pb-12">
                <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                  <p className=" text-base leading-7 text-primary-foreground font-bold ">
                    Categories
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-5  ">
                  {categoryData?.map((item) => (
                    <div
                      onClick={() => setSelectedCategory(item?.name)}
                      key={item?._id}
                      className="border rounded-full     mb-6 h-20 w-20 cursor-pointer   mx-auto bg-white transform duration-700 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]   "
                    >
                      <img
                        src={item?.image_url}
                        alt=""
                        className="w-full h-full"
                      />
                      <p className="text-primary-foreground text-center text-xs mt-2 mb-5 capitalize">
                        {item?.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* content=================================== */}
            <div className="col-span-12 md:col-span-9 px-2 lg:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 ">
                {campaignData?.map((item) => (
                  <Link
                    key={item?._id}
                    href={`/campaigns/details/${item?._id}`}
                    className="group flex flex-col bg-white w-full rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]  "
                  >
                    <div className=" relative">
                      <div className="w-full h-40 overflow-hidden rounded-t-xl ">
                        <img
                          className="w-full h-40   rounded-t-xl transition-all duration-700 group-hover:scale-125"
                          src="https://dkprodimages.gumlet.io/campaign/cover/Support-Srotoshwini-Trust1150894626.jpeg?format=webp&w=700&dpr=1.0"
                          alt="Image Description"
                        />
                        <div className="bg-white border w-[90%] rounded-xl  shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-2 px-4 absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                          <div className="flex items-center justify-between">
                            <p className="text-primary-foreground font-semibold text-sm">
                              Goal: {item?.targeted_amount}
                            </p>
                            <p className="text-primary-foreground font-semibold text-sm">
                              {item.raised_amount /
                                (item.targeted_amount / 100)}
                              %
                            </p>
                          </div>
                          <Slider
                            defaultValue={[
                              item.raised_amount /
                                (item.targeted_amount / 100) || 10,
                            ]}
                            max={100}
                            step={1}
                            className={cn("w-full mt-3")}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="p-4 md:p-5 space-y-4 mt-8">
                      <h3 className="text-lg font-semibold text-primary-foreground leading-snug tracking-wide   transition-all duration-500 cursor-pointer group-hover:text-primary">
                        {item?.campaign_name}
                      </h3>
                      {/* <p className="mt- text-sm font-semibold text-muted-foreground">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p> */}
                      <div className="grid grid-cols-2 border-t border-muted py-2">
                        <div className="flex items-center justify-center gap-2 border-r border-muted">
                          <div className="w-7 h-7 rounded-full bg-[#fceceb] flex items-center justify-center  text-gray-900 text-sm ">
                            <LuCalendarCheck />
                          </div>
                          <div>
                            <p className="text-primary-foreground font-semibold text-xs">
                              Date:
                            </p>
                            <p className="text-muted-foreground text-xs ">
                              {item?.end_date?.slice(0, 10)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center justify-center gap-2 ">
                          <div className="w-7 h-7 rounded-full bg-[#fceceb]  flex items-center justify-center  text-gray-900 text-sm ">
                            <LuUserCircle2 />
                          </div>
                          <div>
                            <p className="text-primary-foreground font-semibold text-xs">
                              By:
                            </p>
                            <p className="text-muted-foreground text-xs ">
                              {item?.beneficiary_party_name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
