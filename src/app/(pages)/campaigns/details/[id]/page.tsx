"use client";

import { Button } from "@/components/ui/button";
import { getData } from "@/shared/commonFunctions";
import { ICampaign } from "@/shared/interfaces/campaign.interface";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { LuXCircle } from "react-icons/lu";

export default function page() {
  const [campaignData, setCampaignData] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [addedProduct, setAddedProduct] = useState<any>([]);

  console.log(addedProduct, "----------- 00 ---------");

  //hooks =====================
  const params = useParams();

  // getting and setting data===========
  useEffect(() => {
    getData(setCampaignData, `campaign/list?id=${params?.id}`, setLoading);
  }, []);

  return (
    <div>
      <div className="">
        <div className="p-6 lg:max-w-7xl max-w-2xl lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className="bg-gray-800 px-4 py-10 rounded-xl">
                <img
                  src="https://readymadeui.com/images/coffee2.webp"
                  alt="Product"
                  className="w-4/5 rounded object-cover mx-auto"
                />
              </div>

              <div className="mt-6 flex flex-wrap  text-justify gap-x-8 gap-y-4 mx-auto">
                <h3 className="text-lg font-semibold ">About</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: campaignData?.campaign_description,
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold capitalize ">
                {campaignData?.campaign_name}
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className=" text-4xl font-semibold">
                  <span> ₹{campaignData?.raised_amount || 0}</span>
                  <span className="text-sm text-gray-600 ml-2">
                    raised out of ₹ {campaignData?.targeted_amount}
                  </span>
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <button
                  type="button"
                  className="min-w-[200px] px-4 py-3 bg-primary  text-black text-sm font-semibold rounded"
                >
                  Donate Now
                </button>
              </div>

              <div className="mt-8">
                <div className="mt-8">
                  <h3 className="text-lg font-semibold ">Products</h3>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                  {campaignData?.products?.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 "
                    >
                      <div className="overflow-hidden bg-white rounded-md shadow-lg border">
                        <div className="aspect-w-4 aspect-h-3 p-1">
                          <img
                            className="object-cover w-full h-20 rounded-md"
                            src={
                              item?.product_image_url ||
                              "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600"
                            }
                            // alt={item.name}
                          />
                        </div>
                        <div className="p-2 pb-3 w-full">
                          <p className="text-md font-bold text-black">
                            {item.product_name}
                          </p>

                          <div className="flex items-end mt-1">
                            <p className="text-xs font-bold text-black">
                              Price: {item.product_name}
                            </p>
                            <p className="ml-2 text-sm font-medium text-gray-500"></p>
                          </div>
                          <div className=" mt-2">
                            <button
                              onClick={() => {
                                setAddedProduct([...addedProduct, item]);
                              }}
                              className="w-full rounded-lg py-0.5 text-center text-xs bg-primary"
                            >
                              Donate Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="mt-8">
                  <h3 className="text-lg font-semibold ">Donate</h3>
                  {addedProduct?.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1  relative mt-6"
                    >
                      <div className="overflow-hidden bg-white rounded-md shadow-lg border flex items-center ">
                        <div className="aspect-w-4 aspect-h-3 p-1">
                          <img
                            className="object-cover w-full h-20 rounded-md"
                            src={
                              item?.product_image_url ||
                              "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600"
                            }
                            // alt={item.name}
                          />
                        </div>
                        <div className="p-2 pb-3 w-full">
                          <p className="text-md font-bold text-black">
                            {item.product_name}
                          </p>

                          <div className="flex items-end mt-1">
                            <p className="text-xs font-bold text-black">
                              Price: {item.product_name}
                            </p>
                            <p className="ml-2 text-sm font-medium text-gray-500"></p>
                          </div>
                          <div className=" absolute top-1 right-3 text-gray-900">
                            <Button
                              onClick={() => {
                                setAddedProduct(
                                  addedProduct?.filter(
                                    (oldItem: any) =>
                                      oldItem.product_name !== item.product_name
                                  )
                                );
                              }}
                              size="icon"
                              variant="ghost"
                            >
                              <LuXCircle size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
