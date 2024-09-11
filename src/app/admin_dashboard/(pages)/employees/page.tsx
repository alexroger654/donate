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

    // getting and setting data===========
    useEffect(() => {
        getData(setData, "user/list", setLoading);
    }, []);

    //=== refetch ====================

    async function refetch() {
        getData(setData, "user/list", setLoading);
    }


    async function handleDelete(id: string) {
        deleteData('user', id, setLoading, refetch())
    }

    // loading =======================

    if (loading) {
        return <Loading />;
    }

    //================================= render =============================
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:p-14 bg-white min-h-[85vh] rounded-xl border">
            <div className="items-start justify-between md:flex">
                <div className="max-w-lg">
                    <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                        Employees
                    </h3>

                </div>
                <div className="mt-3 md:mt-0">
                    <Link
                        href={`employees/create`}
                        className="inline-block px-4 py-2 text-white duration-150 font-medium bg-primary rounded-lg  md:text-sm"
                    >
                        Create New
                    </Link>
                </div>
            </div>
            <div className="mt-12 relative h-max overflow-auto">
                <table className="w-full table-auto text-sm text-left">
                    <thead className="text-gray-600 font-medium border-b">
                        <tr>
                            <th className="py-3 pr-6">Name</th>
                            <th className="py-3 pr-6">Email</th>
                            <th className="py-3 pr-6">Role</th>
                            <th className="py-3 pr-6">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 divide-y">
                        {data && data?.filter(item => item.role !== "consumer" && item?.role !== "super_admin")?.map((item, idx) => (
                            <tr key={idx}>
                                <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                                <td className="pr-6 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="pr-6 py-4 whitespace-nowrap">{item.role?.replace('_', " ")}</td>
                                {/* <td className="pr-6 py-4 whitespace-nowrap">{item.phone_number}</td> */}

                                <td className="text-right whitespace-nowrap ">
                                    <Link
                                        href={`employees/update/${item?._id}`}
                                        className="py-1.5 px-3 bg-green-500 text-white duration-150 border rounded-lg mr-4"
                                    >
                                        Update
                                    </Link>
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
