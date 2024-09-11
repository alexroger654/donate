'use client'

import Loading from "@/components/Loading";
import { deleteData, getData } from "@/shared/commonFunctions";
import { IUser } from "@/shared/interfaces/user.interface";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MainPage() {

  // states ============================
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('')

  // getting and setting data===========
  useEffect(() => {
    fetchData()
  }, [searchQuery]);

  //=== fetchData ====================

  async function fetchData() {
    getData(setData, `user/list?name=${searchQuery}&&email=${searchQuery}&&phone=${searchQuery}`, setLoading);
    getData(setData, `user/list?name=${searchQuery}`, setLoading);
  }


  async function handleDelete(id: string) {
    deleteData('user', id, setLoading, fetchData())
  }

  // loading =======================

  // if (loading) {
  //   return <Loading />;
  // }

  //================================= render =============================
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:p-14 bg-white min-h-[85vh] rounded-xl border">
      <div className="items-start justify-between md:flex">
        <div className="w-full flex items-center justify-between">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            All Users
          </h3>
          <div>
            <input defaultValue={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              type="text"
              className="max-w-56 bg-gray-100 text-sm outline-none px-4 py-2 rounded-lg"
              placeholder="search" />
          </div>
        </div>
        {/* <div className="mt-3 md:mt-0">
          <a
            href="javascript:void(0)"
            className="inline-block px-4 py-2 text-white duration-150 font-medium bg-indigo-600 rounded-lg hover:bg-indigo-500 active:bg-indigo-700 md:text-sm"
          >
            Add product
          </a>
        </div> */}
      </div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">Name</th>
              <th className="py-3 pr-6">Email</th>
              <th className="py-3 pr-6">Phone</th>
              <th className="py-3 pr-6">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {data && data?.filter(item => item.role !== "admin" && item?.role !== "super_admin")?.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.phone}</td>

                <td className="text-right whitespace-nowrap ">
                  <button
                    onClick={() => handleDelete(item?._id)}
                    className="py-1.5 px-3 bg-red-500 text-white duration-150 border rounded-lg mr-4"
                  >
                    Remove
                  </button>
                  <Link
                    href={`users/campaigns/${item?._id
                      }`}
                    className="py-2 px-3 bg-blue-500  text-white duration-150 border rounded-lg"
                  >
                    Campaigns
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
