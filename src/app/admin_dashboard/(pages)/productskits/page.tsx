"use client";
import React, { useEffect, useState } from "react";
import CreateCategory from "./(modules)/components/CreateModal";
import { getData } from "@/shared/commonFunctions";
import Loading from "@/components/Loading";
import { IProductKit } from "@/shared/interfaces/productKit.interface";

export default function page() {
  // states ============================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productData, setProductData] = useState<IProductKit[]>([]);
  const [loading, setLoading] = useState(false);

  // getting and setting data===========
  useEffect(() => {
    getData(setProductData, "product_kit/list", setLoading);
  }, []);

  //=== refetch ====================

  async function refetch() {
    getData(setProductData, "product_kit/list", setLoading);
  }

  // loading =======================

  if (loading) {
    return <Loading />;
  }

  //============ render =======================
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:p-14 min-h-[80vh] bg-white rounded-xl border">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Product Kit
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
            Add Product Kit
          </button>
        </div>
      </div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="bg-gray-50 text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 px-6">Image</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">Product names</th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {productData?.length ? (
              productData?.map((item, idx) => (
                <tr key={item._id}>
                  <td className="flex items-center gap-x-3 py-3 px-6 whitespace-nowrap">
                    <img
                      src={item.image_url}
                      className="w-10 h-10 rounded-xl"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.price}</td>

                  <td className="px-6 py-4  flex items-center ">
                    {item.product_names?.map((item) => (
                      <>
                        <span className="">{item},</span>
                      </>
                    ))}
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
              ))
            ) : (
              <p className="mt-8 pl-3">No Category Found</p>
            )}
          </tbody>
        </table>
      </div>

      <CreateCategory
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        refetch={refetch}
      />
    </div>
  );
}
