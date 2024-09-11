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
import { ICategory } from "@/shared/interfaces/category.interface";

export default function MainPage() {
  const { data: session }: any = useSession();

  //states =========================
  const [campaignData, setCampaignData] = useState<ICampaign[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')
  const [status, setStatus] = useState('')
  const [category, setCategory] = useState('')
  const [categoryData, setCategoryData] = useState<ICategory[]>([]);





  async function getCampaign() {

  }



  // getting and setting data===========
  useEffect(() => {
    getData(setCampaignData, `campaign/list?category_Id=${category}&&status=${status}&&name=${searchQuery}`, setLoading);
  }, [category, status, searchQuery]);



  useEffect(() => {
    getData(setCategoryData, "category/list", setLoading);
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
          {/* --------------- filters --------------- */}
          <div className="flex items-center justify-between mt-14">
            <div>
              <input defaultValue={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text"
                className="max-w-56 bg-gray-100 text-sm outline-none px-4 py-2 rounded-lg"
                placeholder="search" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select onChange={(e) => setStatus(e?.target?.value)} className="max-w-56 bg-gray-100 text-sm outline-none px-4 py-2 rounded-lg" name="" id="">
                <option value="">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="onHold">On Hold</option>
                <option value="rejected">Rejected</option>
              </select>
              <select onChange={(e) => setCategory(e?.target?.value)} className="max-w-56 bg-gray-100 text-sm outline-none px-4 py-2 rounded-lg" name="" id="">
                <option value="">All Category</option>
                {
                  categoryData?.map(item => <option key={item?._id} value={item?._id}>{item?.name}</option>)
                }

              </select>
            </div>

          </div>

          <div className="grid grid-cols-12">
            <div className="col-span-12  lg:pr-8  pb-8  w-full max-xl:max-w-3xl max-xl:mx-auto">
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

          </div>
        </div>
      </section>
    </div>
  );
}
