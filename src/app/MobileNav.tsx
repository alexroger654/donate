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
      </div>

      <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
        {isUserLoggedIn ? (
          <>
            <SheetClose asChild>
              <Link href="/user_dashboard" className="uppercase font-extrabold">
                <Avatar>
                  <AvatarFallback>
                    {session?.user?.name?.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>
              </Link>
            </SheetClose>
          </>
        ) : (
          <>
            <SheetClose asChild>
              <Link href="/sign_up" title="" className="">
                <Button>Sign Up</Button>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/sign_up" title="" className="">
                <Button>Sign Up</Button>
              </Link>
            </SheetClose>
          </>
        )}
      </div>
    </SheetContent>
  );
}
