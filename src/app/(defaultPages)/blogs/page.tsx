"use client";
import Loading from "@/components/Loading";
import { getData } from "@/shared/commonFunctions";
import { IPost } from "@/shared/interfaces/post.interface";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function MainPage() {
  const [postData, setPostData] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentData, setCurrentData] = useState<any>("");

  // getting and setting data===========
  useEffect(() => {
    getData(setPostData, "blog_post/list", setLoading);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
          <div className="flex items-center justify-center flex-col gap-5 mb-14">
            <span className="bg-red-100 text-primary text-xs font-medium px-3.5 py-1 rounded-full">
              Blogs
            </span>
            <h2 className="font-manrope font-bold text-4xl text-gray-900 text-center">
              Explore Transforming Generosity: Insights and Impact
            </h2>
            <p className="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
              {" "}
              In the world of architecture or organization, structure provides
              the backbone for a purposeful and harmonious existence.
            </p>
          </div>
          <div className="flex justify-center  gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            {postData?.map((item, i) => (
              <Link
                href={`/blogs/details/${item?._id}`}
                key={item?._id}
                className="group w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl"
              >
                <div className="flex items-center">
                  <img
                    src={item?.imageUrl}
                    alt={item?.title}
                    className="rounded-t-2xl w-full"
                  />
                </div>
                <div className="p-4 lg:p-6 transition-all duration-300 rounded-b-2xl group-hover:bg-gray-50">
                  <span className="text-primary font-medium mb-3 block">
                    # {item?.createdAt?.slice(0, 10)}
                  </span>
                  <h4 className="text-xl text-gray-900 font-medium leading-8 mb-5">
                    {item?.title}
                  </h4>
                  <p className="text-gray-500 leading-6 mb-10">
                    {item?.pageContent
                      ?.replace(/<\/?[^>]+(>|$)/g, "")
                      ?.slice(0, 140)}
                    ...
                  </p>
                  <a
                    href="javascript:;"
                    className="cursor-pointer text-lg text-primary font-semibold"
                  >
                    Read more..
                  </a>
                </div>
              </Link>
            ))}
          </div>
          {/* <button className="w-full mt-10 rounded-lg py-4 px-6 text-center bg-red-100 text-lg font-medium text-primary transition-all duration-300 hover:text-white hover:bg-primary">
            Load More
          </button> */}
        </div>
      </section>
    </>
  );
}
