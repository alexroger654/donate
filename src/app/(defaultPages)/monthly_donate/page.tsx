import Faq from "@/components/Faq";
import Campaigns from "@/components/Home/Campaigns";
import PrimaryButton from "@/components/PrimaryButton";
import React from "react";

export default function MainPage() {
  return (
    <>
      <section className="py-5 mx-auto  px-4 sm:px-6 lg:px-8">
        {/* hero================== */}
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0 mb-10">
            <div className="group w-full h-full">
              <div className="relative h-full">
                <img
                  src="/assets/donate-monthly.jpg"
                  alt="ContactUs tailwind section"
                  className="w-full h-full rounded-xl  bg-blend-multiply bg-primary"
                />
                <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                  Donate Monthly
                </h1>
                <div className="absolute bottom-0 w-full lg:p-11 p-5">
                  <div className="bg-white rounded-lg p-6 block">
                    <h5 className="text-black  text-2xl font-bold leading-6 mb-6">
                      Make an Impact Every Month
                    </h5>
                    <p className="text-gray-600">
                      Change lives with monthly donations. Donatekart Social
                      Investment Plan creates impact every day. Join us to make
                      a difference.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 className="text-black font-manrope text-4xl font-semibold leading-10 mb-11">
              Fill in the details
            </h2>
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Name"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Email"
            />
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Phone"
            />
            <div className="mb-10">
              <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                Preferred method of communication
              </h4>
              <div className="flex">
                <div className="flex items-center mr-11">
                  <input
                    id="radio-group-1"
                    type="radio"
                    name="radio-group"
                    className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                  <label
                    htmlFor="radio-group-1"
                    className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                  >
                    <span className="border border-gray-300 rounded-full mr-2 w-4 h-4  ml-2 "></span>{" "}
                    Phone Pay
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="radio-group-2"
                    type="radio"
                    name="radio-group"
                    className="hidden checked:bg-no-repeat checked:bg-center checked:border-indigo-500 checked:bg-indigo-100"
                  />
                  <label
                    htmlFor="radio-group-2"
                    className="flex items-center cursor-pointer text-gray-500 text-base font-normal leading-6"
                  >
                    <span className="border border-gray-300  rounded-full mr-2 w-4 h-4  ml-2 "></span>{" "}
                    Paypal
                  </label>
                </div>
              </div>
            </div>
            <input
              type="text"
              className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Amount"
            />
            <button className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700  bg-primary shadow-sm">
              Send
            </button>
          </div>
        </div>

        {/* hepl cards-------------------- */}
        <Campaigns />

        {/* features ============= */}
        <section className="py-24 ">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
              <div className="relative w-full text-center lg:text-left lg:w-2/4">
                <h2 className="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                  Process
                </h2>
              </div>
              <div className="relative w-full text-center  lg:text-left lg:w-2/4">
                <p className="text-lg font-normal text-gray-500 mb-5">
                  {`Select the occasion you're celebrating (e.g., birthday,
                  anniversary, festival), the number of cards you wish to gift,
                  and the value of each card.`}
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-primary">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M24.7222 11.6667V7.22225C24.7222 5.99495 23.7273 5 22.5 5H4.72222C3.49492 5 2.5 5.99492 2.5 7.22222V22.7778C2.5 24.0051 3.49492 25 4.72222 25H22.5C23.7273 25 24.7222 24.005 24.7222 22.7777V17.7778M20.8333 17.7778H25.2778C26.5051 17.7778 27.5 16.7829 27.5 15.5556V13.8889C27.5 12.6616 26.5051 11.6667 25.2778 11.6667H20.8333C19.606 11.6667 18.6111 12.6616 18.6111 13.8889V15.5556C18.6111 16.7829 19.606 17.7778 20.8333 17.7778Z"
                      stroke="#e23832"
                      stroke-width="2"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-black">
                  {`Receiver's Details`}
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-black">
                  {`Enter the recipient's name, email, and a heartfelt message.
                  They will receive your message along with the gift card, sure
                  to brighten their day!`}
                </p>
              </div>
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-primary">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.375 15.8571C16.1009 15.8571 17.5 14.458 17.5 12.7321C17.5 11.0062 16.1009 9.6071 14.375 9.6071C12.6491 9.6071 11.25 11.0062 11.25 12.7321C11.25 14.458 12.6491 15.8571 14.375 15.8571ZM14.375 15.8571V20.8571M3.75 13.2264V15.2343C3.75 17.6868 3.75 18.9131 4.27747 19.9685C4.80493 21.0239 5.78567 21.76 7.74715 23.2322L8.57248 23.8516C11.4626 26.0208 12.9077 27.1054 14.5753 27.1054C16.243 27.1054 17.688 26.0208 20.5782 23.8516L21.4035 23.2322C23.365 21.76 24.3457 21.0239 24.8732 19.9685C25.4006 18.9131 25.4006 17.6868 25.4006 15.2343V13.2264C25.4006 9.95932 25.4006 8.32576 24.546 7.05852C23.6913 5.79128 22.1768 5.17918 19.1477 3.95499L18.3223 3.62144C16.4724 2.87381 15.5475 2.5 14.5753 2.5C13.6032 2.5 12.6782 2.87381 10.8283 3.62144L10.003 3.95499C6.97389 5.17919 5.45934 5.79128 4.60467 7.05852C3.75 8.32576 3.75 9.95932 3.75 13.2264Z"
                      stroke="#e23832"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-black">
                  Checkout
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-black">
                  Choose your preferred payment method and complete the
                  transaction. You will receive a payment confirmation
                </p>
              </div>
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-primary">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0067 10V15.6652C15.0067 16.0358 15.1712 16.3873 15.4556 16.6248L18.75 19.375M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="#e23832"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-black">
                  Experience the Joy of Giving
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-black">
                  The recipient(s) will receive an email with the gift card and
                  a coupon code, which they can use to donate
                </p>
              </div>
              <div className="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-primary">
                <div className="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z"
                      stroke="#e23832"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-black">
                  Quick Transaction
                </h4>
                <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-black">
                  We provide faster transaction speeds than competitors, so
                  money arrives and is received faster.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ================ faq============= */}
        <Faq faqType="monthly_payment" />
      </section>
    </>
  );
}
