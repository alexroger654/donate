"use client";

import { getData } from "@/shared/commonFunctions";
import { ICategory } from "@/shared/interfaces/category.interface";
import React, { useEffect, useState } from "react";

//////////////// component \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
export default function Categories2() {
  const [categoryData, setCategoryData] = useState<ICategory[]>([]);
  const [loading, setLoading] = useState(false);

  // getting and setting data===========================
  useEffect(() => {
    getData(setCategoryData, "category/list", setLoading);
  }, []);

  //=============== render ==============================

  return (
    <section className="py-24 relative bg-white">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-10 gap-8">
          <div
            className="col-span-10 lg:col-span-4 bg-cover bg-center h-[273px] rounded-xl flex flex-col justify-end p-6 lg:items-start items-center"
            style={{
              backgroundImage:
                "url(https://pagedone.io/asset/uploads/1701234796.png)",
            }}
          >
            <h4 className="font-medium text-xl leading-8 text-white mb-4">
              Launch your business in Simple way
            </h4>
            <form className="form flex flex-col md:flex-row gap-4">
              <div className="flex items-center rounded-[100px] border border-gray-300 bg-transparent py-[10px] px-4 gap-2">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-gray-300"
                    d="M2.56636 5.05771L3.3574 4.93833L3.35732 4.93783L2.56636 5.05771ZM15.7966 18.2737L15.6263 19.0553L15.6268 19.0554L15.7966 18.2737ZM16.2599 13.7333L16.5447 12.9857H16.5447L16.2599 13.7333ZM7.22847 4.71562L6.47965 4.99715V4.99715L7.22847 4.71562ZM7.77827 6.93605L6.99182 6.78942L7.77827 6.93605ZM7.69133 5.94673L8.44016 5.66519L8.44016 5.66519L7.69133 5.94673ZM7.50947 10.0275L8.22992 9.6797L7.50947 10.0275ZM7.39174 9.00921L8.17819 9.15584L7.39174 9.00921ZM12.0495 13.5547L11.8973 12.7693L12.0495 13.5547ZM10.8746 13.3806L10.4858 14.0798L10.8746 13.3806ZM14.0123 13.1744L14.1645 13.9597L14.0123 13.1744ZM15.0221 13.2617L14.7372 14.0093L15.0221 13.2617ZM12.6309 1.60033C12.1923 1.54724 11.7936 1.85978 11.7406 2.2984C11.6875 2.73703 12 3.13565 12.4386 3.18874L12.6309 1.60033ZM17.437 8.10964C17.4969 8.54738 17.9004 8.85366 18.3381 8.79373C18.7758 8.7338 19.0821 8.33035 19.0222 7.89261L17.437 8.10964ZM12.4153 4.66728C11.9766 4.61499 11.5785 4.92825 11.5262 5.36697C11.4739 5.8057 11.7872 6.20374 12.2259 6.25604L12.4153 4.66728ZM14.372 8.36884C14.4311 8.80669 14.834 9.11371 15.2719 9.05457C15.7097 8.99543 16.0167 8.59254 15.9576 8.15469L14.372 8.36884ZM13.8601 12.389L11.8973 12.7693L12.2017 14.3401L14.1645 13.9597L13.8601 12.389ZM11.2634 12.6815C9.77612 11.8544 8.83849 10.9404 8.22992 9.6797L6.78902 10.3753C7.57402 12.0014 8.78472 13.1338 10.4858 14.0798L11.2634 12.6815ZM8.17819 9.15584L8.56471 7.08268L6.99182 6.78942L6.6053 8.86259L8.17819 9.15584ZM8.44016 5.66519L7.9773 4.43408L6.47965 4.99715L6.94251 6.22826L8.44016 5.66519ZM5.49821 2.71763H3.95597V4.31763H5.49821V2.71763ZM3.95597 2.71763C2.67168 2.71763 1.56701 3.80277 1.77539 5.1776L3.35732 4.93783C3.31141 4.63489 3.54293 4.31763 3.95597 4.31763V2.71763ZM1.77532 5.1771C2.09946 7.32491 3.06648 11.3313 5.97539 14.2402L7.10676 13.1088C4.56407 10.5661 3.66524 6.97816 3.3574 4.93833L1.77532 5.1771ZM5.97539 14.2402C9.00538 17.2702 13.3176 18.5524 15.6263 19.0553L15.9669 17.492C13.7373 17.0063 9.80222 15.8043 7.10676 13.1088L5.97539 14.2402ZM15.6268 19.0554C17.0475 19.364 18.2503 18.2434 18.2503 16.8833H16.6503C16.6503 17.3183 16.2987 17.5641 15.9664 17.4919L15.6268 19.0554ZM18.2503 16.8833V15.4607H16.6503V16.8833H18.2503ZM16.5447 12.9857L15.3069 12.5141L14.7372 14.0093L15.9751 14.4809L16.5447 12.9857ZM18.2503 15.4607C18.2503 15.1704 18.2514 14.8874 18.225 14.6494C18.1964 14.3915 18.1293 14.1116 17.9458 13.8454L16.6283 14.7533C16.6081 14.7238 16.6226 14.7165 16.6348 14.826C16.6491 14.9554 16.6503 15.1347 16.6503 15.4607H18.2503ZM15.9751 14.4809C16.2797 14.597 16.4469 14.6619 16.5627 14.7214C16.6607 14.7717 16.6486 14.7827 16.6283 14.7533L17.9458 13.8454C17.7623 13.5791 17.5247 13.4168 17.2939 13.2982C17.0809 13.1888 16.816 13.0891 16.5447 12.9857L15.9751 14.4809ZM7.9773 4.43408C7.87466 4.16108 7.77573 3.89469 7.66674 3.68043C7.54866 3.44829 7.3866 3.20908 7.11966 3.02426L6.20887 4.33973C6.17933 4.31928 6.19043 4.30713 6.24063 4.40583C6.29993 4.52241 6.36441 4.69065 6.47965 4.99715L7.9773 4.43408ZM5.49821 4.31763C5.82567 4.31763 6.00583 4.31878 6.13582 4.33326C6.24588 4.34552 6.23842 4.36019 6.20887 4.33973L7.11966 3.02426C6.85273 2.83945 6.57179 2.77193 6.31295 2.7431C6.07404 2.71649 5.78987 2.71763 5.49821 2.71763V4.31763ZM8.56471 7.08268C8.60382 6.87292 8.6574 6.62237 8.63455 6.36233L7.04069 6.50238C7.03944 6.48823 7.04226 6.4891 7.03653 6.53267C7.02961 6.5853 7.01678 6.65553 6.99182 6.78942L8.56471 7.08268ZM6.94251 6.22826C6.99044 6.35575 7.01532 6.42267 7.03131 6.47328C7.04456 6.51518 7.04193 6.51653 7.04069 6.50238L8.63455 6.36233C8.6117 6.10228 8.51525 5.86492 8.44016 5.66519L6.94251 6.22826ZM8.22992 9.6797C8.20345 9.62488 8.18387 9.58426 8.1674 9.54876C8.15121 9.51385 8.14177 9.49183 8.13578 9.4766C8.13023 9.46251 8.12882 9.45716 8.1288 9.45709C8.12876 9.45693 8.12883 9.45717 8.12889 9.45748C8.12895 9.45778 8.12883 9.45727 8.12861 9.45559L6.54267 9.66729C6.58224 9.96372 6.6988 10.1884 6.78902 10.3753L8.22992 9.6797ZM6.6053 8.86259C6.56274 9.09085 6.50257 9.36686 6.54267 9.66729L8.12861 9.45559C8.13008 9.46666 8.12713 9.46622 8.13191 9.42583C8.13824 9.37232 8.15117 9.30078 8.17819 9.15584L6.6053 8.86259ZM11.8973 12.7693C11.7306 12.8016 11.6452 12.8177 11.5814 12.8255C11.5309 12.8316 11.5304 12.8274 11.5456 12.8298L11.2938 14.4099C11.6255 14.4628 11.9406 14.3907 12.2017 14.3401L11.8973 12.7693ZM10.4858 14.0798C10.7032 14.2007 10.9642 14.3574 11.2938 14.4099L11.5456 12.8298C11.5551 12.8313 11.554 12.8343 11.5177 12.8175C11.4672 12.7942 11.401 12.758 11.2634 12.6815L10.4858 14.0798ZM14.1645 13.9597C14.3011 13.9333 14.3728 13.9197 14.4266 13.9123C14.4711 13.9061 14.472 13.9091 14.4575 13.9078L14.5954 12.3138C14.3298 12.2908 14.0741 12.3475 13.8601 12.389L14.1645 13.9597ZM15.3069 12.5141C15.1032 12.4365 14.8611 12.3368 14.5954 12.3138L14.4575 13.9078C14.443 13.9066 14.4444 13.9038 14.4872 13.9175C14.5389 13.934 14.6072 13.9598 14.7372 14.0093L15.3069 12.5141ZM12.4386 3.18874C15.1145 3.5126 17.0714 5.43918 17.437 8.10964L19.0222 7.89261C18.5579 4.50156 16.0288 2.01159 12.6309 1.60033L12.4386 3.18874ZM12.2259 6.25604C13.3789 6.39347 14.2166 7.21811 14.372 8.36884L15.9576 8.15469C15.7045 6.28104 14.2927 4.89105 12.4153 4.66728L12.2259 6.25604Z"
                    fill="#111827"
                  />
                </svg>
                <input
                  type="text"
                  name="text"
                  id=""
                  placeholder="Enter 10 digit here...."
                  className="w-3/5	outline-none border-none font-normal text-base py-[1px] text-gray-400 bg-transparent"
                />
              </div>
              <button className="bg-primary rounded-[100px] py-[13px] px-6 font-semibold text-sm text-white whitespace-nowrap focus-within:outline-0 shadow-sm shadow-transparent transition-all duration-500 hover:bg-pirmay/80 hover:shadow-indigo-400">
                Get Incentive
              </button>
            </form>
          </div>
          <div className="col-span-10 lg:col-span-6 w-full">
            <div className="box flex h-full justify-center flex-col">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black mb-14 lg:text-left text-center">
                Select from a Range of Categories
              </h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 w-full">
                {categoryData?.map((item) => (
                  <div
                    key={item?._id}
                    className="box flex flex-col items-center"
                  >
                    <button className=" w-28 rounded-lg p-3 flex items-center justify-center mx-auto bg-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-primary/10 hover:shadow-indigo-200">
                      <img
                        src={
                          item?.image_url ||
                          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAtQMBIgACEQEDEQH/xAAaAAEBAQEBAQEAAAAAAAAAAAAABQcGAQQC/8QAOhABAAEDAgEGCgkFAQAAAAAAAAECAwQFEQYTFiFBkpMSIjEyUVNUVWHRNVJxdIGCkbGyFSMlouEH/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANiAAAAAAAAAAAAAAAAAAAAAAkJAAAAAAAAAAAAAAAAAAAAAAAJCQAAAAAAAAAAAAAAAAAAAAAACQkAAAAAAAeTMUxMz0RHXL1H4tiJ4fyomN/Nj/aAVeVt+so7UHK2/WUdqEyOG9F2j/G2P0ObWi+7cfsgp8rb9ZR2oOVt+so7UJnNrRfduP2SeG9F924/ZBT5W36yjtQcrb9ZR2oTObeie7cf9Dm1ovu3H7IKfKW94iLlEzPVFUP25rVNI0/AyNMu4WJbs3JzaKZqojadtp6HSgAAAAAASEgAAAAAACPxZ9AZP5f5QsI/Fn0Bk/l/lAK8eSPsKpimmZqmIiOmZnyQ8mYpo8KqYppiN5mepnHGfFdWdVXgadcmMWnouVx0Td/4DRbF61kWab1i5Tct1eSqmd4lN4quZdrQMuvA8Llop8tHnRT1zHx2Z5wpxJe0W/Fq7M3MKufHo+pP1qfk1THv2srHov49dNdq5G9NUTvuDN/8Az/I1CvXIopru14801TeiqZmI9E/a018Oo5uFo2HXlX/AtUR1U0xE1z1RHplI4Z4tsazdrx79MY+R4X9unfeK6fnAPt4h8/TPv1H7VLCPxF5+mffqP2qWAAAAAAAJCQAAAAAABH4tmI0DJ3naPF3n0eNCwl8TYl7O0TKxcamKrtynxYmduuAcVxjxXVnb4GnVzTjRO1y5HRNyfk450XMvXPZrfewcy9c9mt97AOedBwtxLe0S7ydyJuYVc+Nb382fTD3mXrns1vvYOZeuezW+9pB8XEGt5Ot5nLX58G1T0W7ceSmPmm2667dyK7dVVNdM7xVE9ML/ADL1z2a33sHMvXPZrfewCzpvEn9Yp0vFyo2zLeXRM1RHRcjaen7Xfs20HhTWMPWcPJv2KIt2rkVVTFyJ2hpIAAAAAAEhIAAAAAAAAAb/ABAD8T8QA3+Jv8QAAAAAAAAAkJAAAAAAAAAAAAAAAAAAAAAAAJCQAAAAAAAAAAAAAAAAAAAAAACQkAAAAAAAAAAAAAAAAAAAAAAAkAH/2Q=="
                        }
                        alt=""
                      />
                    </button>
                    <p className="mt-2 w-[92px] text-center font-medium text-sm text-black">
                      {item?.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
