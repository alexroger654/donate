import React from "react";

export default function MainPage() {
  return (
    <section className="w-full">
      {/* top cards ============================== */}
      <div className="flex flex-wrap gap-x-4 gap-y-12  px-4 py-20 lg:px-6">
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-gray-700 to-gray-400 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">
                  Campaign Created
                </p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  2
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-green-600">+22% </span>
                vs last month
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-blue-700 to-blue-500 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">Total Donations</p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  2,300
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-green-600">+3% </span>vs
                last month
              </p>
            </div>
          </div>
        </div>
        <div className="flex w-72">
          <div className="flex w-full max-w-full flex-col break-words rounded-lg border border-gray-100 bg-white text-gray-600 shadow-lg">
            <div className="p-3">
              <div className="absolute -mt-10 h-16 w-16 rounded-xl bg-gradient-to-tr from-emerald-700 to-emerald-500 text-center text-white shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-4 h-7 w-16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="pt-1 text-right">
                <p className="text-sm font-light capitalize">
                  Campaigns Supported
                </p>
                <h4 className="text-2xl font-semibold tracking-tighter xl:text-2xl">
                  $5,360
                </h4>
              </div>
            </div>
            <hr className="opacity-50" />
            <div className="p-4">
              <p className="font-light">
                <span className="text-sm font-bold text-red-600">-3% </span>vs
                last month
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* campaigns =============================== */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-20 ">
        {/*certificate section */}
        <div className="  mx-auto shadow-lg border rounded-xl p-3 lg:p-6 bg-white">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">
            Your Certificates( 3 Certificate Available )
          </h2>

          <div className="mt-8">
            <form>
              <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                Type
              </label>
              <div className="flex pb-6">
                <div className="relative w-full">
                  <div className=" absolute left-0 top-0 py-3 px-4">
                    <span className="font-normal text-base text-gray-300">
                      Second Delivery
                    </span>
                  </div>
                  <input
                    type="text"
                    className="block w-full h-11 pr-10 pl-36 min-[500px]:pl-52 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                    placeholder="$5.00"
                  />
                  <button
                    id="dropdown-button"
                    data-target="dropdown-delivery"
                    className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                    type="button"
                  >
                    <svg
                      className="ml-2 my-auto"
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                        stroke="#6B7280"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="dropdown-delivery"
                    aria-labelledby="dropdown-delivery"
                    className="z-20 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute top-10 bg-white right-0"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Shopping
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Images
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          News
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Finance
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                Promo Code
              </label>
              <div className="flex pb-4 w-full">
                <div className="relative w-full ">
                  <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                  <input
                    type="text"
                    className="block w-full h-11 pr-11 pl-5 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                    placeholder="xxxx xxxx xxxx"
                  />
                  <button
                    id="dropdown-button"
                    data-target="dropdown"
                    className="dropdown-toggle flex-shrink-0 z-10 inline-flex items-center py-4 px-4 text-base font-medium text-center text-gray-900 bg-transparent  absolute right-0 top-0 pl-2 "
                    type="button"
                  >
                    <svg
                      className="ml-2 my-auto"
                      width="12"
                      height="7"
                      viewBox="0 0 12 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1.5L4.58578 5.08578C5.25245 5.75245 5.58579 6.08579 6 6.08579C6.41421 6.08579 6.74755 5.75245 7.41421 5.08579L11 1.5"
                        stroke="#6B7280"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div
                    id="dropdown"
                    className="absolute top-10 right-0 z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdown-button"
                    >
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Shopping
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Images
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          News
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Finance
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-center border-b border-gray-200">
                <button className="rounded-lg w-full bg-black py-3.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">
                  Download
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* donation cards */}
        <div className="shadow-lg border rounded-xl p-3 lg:p-6 bg-white">
          {[...Array(3)]?.map((_, i) => (
            <div
              key={i}
              className="flex  gap-5 py-6  border-b border-gray-200 group"
            >
              <div className="w-full md:max-w-[100px]">
                <img
                  src="https://pagedone.io/asset/uploads/1701162866.png"
                  alt="perfume bottle image"
                  className="mx-auto h-14"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                <div className="md:col-span-full">
                  <div className="flex flex-col max-[500px]:items-center gap-1">
                    <h6 className="font-semibold text-base leading-7 text-black">
                      Help the childrens in need in lorem
                    </h6>
                    <h6 className="font-normal text-base  text-gray-500">
                      Category
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
