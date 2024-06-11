"use client";

import PrimaryButton from "@/components/PrimaryButton";
import { getData } from "@/shared/commonFunctions";
import { ICampaign } from "@/shared/interfaces/campaign.interface";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CreateModal from "./CreateModal";
import { IGiftCardTemplate } from "@/shared/interfaces/GiftCardTemplate.interface";

export default function page() {
  //=================== states =====================//
  const [Vouchers, setVouchers] = React.useState<IGiftCardTemplate[]>([]); // Vouchers state
  const [open, toggleOpen] = useState(false); // modal state
  const [currentVoucherId, setCurrentVoucherId] = useState(""); // current Voucher id
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [giftCardName, setGiftCardName] = useState("");
  const [loading, setLoading] = useState(false);
  // get search params from url==================

  const params = useSearchParams();
  const skuList = params.get("sku")?.split(",");

  //============== fetching Vouchers

  //=================== useEffect =====================//
  useEffect(() => {
    getData(setVouchers, "gift_card_template/list", setLoading);
  }, []);

  return (
    <>
      <section className="py-4 relative min-h-screen">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
          {/* header ======================== */}
          <div className="flex flex-col lg:flex-row lg:items-center max-lg:gap-4 justify-between w-full">
            <span className="font-semibold text-2xl leading-8 text-black ml-2 mr-3 transition-all duration-500 group-hover:text-primary">
              Explore Gift Cards
            </span>
            {/* <div className="relative w-full max-w-sm">
              <svg
                className="absolute top-1/2 -translate-y-1/2 left-4 z-50"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5555 3.33203H3.44463C2.46273 3.33203 1.66675 4.12802 1.66675 5.10991C1.66675 5.56785 1.84345 6.00813 2.16004 6.33901L6.83697 11.2271C6.97021 11.3664 7.03684 11.436 7.0974 11.5068C7.57207 12.062 7.85127 12.7576 7.89207 13.4869C7.89728 13.5799 7.89728 13.6763 7.89728 13.869V16.251C7.89728 17.6854 9.30176 18.6988 10.663 18.2466C11.5227 17.961 12.1029 17.157 12.1029 16.251V14.2772C12.1029 13.6825 12.1029 13.3852 12.1523 13.1015C12.2323 12.6415 12.4081 12.2035 12.6683 11.8158C12.8287 11.5767 13.0342 11.3619 13.4454 10.9322L17.8401 6.33901C18.1567 6.00813 18.3334 5.56785 18.3334 5.10991C18.3334 4.12802 17.5374 3.33203 16.5555 3.33203Z"
                  stroke="black"
                  stroke-width="1.6"
                  stroke-linecap="round"
                />
              </svg>
              <select
                id="Offer"
                className="h-12 border border-gray-300 text-gray-900 pl-11 text-base font-normal leading-7 rounded-full block w-full py-2.5 px-4 appearance-none relative focus:outline-none bg-white transition-all duration-500 hover:border-gray-400 hover:bg-gray-50 focus-within:bg-gray-50"
              >
                <option selected>Campaign Type</option>
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
                    Filter
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
                <button className="w-full py-4 flex items-center justify-center gap-2 rounded-xl bg-primary text-black  font-semibold text-xs shadow-sm shadow-transparent transition-all duration-500 hover:bg-primary hover:shadow-indigo-200  ">
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
                </button>
              </div>
            </div>

            {/* content=================================== */}
            <div className="col-span-12 md:col-span-9 px-2 lg:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-9 ">
                {Vouchers?.map((item) => (
                  <div
                    key={item._id}
                    className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 "
                  >
                    <div className="overflow-hidden bg-white rounded shadow-lg border">
                      <div className="aspect-w-4 aspect-h-3 p-1">
                        <img
                          className="object-cover w-full h-40"
                          src={item?.imageUrl || ""}
                          // alt={item.name}
                        />
                      </div>
                      <div className="p-8">
                        <p className="text-md font-bold text-black">
                          {item.gift_card_name}
                        </p>

                        <div className="flex items-end mt-1">
                          <p className="text-xs font-bold text-black">
                            Price: {item.gift_card_amount}
                          </p>
                          <p className="ml-2 text-sm font-medium text-gray-500"></p>
                        </div>
                        <div className=" mt-8">
                          <button
                            onClick={() => {
                              setGiftCardName(item.gift_card_name);
                              setIsModalOpen(true);
                            }}
                            className="w-full rounded-lg py-2 text-center bg-primary"
                          >
                            Gift Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <CreateModal
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
          giftCardId={giftCardName}
        />
      </section>
    </>
  );
}
