"use client";
import React, { useEffect, useState } from "react";
import CreateCategory from "./CreateModal";
import { getData } from "@/shared/commonFunctions";
import { ICategory } from "@/shared/interfaces/category.interface";
import { IGiftCard } from "@/shared/interfaces/giftcard.interface";
import { IGiftCardTemplate } from "@/shared/interfaces/GiftCardTemplate.interface";

export default function page() {
  // states ============================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [giftCardData, setGiftCardData] = useState<IGiftCardTemplate[]>([]);
  const [loading, setLoading] = useState(false);

  // getting and setting data===========
  useEffect(() => {
    getData(setGiftCardData, "gift_card_template/list", setLoading);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:p-14 bg-white rounded-xl border">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Gift Cards
          </h3>
          <p className="text-gray-600 mt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-4 py-2 text-black duration-150 font-medium bg-primary rounded-lg hover:bg-primary/70 active:bg-indigo-700 md:text-sm"
          >
            Add new Gift Cards
          </button>
        </div>
      </div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Name</th>
              {/* <th className="py-3 px-6">Id</th> */}
              <th className="py-3 px-6">Category</th>
              <th className="py-3 px-6">Amount</th>
              <th className="py-3 px-6">Created At</th>

              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {giftCardData.map((item, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.gift_card_name}
                </td>
                {/* <td className="px-6 py-4 whitespace-nowrap">
                  {item?.gift_card_id}
                </td> */}
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.gift_card_amount}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item?.createdAt?.slice(0, 10)}
                </td>

                <td className="text-right px-6 whitespace-nowrap">
                  <a
                    href="javascript:void()"
                    className="py-2 px-3 font-medium text-primary hover:text-primary/70 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Edit
                  </a>
                  <button
                    // href="javascript:void()"
                    className="py-2 leading-none px-3 font-medium text-red-600 hover:text-red-500 duration-150 hover:bg-gray-50 rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreateCategory isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}
