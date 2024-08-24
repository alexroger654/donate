"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./MobileNav";
export default function Navbar() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const { data: session }: any = useSession();

  useLayoutEffect(() => {
    if (session?.user?.id) {
      setUserLoggedIn(true);
    }
  }, [session?.user?.id]);

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
              <img src="/assets/logo.png" alt="" className="w-28" />
              {/* <p className="text-lg font-extrabold text-primary-foreground ">
                Galleria <span className="text-primary">Foundation</span>
              </p> */}
            </Link>
          </div>

          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
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
              </SheetTrigger>
              <MobileNav isUserLoggedIn={isUserLoggedIn} />
            </Sheet>
          </div>

          <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
            <Link
              href="/about_us"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              About Us{" "}
            </Link>

            <Link
              href="/campaigns"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Campaigns{" "}
            </Link>

            <Link
              href="/gift_cards"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Gift Cards{" "}
            </Link>

            <Link
              href="/monthly_donate"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Monthly Donate{" "}
            </Link>
            <Link
              href="/create_campaign"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Create Campaign
            </Link>
            <Link
              href="/blogs"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              {" "}
              Blogs
            </Link>
          </div>

          <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
            {isUserLoggedIn ? (
              <>
                <Link
                  href={session?.user?.role == 'admin' ? "/admin_dashboard" : "/user_dashboard"}
                  className="uppercase font-extrabold"
                >
                  <Avatar>
                    <AvatarFallback>
                      {session?.user?.name?.slice(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                </Link>
              </>
            ) : (
              <>
                {" "}
                <Link
                  href="/sign_in"
                  title=""
                  className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  {" "}
                  Login{" "}
                </Link>
                <Link href="/sign_up" title="" className="">
                  <Button>Sign Up</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
