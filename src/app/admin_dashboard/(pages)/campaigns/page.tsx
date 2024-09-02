"use client";

import { DonateNowModal } from "@/components/DonateNowModal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { getData, updateData } from "@/shared/commonFunctions";
import { ICampaign } from "@/shared/interfaces/campaign.interface";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { LuEye, LuTrash } from "react-icons/lu";
import { toast } from "sonner";
import RejectModal from "./(components)/RejectModal";

export default function MainPage() {
  const { data: session }: any = useSession();

  //states =========================
  const [campaignData, setCampaignData] = useState<ICampaign[]>([]);
  const [loading, setLoading] = useState(false);

  // getting and setting data===========
  useEffect(() => {
    getData(setCampaignData, `campaign/list`, setLoading);
  }, []);

  async function handleEventUpdate(
    id: string,
    message: string = "",
    status: string = "active"
  ) {
    await updateData(
      {
        status: status,
        rejectMessage: message,
      },
      "campaign",
      id,
      setLoading
    );
    getData(setCampaignData, `campaign/list`, setLoading);
    toast.success("Updated Successful");
  }

  return (
    <div>
      <section className=" relative z-10 bg-white rounded-lg p-5 min-h-[80vh] ">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
          <h2 className="text-lg font-semibold leading-7 mt-5 text-gray-900">
            Campaigns
          </h2>

          <div className="grid grid-cols-12">
            <div className="col-span-12  lg:pr-8 pt-14 pb-8  w-full max-xl:max-w-3xl max-xl:mx-auto">
              {/* ==================== campaign cards */}
              <div className="p-3">
                <div className="overflow-x-auto">
                  <table className="table-auto w-full">
                    <thead className="text-xs font-semibold uppercase py-3 text-gray-400 bg-gray-50">
                      <tr className=" mb-4">
                        <th className="py-3 whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Campaign Name
                          </div>
                        </th>
                        <th className=" whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Target Amount
                          </div>
                        </th>
                        <th className=" whitespace-nowrap">
                          <div className="font-semibold text-left">
                            Raised Amount
                          </div>
                        </th>
                        <th className=" whitespace-nowrap">
                          <div className="font-semibold text-left">Status</div>
                        </th>
                        <th className=" whitespace-nowrap">
                          <div className="font-semibold text-center">
                            Action
                          </div>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-sm divide-y divide-gray-100">
                      {campaignData?.map((item) => (
                        <tr key={item?._id} className="py-3 mb-2">
                          <td className=" whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="font-medium text-gray-800">
                                {item?.campaign_name?.slice(0, 50)}
                              </div>
                            </div>
                          </td>
                          <td className=" whitespace-nowrap">
                            <div className="text-left">
                              {item?.targeted_amount}
                            </div>
                          </td>
                          <td className=" whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              {item?.raised_amount}
                            </div>
                          </td>
                          <td className=" whitespace-nowrap">
                            <div className="text-left font-medium capitalize text-green-500">
                              {item?.status}
                            </div>
                          </td>
                          <td className=" flex items-center justify-center space-x-2">
                            <Link
                              target="_blank"
                              href={`/campaigns/details/${item?._id}`}
                              className=""
                            >
                              <Button size="icon">
                                <LuEye />
                              </Button>
                            </Link>
                            {item.status !== "active" && (
                              <Button
                                onClick={() => handleEventUpdate(item?._id as string)}
                                size="sm"
                                className="bg-green-500 text-white hover:bg-green-400"
                              >
                                Approve
                              </Button>
                            )}

                            <Dialog>
                              <DialogTrigger asChild>
                                <Button
                                  size="sm"
                                  className="bg-red-500 text-white hover:bg-red-700"
                                >
                                  Reject
                                </Button>
                              </DialogTrigger>
                              <RejectModal
                                id={item?._id}
                                handleEventUpdate={handleEventUpdate}
                              />
                            </Dialog>
                            <Button
                              // onClick={() => {
                              //   deleteData("category", item?._id, setLoading);
                              //   refetch();
                              // }}
                              size="icon"
                            >
                              <LuTrash />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
                Order Summary
              </h2>
              <div className="mt-8">
                <div className="flex items-center justify-between pb-6">
                  <p className="font-normal text-lg leading-8 text-black">
                    3 Items
                  </p>
                  <p className="font-medium text-lg leading-8 text-black">
                    $480.00
                  </p>
                </div>
                <form>
                  <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                    Shipping
                  </label>
                  <div className="flex pb-6">
                    <div className="relative w-full">
                      <div className=" absolute left-0 top-0 py-3 px-4">
                        <span className="font-normal text-base text-gray-300">
                          Second Delivery
                        </span>
                      </div>
                      <input
                        type="text"
                        className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                        placeholder="$5.00"
                      />
                      <button
                        id="dropdown-button"
                        data-target="dropdown-delivery"
                        className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                        type="button"
                      >
                        <svg
                          className="ml-2 my-auto"
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                            stroke="#6B7280"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="dropdown-delivery"
                        aria-labelledby="dropdown-delivery"
                        className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-10 bg-white right-0"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdown-button"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Shopping
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Images
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              News
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Finance
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                    Promo Code
                  </label>
                  <div className="flex pb-4 w-full">
                    <div className="relative w-full ">
                      <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                      <input
                        type="text"
                        className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                        placeholder="xxxx xxxx xxxx"
                      />
                      <button
                        id="dropdown-button"
                        data-target="dropdown"
                        className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                        type="button"
                      >
                        <svg
                          className="ml-2 my-auto"
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                            stroke="#6B7280"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <div
                        id="dropdown"
                        className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="dropdown-button"
                        >
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Shopping
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Images
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              News
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              Finance
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center border-b border-gray-200">
                    <button className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">
                      Apply
                    </button>
                  </div>
                  <div className="flex items-center justify-between py-8">
                    <p className="font-medium text-xl leading-8 text-black">
                      3 Items
                    </p>
                    <p className="font-semibold text-xl leading-8 text-indigo-600">
                      $485.00
                    </p>
                  </div>
                  <button className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700">
                    Checkout
                  </button>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
