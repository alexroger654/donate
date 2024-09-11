"use client";

import React, { useEffect, useState } from "react";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { getData, updateData } from "@/shared/commonFunctions";
import Loading from "@/components/Loading";
import { useSession, signIn, signOut } from "next-auth/react";
import { toast } from "sonner";
import { useParams } from "next/navigation";
export default function UserMainPage() {
    const { data: session }: any = useSession();

    //states =========================
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: 0,
        age: 0,
        address: "",
        city: "",
        state: "",
    });

    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);


    const param = useParams()






    // getting and setting data===========
    useEffect(() => {
        getData(setUserData, `user/id/${param?.id}`, setLoading);
    }, [param?.id]);




    async function updateUserInfo() {
        const result = await updateData(userData, 'user', param?.id as string, setLoading)
        if (result) {
            toast.success("data updated");
        }

    }





    if (loading) {
        return <Loading />;
    }

    return (
        <>
            <form className="p-2 lg:p-6">
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <h2 className="text-lg font-semibold leading-7 text-gray-900">
                            Employee Information
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            {/* Use a permanent address where you can receive mail. */}
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="first-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        defaultValue={userData?.name}
                                        onChange={(e) =>
                                            setUserData({ ...userData, name: e.target.value })
                                        }
                                        id="first-name"
                                        autoComplete="given-name"
                                        className="block px-5 w-full rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Email
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        name="last-name"
                                        defaultValue={userData?.email}
                                        onChange={(e) =>
                                            setUserData({ ...userData, email: e.target.value })
                                        }
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full px-5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Phone
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        defaultValue={userData?.phone}
                                        onChange={(e) => {
                                            const regex = /^[6-9]\d{9}$/;
                                            regex.test(e.target.value);
                                            console.log(regex.test(e.target.value))

                                            if (regex.test(e.target.value)) {
                                                setUserData({ ...userData, phone: parseInt(e.target.value) })
                                                setError('')
                                            } else {
                                                setError('Please enter a valid phone number')
                                            }


                                        }
                                        }
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full px-5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                    <p className="text-xs text-red-600 font-semibold">{error}</p>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Age
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="last-name"
                                        defaultValue={userData?.age}
                                        onChange={(e) =>
                                            setUserData({ ...userData, age: parseInt(e.target.value) })
                                        }
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full px-5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        defaultValue={userData?.city}
                                        onChange={(e) =>
                                            setUserData({ ...userData, city: e.target.value })
                                        }
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full px-5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="last-name"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    State
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="last-name"
                                        defaultValue={userData?.state}
                                        onChange={(e) =>
                                            setUserData({ ...userData, state: e.target.value })
                                        }
                                        id="last-name"
                                        autoComplete="family-name"
                                        className="block w-full px-5 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-full">
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        defaultValue={userData?.address}
                                        onChange={(e) =>
                                            setUserData({ ...userData, address: e.target.value })
                                        }
                                        autoComplete="email"
                                        className="block w-full px-4 rounded-md border-0 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        onClick={updateUserInfo}
                        className="rounded-md bg-primary px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </>
    );
}
