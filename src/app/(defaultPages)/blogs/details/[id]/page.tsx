"use client";

import Loading from "@/components/Loading";
import { getData } from "@/shared/commonFunctions";
import { IPost } from "@/shared/interfaces/post.interface";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Page() {
  //@ts-ignore
  const [postData, setPostData] = useState<IPost>({});
  const [loading, setLoading] = useState(false);
  const [currentData, setCurrentData] = useState<any>("");

  // hooks
  const params = useParams();

  // getting and setting data===========
  useEffect(() => {
    getData(setPostData, `blog_post/list?id=${params?.id}`, setLoading);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="font-inter">
      <section
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${postData?.imageUrl})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="relative py-12 lg:py-28 bg-primary"
      >
        <div className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-4">
          <h1 className="text-white font-manrope font-semibold text-4xl min-[500px]:text-5xl leading-tight mb-8">
            {postData.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="data">
              <p className="font-medium text-xl leading-8 text-white mb-1">
                insights
              </p>
              <p className="font-normal text-lg leading-7 text-white capitalize">
                {postData?.userName}
              </p>
            </div>
            <div className="flex items-center gap-5"></div>
          </div>
        </div>
      </section>

      <section className="relative py-10 lg:py-16 ">
        <div
          dangerouslySetInnerHTML={{
            __html: postData?.pageContent,
          }}
          className="w-full max-w-lg md:max-w-2xl lg:max-w-4xl px-5 lg:px-11 mx-auto max-md:px-3"
        ></div>
      </section>

      {/* <section className="py-12 lg:py-20 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-manrope text-4xl font-bold text-gray-900 text-center mb-14">
            Our popular blogs
          </h2>
          <div className="flex justify-center mb-14 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696244553.png"
                  alt="Harsh image"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                  Fintech 101: Exploring the Basics of Electronic Payments
                </h4>
                <div className="flex items-center justify-between  font-medium">
                  <h6 className="text-sm text-gray-500">By Harsh C.</h6>
                  <span className="text-sm text-indigo-600">2 year ago</span>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696244579.png"
                  alt="John image "
                  className="rounded-lg w-full"
                />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                  From Classroom to Cyberspace: The Growing Influence of EdTech
                  in Fintech
                </h4>
                <div className="flex items-center justify-between  font-medium">
                  <h6 className="text-sm text-gray-500">By John D.</h6>
                  <span className="text-sm text-indigo-600">2 year ago</span>
                </div>
              </div>
            </div>
            <div className="group cursor-pointer w-full max-lg:max-w-xl lg:w-1/3 border border-gray-300 rounded-2xl p-5 transition-all duration-300 hover:border-indigo-600">
              <div className="flex items-center mb-6">
                <img
                  src="https://pagedone.io/asset/uploads/1696244619.png"
                  alt="Alexa image"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="block">
                <h4 className="text-gray-900 font-medium leading-8 mb-9">
                  Fintech Solutions for Student Loans: Easing the Burden of
                  Education Debt
                </h4>
                <div className="flex items-center justify-between  font-medium">
                  <h6 className="text-sm text-gray-500">By Alexa H.</h6>
                  <span className="text-sm text-indigo-600">2 year ago</span>
                </div>
              </div>
            </div>
          </div>
          <button className="border border-gray-300 shadow-sm rounded-full py-3.5 px-7 w-52 flex justify-center items-center text-gray-900 font-semibold mx-auto transition-all duration-300 hover:bg-gray-100">
            View All
          </button>
        </div>
      </section> */}
    </div>
  );
}
