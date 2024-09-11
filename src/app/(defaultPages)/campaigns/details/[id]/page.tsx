"use client";

import { AllDonation } from "@/components/AllDonation";
import { DonateNowModal } from "@/components/DonateNowModal";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Slider } from "@/components/ui/slider";
import { getData } from "@/shared/commonFunctions";
import { ICampaign } from "@/shared/interfaces/campaign.interface";
import { ITransaction } from "@/shared/interfaces/transaction.interface";
import timeAgo from "@/shared/timesAgo";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaClock, FaUser } from "react-icons/fa";
import { LuXCircle } from "react-icons/lu";

export default function MainPage() {
  //@ts-ignore
  const [campaignData, setCampaignData] = useState<ICampaign>({});
  const [loading, setLoading] = useState(false);
  const [addedProduct, setAddedProduct] = useState<any>([]);
  const [transaction, setTransaction] = useState<ITransaction[]>([])
  const [donationRecievedPercentage, setDonationRecievedPercentage] = useState(1)





  //hooks =====================
  const params = useParams();
  const router = useRouter();
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';



  async function fetchData() {
    await getData(setCampaignData, `campaign/list?id=${params?.id}`, setLoading);
    await getData(setTransaction, `transaction/list?product_id=${params?.id}`, setLoading);
  }



  // getting and setting data===========
  useEffect(() => {
    fetchData()
  }, []);
  useEffect(() => {
    if (campaignData?._id) {
      console.log(campaignData?.raised_amount /
        (campaignData?.targeted_amount / 100), 'ooooooooooooooooooooooooooo')
      setDonationRecievedPercentage(campaignData?.raised_amount /
        (campaignData?.targeted_amount / 100))
    }
  }, [campaignData?._id]);



  console.log()


  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=Check%20this%20out!`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`;
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(currentUrl)}`;



  //===================== render ================
  return (
    <div>
      <div className="">
        <div className="p-6 lg:max-w-7xl max-w-2xl lg:mx-auto">
          <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 w-full lg:sticky top-0 text-center">
              <div className=" rounded-xl">
                <img
                  src={
                    campaignData?.image_url ||
                    "https://dkprodimages.gumlet.io/campaign/cover/Support-Srotoshwini-Trust1150894626.jpeg?format=webp&w=700&dpr=1.0"
                  }
                  alt="Product"
                  className="w-full rounded-xl object-cover mx-auto"
                />
              </div>

              <div className="mt-6 flex flex-wrap  text-justify gap-x-8 gap-y-4 mx-auto">
                <h3 className="text-lg font-semibold ">About</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: campaignData?.campaign_description,
                  }}
                />
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-3xl font-semibold capitalize ">
                {campaignData?.campaign_name}
              </h2>
              <div className="flex flex-wrap gap-4 mt-4">
                <p className=" text-4xl font-semibold">
                  <span> ₹{campaignData?.raised_amount || 0}</span>
                  <span className="text-sm text-gray-600 ml-2">
                    raised out of ₹ {campaignData?.targeted_amount}
                  </span>
                </p>
              </div>
              <div className="w-full ">
                <Slider
                  defaultValue={[
                    donationRecievedPercentage

                  ]}
                  // defaultValue={[5]}
                  max={100}
                  step={1}
                  className={`w-[100%] my-6 bg-red-200 rounded-lg`}
                />
              </div>

              {/* ================ time left */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FaClock className="" />
                  <p>
                    {/* // */}
                    {Math.ceil(
                      (new Date(campaignData?.end_date).getTime() - new Date(campaignData?.start_date).getTime()) / (1000 * 60 * 60 * 24)
                    )} days left
                  </p>
                  { }
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <FaUser className="" />
                  <p>
                    {/* // */}
                    {transaction?.length} Backers
                  </p>
                  { }
                </div>
              </div>



              <div className="flex flex-wrap gap-4 mt-8">

                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className="min-w-[200px] px-4 py-3 bg-primary text-white  text-sm font-semibold rounded"
                    >
                      Donate Now
                    </button>
                    {/* <Button variant="outline">Edit Profile</Button> */}
                  </DialogTrigger>
                  <DonateNowModal productId={campaignData?._id} productName={campaignData?.campaign_name} refetch={fetchData} raised_amount={campaignData?.raised_amount} />
                </Dialog>



              </div>

              {/* social share */}
              <section>
                <div
                  className="mx-auto max-w-sm mt-20 border-4 border-primary shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-primary max-w-5xl mx-5 p-4 md:p-10 flex flex-col items-center justify-center text-center">

                  <p className="text-primary text-xl md:text-2xl font-bold border-b-4 border-primary">Spread the word</p>

                  <ul className="flex flex-row items-center justify-center text-center mt-5">
                    <li className="mx-2">
                      <a href={twitterUrl} target="_blank" aria-label="Share on Twitter">
                        <svg className="h-8 text-primary " fill="currentColor" role="img"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <title>Twitter</title>
                          <path
                            d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z">
                          </path>
                        </svg>
                      </a>
                    </li>

                    <li className="mx-2">
                      <a href={linkedinUrl} target="_blank" aria-label="Share on LinkedIn">
                        <svg className="h-8 text-primary " fill="currentColor" role="img"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <title>LinkedIn</title>
                          <path
                            d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z">
                          </path>
                        </svg>
                      </a>
                    </li>

                    <li className="mx-2">

                      <a href={whatsappUrl}
                        className="p-0.5 rounded-lg flex items-center bg-primary  justify-center transition-all duration-500 ">
                        <svg className="" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 71 72"
                          fill="none">
                          <path
                            d="M12.5068 56.8405L15.7915 44.6381C13.1425 39.8847 12.3009 34.3378 13.4211 29.0154C14.5413 23.693 17.5482 18.952 21.89 15.6624C26.2319 12.3729 31.6173 10.7554 37.0583 11.1068C42.4992 11.4582 47.6306 13.755 51.5108 17.5756C55.3911 21.3962 57.7599 26.4844 58.1826 31.9065C58.6053 37.3286 57.0535 42.7208 53.812 47.0938C50.5705 51.4668 45.8568 54.5271 40.5357 55.7133C35.2146 56.8994 29.6432 56.1318 24.8438 53.5513L12.5068 56.8405ZM25.4386 48.985L26.2016 49.4365C29.6779 51.4918 33.7382 52.3423 37.7498 51.8555C41.7613 51.3687 45.4987 49.5719 48.3796 46.7452C51.2605 43.9185 53.123 40.2206 53.6769 36.2279C54.2308 32.2351 53.445 28.1717 51.4419 24.6709C49.4388 21.1701 46.331 18.4285 42.6027 16.8734C38.8745 15.3184 34.7352 15.0372 30.8299 16.0736C26.9247 17.11 23.4729 19.4059 21.0124 22.6035C18.5519 25.801 17.2209 29.7206 17.2269 33.7514C17.2237 37.0937 18.1503 40.3712 19.9038 43.2192L20.3823 44.0061L18.546 50.8167L25.4386 48.985Z"
                            fill="#ffff" />
                          <path fillRule="evenodd" clipRule="evenodd"
                            d="M43.9566 36.8847C43.5093 36.5249 42.9856 36.2716 42.4254 36.1442C41.8651 36.0168 41.2831 36.0186 40.7236 36.1495C39.8831 36.4977 39.3399 37.8134 38.7968 38.4713C38.6823 38.629 38.514 38.7396 38.3235 38.7823C38.133 38.8251 37.9335 38.797 37.7623 38.7034C34.6849 37.5012 32.1055 35.2965 30.4429 32.4475C30.3011 32.2697 30.2339 32.044 30.2557 31.8178C30.2774 31.5916 30.3862 31.3827 30.5593 31.235C31.165 30.6368 31.6098 29.8959 31.8524 29.0809C31.9063 28.1818 31.6998 27.2863 31.2576 26.5011C30.9157 25.4002 30.265 24.42 29.3825 23.6762C28.9273 23.472 28.4225 23.4036 27.9292 23.4791C27.4359 23.5546 26.975 23.7709 26.6021 24.1019C25.9548 24.6589 25.4411 25.3537 25.0987 26.135C24.7562 26.9163 24.5939 27.7643 24.6236 28.6165C24.6256 29.0951 24.6864 29.5716 24.8046 30.0354C25.1049 31.1497 25.5667 32.2144 26.1754 33.1956C26.6145 33.9473 27.0937 34.6749 27.6108 35.3755C29.2914 37.6767 31.4038 39.6305 33.831 41.1284C35.049 41.8897 36.3507 42.5086 37.7105 42.973C39.1231 43.6117 40.6827 43.8568 42.2237 43.6824C43.1018 43.5499 43.9337 43.2041 44.6462 42.6755C45.3588 42.1469 45.9302 41.4518 46.3102 40.6512C46.5334 40.1675 46.6012 39.6269 46.5042 39.1033C46.2714 38.0327 44.836 37.4007 43.9566 36.8847Z"
                            fill="#fff" />
                        </svg></a>
                    </li>

                    <li className="mx-2">
                      <a href={facebookUrl} target="_blank" aria-label="Share on Facebook">
                        <svg className="h-8 text-primary " fill="currentColor" role="img"
                          viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <title>Facebook</title>
                          <path
                            d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z">
                          </path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              <div className="mt-8">
                {campaignData?.products?.length ? (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold ">Products</h3>
                  </div>
                ) : (
                  <></>
                )}

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  {campaignData?.products?.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1 "
                    >
                      <div className="overflow-hidden bg-white rounded-md shadow-lg border">
                        <div className="aspect-w-4 aspect-h-3 p-1">
                          <img
                            className="object-cover w-full h-20 rounded-md"
                            src={
                              item?.product_image_url ||
                              "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600"
                            }
                          // alt={item.name}
                          />
                        </div>
                        <div className="p-2 pb-3 w-full">
                          <p className="text-md font-bold text-black">
                            {item.product_name}
                          </p>

                          <div className="flex items-end mt-1">
                            <p className="text-xs font-bold text-black">
                              Price: {item.product_name}
                            </p>
                            <p className="ml-2 text-sm font-medium text-gray-500"></p>
                          </div>
                          <div className=" mt-2">
                            <button
                              onClick={() => {
                                setAddedProduct([...addedProduct, item]);
                              }}
                              className="w-full rounded-lg py-0.5 text-center text-white text-xs bg-primary"
                            >
                              Donate Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <div className="mt-8">
                  {addedProduct?.length ? (
                    <h3 className="text-lg font-semibold ">Donate</h3>
                  ) : (
                    <></>
                  )}

                  {addedProduct?.map((item: any, i: number) => (
                    <div
                      key={i}
                      className="flex-none w-full sm:w-2/3 lg:w-full lg:flex-1  relative mt-6"
                    >
                      <div className="overflow-hidden bg-white rounded-md shadow-lg border flex items-center ">
                        <div className="aspect-w-4 aspect-h-3 p-1">
                          <img
                            className="object-cover w-full h-20 rounded-md"
                            src={
                              item?.product_image_url ||
                              "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=600"
                            }
                          // alt={item.name}
                          />
                        </div>
                        <div className="p-2 pb-3 w-full">
                          <p className="text-md font-bold text-black">
                            {item.product_name}
                          </p>

                          <div className="flex items-end mt-1">
                            <p className="text-xs font-bold text-black">
                              Price: {item.product_name}
                            </p>
                            <p className="ml-2 text-sm font-medium text-gray-500"></p>
                          </div>
                          <div className=" absolute top-1 right-3 text-gray-900">
                            <Button
                              onClick={() => {
                                setAddedProduct(
                                  addedProduct?.filter(
                                    (oldItem: any) =>
                                      oldItem.product_name !== item.product_name
                                  )
                                );
                              }}
                              size="icon"
                              variant="ghost"
                            >
                              <LuXCircle size={16} />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {
                    addedProduct?.length ? <button
                      type="button"
                      className="min-w-[120px] px-4 mt-5 py-3 bg-primary text-white  text-sm font-semibold rounded"
                    >
                      Donate Now
                    </button> : <></>
                  }
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold ">Top Donors</h3>

                {
                  transaction?.slice(0, 5)?.map(item => <div className="w-full px-4 py-4 flex items-center  gap-4 border rounded-lg mt-4 ">
                    <div key={item?._id} className="bg-gray-200 flex items-center justify-center h-16 w-16 rounded-full font-extrabold ">
                      {item?.user_name?.slice(0, 2) || 'UK'}
                    </div>
                    <div>
                      <h3 className="font-semibold">{item?.user_name || 'Unknown'}</h3>
                      <p className="text-muted-foreground text-sm">Donated ₹{item?.amount}</p>
                      <p className="text-muted-foreground text-sm">{timeAgo(item?.updatedAt as any)}</p>
                    </div>
                  </div>)
                }

                {transaction?.length > 5 &&
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="mt-5 block mx-auto px-12">View all</Button>
                      {/* <Button variant="outline">Edit Profile</Button> */}
                    </DialogTrigger>
                    <AllDonation campaignId={campaignData?._id as string} />
                  </Dialog>

                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}
