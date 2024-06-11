import React from "react";

export default function Status() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl py-10 px-10 xl:py-16 xl:px-20 bg-gray-50 flex items-center justify-between flex-col gap-16 lg:flex-row">
          <div className="w-full lg:w-60">
            <h2 className="font-manrope text-4xl font-bold text-gray-900 mb-4 text-center lg:text-left">
              Our Stats
            </h2>
            <p className="text-sm text-gray-500 leading-6 text-center lg:text-left">
              We help you to unleash the power within your business
            </p>
          </div>
          <div className="w-full lg:w-4/5">
            <div className="flex flex-col flex-1 gap-10 lg:gap-0 lg:flex-row lg:justify-between">
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-primary mb-3 text-center lg:text-left">
                  260+
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Expert Consultants
                </span>
              </div>
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-primary mb-3 text-center lg:text-left">
                  975+
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Active Clients
                </span>
              </div>
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-primary mb-3 text-center lg:text-left">
                  724+
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Projects Delivered
                </span>
              </div>
              <div className="block">
                <div className="font-manrope font-bold text-4xl text-primary mb-3 text-center lg:text-left">
                  89+
                </div>
                <span className="text-gray-900 text-center block lg:text-left">
                  Orders in Queue
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
