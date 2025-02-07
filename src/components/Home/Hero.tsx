import React from "react";
import { Button } from "../ui/button";
import { url } from "inspector";

export default function Hero() {
  return (
    <section
      style={{
        backgroundImage: `url('/assets/home/home-banner-bg.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="w-full h-[110vh] max-h-[700px]"
    >
      <div className="w-full max-w-screen-xl  mx-auto grid grid-cols-1 lg:grid-cols-2 h-full px-4">
        {/* text section =========================== */}
        <div className=" grid place-content-center h-full mt-8 lg:mt-0">
          <h1 className="font-bold text-primary-foreground text-4xl lg:text-7xl leading-tight  ">
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-3 h-5 transform -skew-x-12 bg-secondary " />
              <span className="relative inline-block ">गैलेरिया</span>
            </span>{" "}
            फाउंडेशन:
            <span className="font-normal">
              {" "}
              उज्जवल भविष्य के लिए कदम।
            </span>
          </h1>
          <p className="text-lg text-muted-foreground mt-8">
            We are dedicated to bringing positive change to society through education, health, empowerment and service. Join us and take steps towards a better future. “Together, we can make change.”
            Photo change

          </p>
        </div>
        <div className=" grid place-content-center h-full relative overflow-hidden">
          <img
            src="/assets/home/banner.png"
            alt=""
            className="w-full h-[95%]"
          />
          <img
            src="/assets/home/element-1.png"
            alt=""
            className="absolute left-10 bottom-56 animate-custom-bounce "
          />
          <img
            src="/assets/home/element-3.png"
            alt=""
            style={{ animationDelay: "0.8s" }}
            className="absolute left-[20%] lg:left-[40%] bottom-10 animate-custom-bounce "
          />
          <img
            style={{ animationDelay: "0.4s" }}
            src="/assets/home/element-2.png"
            alt=""
            className="absolute right-28 top-52 animate-custom-bounce  hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
