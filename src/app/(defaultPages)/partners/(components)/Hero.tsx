import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <section className="py-10 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h1 className="font-bold text-primary-foreground text-4xl lg:text-5xl leading-tight  capitalize ">
                <span className="relative px-1">
                  <div className="absolute inset-x-0 bottom-3 h-5 transform -skew-x-12 bg-secondary " />
                  <span className="relative inline-block ">Join</span>
                </span>{" "}
                Hands with Galleria Foundation
                <span className="font-normal">to Drive Meaningful Change</span>
              </h1>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Join us in making a difference. Whether you’re a corporate
                entity, NGO, or individual looking to contribute, partnering
                with Galleria Foundation is a step toward building a better
                tomorrow. Let’s combine our strengths to create impactful
                programs and deliver results where they matter most.
              </p>
            </div>
            <Button size="lg">Get Started</Button>
          </div>
          <Image
            width={500}
            height={300}
            className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src="/assets/employee.jpg"
            alt="about Us image"
          />
        </div>
      </div>
    </section>
  );
}
