"use client";

import PrimaryButton from "@/components/PrimaryButton";
import { getData } from "@/shared/commonFunctions";
import { ICampaign } from "@/shared/interfaces/campaign.interface";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CreateModal from "./CreateModal";
import { IGiftCardTemplate } from "@/shared/interfaces/GiftCardTemplate.interface";
import { LuCalendarCheck, LuUserCircle2 } from "react-icons/lu";
import { Button } from "@/components/ui/button";

export default function MainPage() {
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
          <div className="grid ">
            {/* content=================================== */}
            <div className="col-span-full md:col-span-9 px-2 lg:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-9 ">
                {Vouchers?.map((item, i) => (
                  <div
                    key={i}
                    className="group flex flex-col bg-white w-full rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]  "
                  >
                    <div className=" relative">
                      <div className="w-full h-40  overflow-hidden rounded-t-xl ">
                        <img
                          className="w-full h-40 scale-125  rounded-t-xl transition-all duration-700 group-hover:scale-125"
                          src={
                            item?.image_url ||
                            "data:image/jpeg;base64,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"
                          }
                          alt="Image Description"
                        />
                      </div>
                    </div>

                    <div className="p-4 md:p-5 space-y-3 ">
                      {/* <p className=" text-md font-semibold text-primary">
                        # Special Gift Card
                      </p> */}
                      <h3 className="text-xl font-semibold text-primary-foreground leading-snug tracking-wide   transition-all duration-500 cursor-pointer group-hover:text-primary">
                        {item.gift_card_name}
                      </h3>
                      <p className="mt- text-sm font-semibold text-muted-foreground">
                        {item?.description?.slice(0, 100)}
                      </p>
                      <Button
                        onClick={() => {
                          setGiftCardName(item.gift_card_name);
                          setIsModalOpen(true);
                        }}
                        className="w-full"
                      >
                        Gift Now
                      </Button>
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
