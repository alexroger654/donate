import React from "react";

export default function About() {
  return (
    <article className="mx-2 my-10  rounded-md  md:mx-auto">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto">
        <div className="p-5 md:w-4/6 md:p-8">
          <span className="rounded-md bg-primary px-2 py-1 text-xs uppercase text-white">
            About CSR
          </span>
          <h1 className="font-bold text-primary-foreground text-3xl lg:text-6xl leading-tight  capitalize ">
            {/* <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-3 h-3 transform -skew-x-12 bg-secondary " />
            </span> */}
            Empowering Communities
            <span className="font-normal"> to Rebuild</span>
          </h1>
          <p className="mt-3 text-md text-muted-foreground">
            Empower your business to drive meaningful change with our tailored
            CSR programs. We focus on education, healthcare, women empowerment,
            environment, and disaster relief, ensuring measurable impact and
            transparency.Partner with us through corporate donations, employee
            engagement, or event sponsorships to create sustainable change and
            enhance your brand’s values. Together, we can build a better
            tomorrow.
          </p>
        </div>
        <div className="mx-auto hidden items-center px-5 md:flex md:p-8">
          <img
            className="rounded-md shadow-lg w-full lg:max-w-lg"
            src="/assets/csr/about.png"
            alt="Shop image"
          />
        </div>
      </div>
    </article>
  );
}
