import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="relative py-4 md:py-6 bg-white z-20">
      <div className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              href="/"
              title="Home"
              className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              <img
                className="w-auto h-8"
                src="https://d33wubrfki0l68.cloudfront.net/682a555ec15382f2c6e7457ca1ef48d8dbb179ac/f8cd3/images/logo.svg"
                alt=""
              />
            </Link>
          </div>

          <div className="flex lg:hidden">
            <button type="button" className="text-gray-900">
              <svg
                className="w-7 h-7"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
            <Link
              href="/about_us"
              title=""
              className="text-base font-medium text-gray-950 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              About Us{" "}
            </Link>

            <Link
              href="/campaigns"
              title=""
              className="text-base font-medium text-gray-950 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Campaigns{" "}
            </Link>

            <Link
              href="/gift_card_search"
              title=""
              className="text-base font-medium text-gray-950 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Gift Cards{" "}
            </Link>

            <Link
              href="/monthly_donate"
              title=""
              className="text-base font-medium text-gray-950 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Monthly Donate{" "}
            </Link>
            <Link
              href="/blogs"
              title=""
              className="text-base font-medium text-gray-950 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Blogs
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            <Link
              href="/sign_in"
              title=""
              className="text-base font-medium text-gray-950 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Login{" "}
            </Link>

            <Link href="/sign_up" title="" className="">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
