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
export default function page() {
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
    getData(
      setCampaignData,
      `campaign/list?userId=${session?.user?.id}`,
      setLoading
    );
  }

  console.log(selectedCategory);

  // getting and setting data===========
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      fetchSearchData();
    }
  }, [selectedCategory]);

  // render=============================
  return (
    <>
      <section className="py-4 relative">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* header ======================== */}
          <div className="flex flex-col lg:flex-row lg:items-center max-lg:gap-4 justify-between w-full">
            <span className="font-semibold text-2xl leading-8 text-black ml-2 mr-3 transition-all duration-500 group-hover:text-primary">
              Explore Campaign
            </span>
          </div>
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
            <div className="col-span-12 md:col-span-3 w-full max-md:max-w-md max-md:mx-auto">
              <div className="box rounded-xl border border-gray-300 bg-white p-6 w-full md:max-w-sm">
                <div className="flex items-center justify-between w-full pb-3 border-b border-gray-200 mb-7">
                  <p className="font-medium text-base leading-7 text-black ">
                    Filter Campaign
                  </p>
                  <p className="font-medium text-xs text-gray-500 cursor-pointer transition-all duration-500 hover:text-primary">
                    RESET
                  </p>
                </div>

                <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-600 w-full"
                >
                  Category
                </label>
                <div className="relative w-full mb-8">
                  <select
                    defaultValue={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-xl block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                  >
                    {categoryData?.map((item) => (
                      <option key={item?._id}>{item?.name}</option>
                    ))}
                  </select>
                  <svg
                    className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                      stroke="#111827"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>

                {/* <label
                  htmlFor="countries"
                  className="block mb-2 text-sm font-medium text-gray-600 w-full"
                >
                  Type
                </label>
                <div className="relative w-full mb-8">
                  <select
                    id="FROM"
                    className="h-12 border border-gray-300 text-gray-900 text-xs font-medium rounded-xl block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white"
                  >
                    <option selected>Write code</option>
                    <option value="option 1">option 1</option>
                    <option value="option 2">option 2</option>
                    <option value="option 3">option 3</option>
                    <option value="option 4">option 4</option>
                  </select>
                  <svg
                    className="absolute top-1/2 -translate-y-1/2 right-4 z-50"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0002 5.99845L8.00008 9.99862L3.99756 5.99609"
                      stroke="#111827"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div> */}
                {/* <button className="w-full py-4 flex items-center justify-center gap-2 rounded-xl bg-primary text-black  font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-primary hover:shadow-indigo-200  ">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4987 13.9997L13.1654 12.6663M13.832 7.33301C13.832 10.6467 11.1457 13.333 7.83203 13.333C4.51832 13.333 1.83203 10.6467 1.83203 7.33301C1.83203 4.0193 4.51832 1.33301 7.83203 1.33301C11.1457 1.33301 13.832 4.0193 13.832 7.33301Z"
                      stroke="black"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Search
                </button> */}
              </div>
            </div>

            {/* content=================================== */}
            <div className="col-span-12 md:col-span-9 px-2 lg:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-8 ">
                {campaignData?.map((item: any) => (
                  <div className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 whitespace-nowrap">
                    <div className="overflow-hidden bg-white rounded shadow-xl">
                      <div className="aspect-w-4 aspect-h-3">
                        <img
                          className="object-cover w-full h-60"
                          src={
                            item.image_url
                              ? item?.image_url
                              : "https://images.pexels.com/photos/5771459/pexels-photo-5771459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          }
                          alt={item?.campaign_name}
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-lg font-bold text-black">
                          {item?.campaign_name}
                        </p>
                        <p className="mt-6 text-xs font-medium tracking-widest text-gray-500 uppercase">
                          {item?.category_name}
                        </p>
                        <div className="flex items-end mt-1">
                          <p className="text-lg font-bold text-black">
                            ₹{item?.raised_amount || 0} raised out of ₹{" "}
                            {item?.targeted_amount}
                          </p>
                          <p className="ml-2 text-sm font-medium text-gray-500"></p>
                        </div>
                        <div className="grid grid-cols-2 mt-7 gap-x-4">
                          <Dialog>
                            <DialogTrigger asChild>
                              {/* <PrimaryButton title="Donate Now" /> */}
                              <Button className="py-8">Donate Now</Button>
                            </DialogTrigger>
                            <DonateNowModal
                              productName={item.campaign_name}
                              productId={item?._id}
                              raised_amount={item?.raised_amount}
                              refetch={fetchData}
                            />
                          </Dialog>

                          <Link
                            href={`/campaigns/details/${item?._id}`}
                            title=""
                            className="inline-flex items-center rounded-md justify-center px-4 py-4 text-sm font-bold text-black transition-all duration-200 bg-transparent border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                            role="button"
                          >
                            View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
