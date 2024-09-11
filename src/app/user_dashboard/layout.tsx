"use client";

import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleLogout = () => {
    signOut({ callbackUrl: "/sign_in" });
  };

  //================ render ===============

  return (
    <>
      <div className="mx-4 max-w-screen-xl sm:mx-8 xl:mx-auto">
        <div className="grid grid-cols-8 pt-3 pb-10 sm:grid-cols-10">
          {/* side bar mobile====================== */}
          <div className="relative my-4 w-full col-span-full sm:hidden">
            <input
              className="peer hidden"
              type="checkbox"
              name="select-1"
              id="select-1"
            />
            <label
              htmlFor="select-1"
              className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring"
            >
              Profile
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">

              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                <Link
                  href="/user_dashboard/"
                  className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-white"
                >
                  Profile
                </Link>
              </li>
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                <Link
                  href="/user_dashboard/my_transactions"
                  className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-white"
                >
                  {" "}
                  My Transactions
                </Link>
              </li>
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                <Link
                  href="/user_dashboard/my_campaigns"
                  className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-white"
                >
                  {" "}
                  My Campaigns
                </Link>
              </li>
              <li className="cursor-pointer px-3 py-2 text-sm text-slate-600 hover:bg-blue-700 hover:text-white">
                <Link
                  href="/create_campaign"
                  className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-white"
                >
                  {" "}
                  Create Campaign
                </Link>
              </li>

            </ul>
          </div>
          {/* sidebar desktop======================= */}
          <div className="col-span-2 hidden sm:block">
            <ul>
              <li>
                <Link
                  href="/user_dashboard"
                  className="mt-5 cursor-pointer border-l-2 border-l-blue-700 px-2 py-2 font-semibold text-blue-700 transition hover:border-l-blue-700 hover:text-blue-700"
                >
                  {" "}
                  Profile
                </Link>
              </li>

              <li className="mt-8">
                <Link
                  href="/user_dashboard/my_transactions"
                  className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700"
                >
                  {" "}
                  My Transactions
                </Link>
              </li>
              <li className="mt-8">
                <Link
                  href="/user_dashboard/my_campaigns"
                  className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700"
                >
                  {" "}
                  My Campaigns
                </Link>
              </li>
              <li className="mt-8">
                <Link
                  href="/create_campaign"
                  className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700"
                >
                  {" "}
                  Create Campaign
                </Link>
              </li>
              <li className="mt-4">
                <button
                  onClick={handleLogout}
                  className="cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700"
                >
                  {" "}
                  Log Out
                </button>
              </li>
            </ul>
          </div>

          <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            {/* content====================== */}
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
