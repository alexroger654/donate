"use client";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useLayoutEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { MobileNav } from "./MobileNav";
import { usePathname, useRouter } from "next/navigation";
export default function Navbar() {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const { data: session }: any = useSession();

  useLayoutEffect(() => {
    if (session?.user?.id) {
      setUserLoggedIn(true);
    }
  }, [session?.user?.id]);


  const links = [
    {
      url: '/about_us',
      label: "About Us"
    },
    {
      url: '/monthly_donate',
      label: "monthly donate"
    },
    {
      url: '/gift_cards',
      label: "Gift Cards"
    },
    {
      url: '/create_campaign',
      label: "Create Campaign"
    },
    {
      url: '/blogs',
      label: "blogs"
    },
  ]

  const pathname = usePathname()






  //======================== render ======================================

  return (
    <header className="relative py-4 md:py-6 bg-white z-20 max-w-screen-xl mx-auto">
      <div className="px-4 mx-auto max-w-screen-2xl sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              href="/"
              title="Home"
              className="flex rounded outline-none "
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

            {
              links.map(item => <Link
                href={item.url}
                key={item.url}
                title=""
                className={`text-sm whitespace-nowrap  ${pathname == item.url ? "text-primary" : 'text-primary-foreground'} transition-all duration-200 rounded leading-6 tracking-wide uppercase  font-semibold  hover:text-primary`}
              >
                {" "}
                {item.label}
              </Link>)
            }



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
