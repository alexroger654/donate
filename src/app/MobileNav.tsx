import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { useSession } from "next-auth/react";
import Link from "next/link";

export function MobileNav({ isUserLoggedIn }: any) {
  const { data: session }: any = useSession();

  return (
    <SheetContent>
      <div className="flex flex-col  h-full justify-between">


        <div className="grid grid-cols-1 space-y-4">
          <SheetClose asChild>
            <Link
              href="/about_us"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              About Us
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/campaigns"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Campaigns
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/gift_cards"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Gift Cards
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/monthly_donate"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Monthly Donate
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/create_campaign"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Create Campaign
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link
              href="/blogs"
              title=""
              className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
            >
              Blogs
            </Link>
          </SheetClose>
          <div className="flex   gap-5">
            {isUserLoggedIn ? (
              <div className="flex-col gap-8 w-full">
                <div className="py-2">
                  <SheetClose asChild>
                    <Link
                      href={session?.user?.role == 'admin' ? "/admin_dashboard" : "/user_dashboard"}
                      className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      {session?.user?.role == 'admin' ? "Admin Dashboard" : "Profile"}

                    </Link>
                  </SheetClose>
                </div>
                <div className="py-2">
                  <SheetClose asChild>
                    <Link
                      href="/user_dashboard/my_transactions"
                      className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      My Transactions
                    </Link>
                  </SheetClose>
                </div>

                <div className="py-2">
                  <SheetClose asChild>
                    <Link
                      href="/user_dashboard/my_campaigns"
                      className="text-sm whitespace-nowrap font-medium text-primary-foreground transition-all duration-200 rounded focus:outline-none  hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                    >
                      My Campaigns
                    </Link>
                  </SheetClose>
                </div>

              </div>
            ) : (
              <>
                <SheetClose asChild>
                  <Link href="/sign_up" title="" className="">
                    <Button>Sign Up</Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/sign_in" title="" className="">
                    <Button>Sign In</Button>
                  </Link>
                </SheetClose>
              </>
            )}
          </div>
        </div>
        <div className="mt-4 w-full">
          <SheetClose asChild>
            <Link href="/sign_up" title="" >
              <Button className="w-full">Log Out</Button>
            </Link>
          </SheetClose>
        </div>
      </div>


    </SheetContent>
  );
}
