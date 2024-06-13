"use client";

import Faq from "@/components/Faq";
import React, { useState } from "react";
import CreateModal from "./CreateModal";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const GiftCardsPage = () => {
  // ============== states =================

  return (
    <>
      {/* hero ================= */}
      <section className="bg-gray-50">
        <section className="pt-12 pb-12 sm:pb-16 lg:pt-8">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid max-w-lg grid-cols-1 mx-auto lg:max-w-full lg:items-center lg:grid-cols-2 gap-y-12 lg:gap-x-16">
              <div>
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:leading-tight lg:text-6xl font-pj">
                    Get Gift card
                  </h1>
                  <p className="mt-2 text-lg text-gray-600 sm:mt-8 font-inter">
                    The galleria foundation Gift Card is a thoughtful way to
                    support causes that matter to you. Give the gift of impact
                    by allowing recipients to choose where their donation goes,
                    ensuring it directly benefits those in need. Join us in
                    making a difference, one gift at a time.
                  </p>
                </div>

                <Link href="/gift_card_search" className="">
                  <Button className="px-16 py-6 mt-8 font-semibold text-lg w-full lg:w-auto">
                    Get Gift Cards
                  </Button>
                </Link>
              </div>

              <div>
                <img
                  className="w-full h-96 lg:h-[600px] rounded-xl"
                  src="/assets/donateCard.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* gift card category ==================== */}
      {/* <section className="py-20 relative">
        <div className="w-full max-w-2xl lg:max-w-7xl px-6 lg:px-8 mx-auto">
          <h1 className="font-manrope font-medium text-4xl text-gray-900 mb-10 max-md:text-center">
            Charity Donation Gift Card
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link
              href="/gift_card_search"
              className="flex items-center flex-col gap-8 w-full group"
            >
              <div className="block">
                <img
                  className="rounded-2xl"
                  src="https://www.donatekart.com/_next/static/images/festivals-75417c8f64b3e4febccf82bbfd6fe4b1.webp"
                  alt="Project Achievements of Sketch"
                />
              </div>
              <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                <div className="block">
                  <h4 className="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                    Festivals
                  </h4>
                  <p className="font-medium text-lg text-gray-400">
                    Content Design, Marketing
                  </p>
                </div>
                <button className=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                  <svg
                    className="stroke-black transition-all duration-300 group-hover:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </Link>
            <Link
              href="/gift_card_search"
              className="group flex items-center flex-col gap-8 w-full"
            >
              <div className="block">
                <img
                  className="rounded-2xl"
                  src="https://www.donatekart.com/_next/static/images/festivals-75417c8f64b3e4febccf82bbfd6fe4b1.webp"
                  alt="Project Achievements of Sketch"
                />
              </div>
              <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                <div className="block">
                  <h4 className="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                    Festivals
                  </h4>
                  <p className="font-medium text-lg text-gray-400">
                    User Interface Design
                  </p>
                </div>
                <button className=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                  <svg
                    className="stroke-black transition-all duration-300 group-hover:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </Link>
            <Link
              href="/gift_card_search"
              className="group flex items-center flex-col gap-8 w-full md:w-1/2 mx-auto md:col-span-2 lg:col-span-1 lg:w-full"
            >
              <div className="block">
                <img
                  className="rounded-2xl"
                  src="https://www.donatekart.com/_next/static/images/festivals-75417c8f64b3e4febccf82bbfd6fe4b1.webp"
                  alt="Project Achievements of Sketch"
                />
              </div>
              <div className="flex items-center justify-between max-w-[406px] lg:max-w-full w-full lg:px-0">
                <div className="block">
                  <h4 className="text-2xl font-manrope font-semibold text-gray-900 mb-1">
                    Festivals
                  </h4>
                  <p className="font-medium text-lg text-gray-400">
                    User Interface Design
                  </p>
                </div>
                <button className=" border border-black py-2 px-3.5 rounded-full transition-all duration-300 group-hover:bg-black">
                  <svg
                    className="stroke-black transition-all duration-300 group-hover:stroke-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                  >
                    <path
                      d="M9.62553 4L13.6664 8.0409M13.6664 8.0409L9.62553 12.0818M13.6664 8.0409L1.6665 8.0409"
                      stroke=""
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </section> */}

      {/* how it works ======================= */}
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              How does it work?
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    1{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  CHOOSE A CAUSE
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Browse different campaigns and <br /> select a cause.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    2{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  SELECT PRODUCTS
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Select products and quantity you <br /> wish to donate.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span className="text-xl font-semibold text-gray-700">
                    {" "}
                    3{" "}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  DELIVERY REPORT
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Galleria Foundation delivers the products and the organization
                  updates about <br /> product utilization
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================ faq============= */}
      <Faq faqType="gift_cards" />
    </>
  );
};
export default GiftCardsPage;
