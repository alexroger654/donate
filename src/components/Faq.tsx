"use client";

import { getData } from "@/shared/commonFunctions";
import { IFaq } from "@/shared/interfaces/faq.interface";
import React, { useEffect, useState } from "react";

const Faq = ({ faqType }: any) => {
  const [faqData, setFaqData] = useState<IFaq[]>([]);
  const [loading, setLoading] = useState(false);

  // getting and setting data===========
  useEffect(() => {
    getData(setFaqData, "faq/list", setLoading);
  }, []);

  const [faq, setFaq] = useState<any>([]);

  const toggleFaq = (index: any) => {
    setFaq(
      faq.map((item: any, i: any) => {
        if (i === index) {
          item.open = !item.open;
        } else {
          item.open = false;
        }

        return item;
      })
    );
  };

  useEffect(() => {
    if (faqType) {
      let filteredData = faqData.filter((item) => item.type == faqType);

      let convertedFqaData = filteredData?.map((item) => {
        return {
          question: item?.qus,
          answer: item?.ans,
          open: false,
        };
      });
      setFaq(convertedFqaData);
    }
  }, [faqType, faqData.length]);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faq.map((item: any, index: number) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 cursor-pointer hover:bg-gray-50"
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
                onClick={() => toggleFaq(index)}
              >
                <span className="flex text-lg font-semibold text-black">
                  {" "}
                  {item.question}{" "}
                </span>

                <svg
                  className={`w-6 h-6 text-gray-400 ${item.open ? "rotate-180" : ""
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              <div
                className={`${item.open ? "block" : "hidden"
                  } px-4 pb-5 sm:px-6 sm:pb-6`}
              >
                <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
