"use client";

import Loading from "@/components/Loading";
import { createData } from "@/shared/commonFunctions";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { MdOutlineMail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

export default function From() {
  // =============== states =========
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    // role: "admin",
  });

  //hooks
  const router = useRouter();

  async function handleCreate() {
    const result = await createData(userData, "user", setLoading);
    if (result) {
      toast.success("Account Created successfully Sign in to Continue");
      router?.push("/sign_in");
    }
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-white">
      <div className="text-center mb-10">
        <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
        <p>Enter your information to register</p>
      </div>

      <div className="w-full px-3 mb-5">
        <label className="text-xs font-semibold px-1">Name</label>
        <div className="flex">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <FaRegUser />
          </div>
          <input
            type="text"
            defaultValue={userData.name}
            onChange={(e) =>
              setUserData({
                ...userData,
                name: e.target.value,
              })
            }
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
            placeholder="John"
          />
        </div>
      </div>
      <div className="w-full px-3 mb-5">
        <label className="text-xs font-semibold px-1">Email</label>
        <div className="flex">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <MdOutlineMail />
          </div>
          <input
            type="email"
            defaultValue={userData.email}
            onChange={(e) =>
              setUserData({
                ...userData,
                email: e.target.value,
              })
            }
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
            placeholder="John@g.com"
          />
        </div>
      </div>
      <div className="w-full px-3 mb-5">
        <label className="text-xs font-semibold px-1">Password</label>
        <div className="flex">
          <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
            <RiLockPasswordLine />
          </div>
          <input
            type="password"
            defaultValue={userData.password}
            onChange={(e) =>
              setUserData({
                ...userData,
                password: e.target.value,
              })
            }
            className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-primary"
            placeholder="******"
          />
        </div>
      </div>

      <div className="flex -mx-3">
        <div className="w-full px-3 mb-5">
          <button
            type="button"
            onClick={handleCreate}
            className="block w-full max-w-xs mx-auto bg-primary  text-white rounded-lg px-3 py-3 font-semibold"
          >
            REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
}
