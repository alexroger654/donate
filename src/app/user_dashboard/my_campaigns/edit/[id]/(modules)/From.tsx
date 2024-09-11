"use client";

import React, { useEffect, useState } from "react";
import {
  BookOpenIcon,
  BookmarkSquareIcon,
  CalculatorIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/solid";
import {
  LuBookOpen,
  LuLocateFixed,
  LuPhoneCall,
  LuUsers2,
} from "react-icons/lu";
import { createData, getData } from "@/shared/commonFunctions";
import Loading from "@/components/Loading";
import { IProduct } from "@/shared/interfaces/product.interface";
import { IProductKit } from "@/shared/interfaces/productKit.interface";
import MultiSelect from "@/components/Multiselect";
import { ICategory } from "@/shared/interfaces/category.interface";
import { toast } from "sonner";
import { useParams, useRouter } from "next/navigation";
import { HiOutlineXCircle, HiPlus } from "react-icons/hi2";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Products } from "./Products";
import { useSession } from "next-auth/react";
import TextEditor from "@/components/TextEditor";

interface ISelectedProduct {
  product_id: string;
  product_name: string;
  product_description?: string;
  product_price: number;
  product_quantity: number;
  product_image_url: string;
}

////////////////// components //////////////////////

export default function From() {
  //============= states ===========================
  const [categoryData, setCategoryData] = useState<ICategory[]>([]);
  const [productData, setProductData] = useState<IProduct[]>([]);
  const [productKitData, setProductKitData] = useState<IProductKit[]>([]);
  const [productOptions, setProductOptions] = useState<any>([]);
  const [productKitOptions, setProductKitOptions] = useState<any>({});
  const [editorState, setEditorState] = useState("");
  const [selectedProductKit, setSelectedProductKit] = useState<any>([]);
  const [selectedProducts, setSelectedProducts] = useState<ISelectedProduct[]>(
    []
  );
  const [steps, setStep] = useState({
    stepsItems: ["Campaigner", "Beneficiary", "Details", "product"],
    currentStep: 1,
  });

  const [campaignData, setCampaignData] = useState({
    user_name: "",
    user_email: "",
    user_phone_number: "",
    user_id: "",
    campaign_name: "",
    campaign_description: "",
    beneficiary_party_type: "individual",
    beneficiary_party_name: "",
    image_url: "",
    category_name: "",
    targeted_amount: 0,
    location: "",
    start_date: "",
    end_date: "",
    product_ids: [],
    product_kit_ids: [],
    documents: [],
    isVerified: false,
    created_at: new Date(),
    status: "pending",
    products: [],
    productKits: [],
  });
  const [loading, setLoading] = useState(false);

  //========== hooks ===================
  const router = useRouter();
  const { data: session }: any = useSession();
  const param = useParams();

  // ============= handle create =============
  async function handleUpdate() {
    const dataWithProduct = {
      ...campaignData,
      products: selectedProducts,
      campaign_description: editorState,
      user_id: session?.user?.id,
    };

    await createData(dataWithProduct, "campaign", setLoading);
    toast.success("campaign created");
    router.push("/user_dashboard/my_campaigns");
  }

  //=========== fetching data ====================
  useEffect(() => {
    getData(setProductData, "product/list", setLoading);
    getData(setProductKitData, "product_kit/list", setLoading);
    getData(setCategoryData, "category/list", setLoading);
    getData(setCampaignData, `campaign/list?id=${param?.id}`, setLoading);
  }, []);

  //setting options ==============================

  useEffect(() => {
    if (productData.length) {
      const opt = productData.map((item) => {
        return { value: item._id, label: item.name };
      });
      setProductOptions(opt);
    }
    if (productKitData.length) {
      const opt = productData.map((item) => {
        return { value: item._id, label: item.name };
      });
      setProductKitOptions(opt);
    }
  }, [productData?.length]);
  useEffect(() => {
    if (campaignData?.campaign_description) {
      setEditorState(campaignData?.campaign_description);
    }
  }, [campaignData]);

  // ===============================

  function checkProduct(id: string) {
    const index = selectedProducts?.findIndex(
      (item) => item?.product_id === id
    );
    if (index !== -1) {
      return true;
    } else {
      return false;
    }
  }
  function toggleProduct(data: ISelectedProduct) {
    if (checkProduct(data.product_id)) {
      const newSelectedProducts = selectedProducts?.filter(
        (item) => item?.product_id !== data?.product_id
      );
      setSelectedProducts(newSelectedProducts);
    } else {
      const newSelectedProducts = [...selectedProducts, data];
      setSelectedProducts(newSelectedProducts);
    }
  }

  //loading ======================================

  if (loading) return <Loading />;

  //////////////// render ////////////////////////////
  return (
    <form
      action=""
      className="h-fit col-span-2 bg-white border border-slate-200 rounded-2xl lg:p-12 p-8 w-full max-w-lg md:max-w-4xl  mx-auto"
    >
      {/* tabs header ========================= */}
      <div className="max-w-2xl mx-auto px-4 md:px-0 mb-8">
        <ul
          aria-label="Steps"
          className="items-center text-gray-600 font-medium md:flex"
        >
          {steps.stepsItems.map((item, idx) => (
            <li
              key={idx}
              onClick={() => setStep({ ...steps, currentStep: idx + 1 })}
              aria-current={steps.currentStep == idx + 1 ? "step" : false}
              className="flex-1 last:flex-none flex gap-x-2 md:items-center cursor-pointer"
            >
              <div className="flex items-center flex-col gap-x-2">
                <div
                  className={`w-8 h-8 rounded-full border-2 flex-none flex items-center justify-center ${steps.currentStep > idx + 1
                    ? "bg-primary border-primary/90"
                    : "" || steps.currentStep == idx + 1
                      ? "border-primary/90"
                      : ""
                    }`}
                >
                  <span
                    className={` ${steps.currentStep > idx + 1
                      ? "hidden"
                      : "" || steps.currentStep == idx + 1
                        ? "text-primary/90"
                        : ""
                      }`}
                  >
                    {idx + 1}
                  </span>
                  {steps.currentStep > idx + 1 ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5 text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  ) : (
                    ""
                  )}
                </div>
                <hr
                  className={`h-12 border md:hidden ${idx + 1 == steps.stepsItems.length
                    ? "hidden"
                    : "" || steps.currentStep > idx + 1
                      ? "border-primary/90"
                      : ""
                    }`}
                />
              </div>
              <div className="h-8 flex items-center md:h-auto">
                <h3
                  className={`text-sm ${steps.currentStep == idx + 1 ? "text-primary/90" : ""
                    }`}
                >
                  {item}
                </h3>
              </div>
              <hr
                className={`hidden mr-2 w-full border md:block ${idx + 1 == steps.stepsItems.length
                  ? "hidden"
                  : "" || steps.currentStep > idx + 1
                    ? "border-primary/90"
                    : ""
                  }`}
              />
            </li>
          ))}
        </ul>
      </div>
      {/* tabs content============================*/}

      {/* ================== tab one ========================================= */}
      {/* ==================================================================== */}
      {/* ================== tab one  =========================================*/}
      {steps?.currentStep == 1 && (
        <>
          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              Name{" "}
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <LuBookOpen size={20} />
              </div>
              <input
                type="text"
                defaultValue={campaignData.user_name}
                onChange={(e) =>
                  setCampaignData({
                    ...campaignData,
                    user_name: e.target.value,
                  })
                }
                id="default-search"
                className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="User Name"
              />
            </div>
          </div>
          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              Email{" "}
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25201 7L8.15881 10.8953C10.2686 12.1612 11.3235 12.7941 12.4825 12.7665C13.6416 12.739 14.6652 12.0566 16.7124 10.6917L21.748 7M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="default-search"
                defaultValue={campaignData.user_email}
                onChange={(e) =>
                  setCampaignData({
                    ...campaignData,
                    user_email: e.target.value,
                  })
                }
                className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              Phone{" "}
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <LuPhoneCall size={20} />
              </div>
              <input
                type="text"
                id="default-search"
                defaultValue={campaignData.user_phone_number}
                onChange={(e) =>
                  setCampaignData({
                    ...campaignData,
                    user_phone_number: e.target.value,
                  })
                }
                className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Enter Your Phone Number"
              />
            </div>
            <div className="relative mb-8 mt-8">
              <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                Campaign Category
              </label>
              <div className="relative text-gray-500 focus-within:text-gray-900">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.25201 7L8.15881 10.8953C10.2686 12.1612 11.3235 12.7941 12.4825 12.7665C13.6416 12.739 14.6652 12.0566 16.7124 10.6917L21.748 7M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <select
                  name=""
                  id=""
                  defaultValue={campaignData.category_name}
                  onChange={(e) =>
                    setCampaignData({
                      ...campaignData,
                      category_name: e.target.value,
                    })
                  }
                  className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                >
                  <option className="capitalize" value="select">
                    Select Category
                  </option>
                  {categoryData?.map((item, i) => (
                    <option key={i} className="capitalize" value={item.name}>
                      {item?.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <button
            onClick={() => setStep({ ...steps, currentStep: 2 })}
            className="w-full h-12 mt-14 rounded-full bg-primary hover:bg-primary transition-all duration-700 shadow-sm text-white text-base font-semibold leading-6 flex items-center justify-center"
          >
            Continue{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* ================== tab two  ================================*/}
      {/* =========================================================== */}
      {/* ================== tab two  ================================*/}

      {steps?.currentStep == 2 && (
        <>
          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              Campaign Name{" "}
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <LuBookOpen size={20} />
              </div>
              <input
                type="text"
                id="default-search"
                defaultValue={campaignData.campaign_name}
                onChange={(e) =>
                  setCampaignData({
                    ...campaignData,
                    campaign_name: e.target.value,
                  })
                }
                className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Campaign Name"
              />
            </div>
          </div>
          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              Campaign will benefit
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.25201 7L8.15881 10.8953C10.2686 12.1612 11.3235 12.7941 12.4825 12.7665C13.6416 12.739 14.6652 12.0566 16.7124 10.6917L21.748 7M10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20Z"
                    stroke="#6B7280"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <select
                name=""
                id=""
                defaultValue={campaignData.beneficiary_party_type}
                onChange={(e) =>
                  setCampaignData({
                    ...campaignData,
                    beneficiary_party_type: e.target.value,
                  })
                }
                className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
              >
                <option value="ngo">NGO</option>
                <option value="individual">My Self</option>
                <option value="individual">
                  Individual Other than My self
                </option>
              </select>
            </div>
          </div>
          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              Beneficiary party Name / NGO Name
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <LuUsers2 size={20} />
              </div>
              <input
                type="text"
                id="default-search"
                defaultValue={campaignData.beneficiary_party_name}
                onChange={(e) =>
                  setCampaignData({
                    ...campaignData,
                    beneficiary_party_name: e.target.value,
                  })
                }
                className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="name"
              />
            </div>
          </div>
          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              Location
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <LuLocateFixed size={20} />
              </div>
              <input
                type="text"
                id="default-search"
                defaultValue={campaignData.location}
                onChange={(e) =>
                  setCampaignData({
                    ...campaignData,
                    location: e.target.value,
                  })
                }
                className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Enter Your Phone Number"
              />
            </div>
          </div>

          <button
            onClick={() => setStep({ ...steps, currentStep: 3 })}
            className="w-full h-12 mt-14 rounded-full bg-primary hover:bg-primary transition-all duration-700 shadow-sm text-white text-base font-semibold leading-6 flex items-center justify-center"
          >
            Continue{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}

      {/* ================== tab three==================== */}
      {/* =================================================*/}
      {/* ================== tab three =================== */}
      {steps?.currentStep == 3 && (
        <>
          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              Amount
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <LuBookOpen size={20} />
              </div>
              <input
                type="text"
                id="default-search"
                defaultValue={campaignData.targeted_amount}
                onChange={(e) =>
                  setCampaignData({
                    ...campaignData,
                    targeted_amount: parseInt(e.target.value),
                  })
                }
                className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Amount"
              />
            </div>
          </div>
          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              Start Date
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <LuBookOpen size={20} />
              </div>
              <input
                type="date"
                id="default-search"
                defaultValue={campaignData?.start_date?.slice(0, 10)}
                onChange={(e) =>
                  setCampaignData({
                    ...campaignData,
                    start_date: e.target.value,
                  })
                }
                className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Campaign Name"
              />
            </div>
          </div>
          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              End Date
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <LuBookOpen size={20} />
              </div>
              <input
                type="date"
                id="default-search"
                defaultValue={campaignData?.end_date?.slice(0, 10)}
                onChange={(e) =>
                  setCampaignData({
                    ...campaignData,
                    end_date: e.target.value,
                  })
                }
                className="w-full block h-12 pr-5 pl-12 py-2.5 text-lg leading-7 font-normal shadow-xs text-gray-900 bg-transparent border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none"
                placeholder="Campaign Name"
              />
            </div>
          </div>

          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              Description
            </label>
            <div className="relative text-gray-500 focus-within:text-gray-900">
              {/* <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                <LuLocateFixed size={20} />
              </div> */}
              <TextEditor
                editorState={editorState}
                setEditorState={setEditorState}
              />
            </div>
          </div>

          <div className="te"></div>

          <button
            onClick={() => setStep({ ...steps, currentStep: 4 })}
            className="w-full h-12 mt-14 rounded-full bg-primary hover:bg-primary transition-all duration-700 shadow-sm text-white text-base font-semibold leading-6 flex items-center justify-center"
          >
            Next
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}
      {steps?.currentStep == 4 && (
        <>
          <div className="relative mb-8">
            <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
              Add Products
            </label>
            <div className="grid grid-cols-3 gap-2">
              {selectedProducts?.map((item: any, i: number) => (
                <div key={i}>
                  <div className=" p-2 border flex items-center justify-between border-gray-200 rounded-md my-2 ">
                    <p>{item?.product_name}</p>
                    {/* <p
                      className="text-lg"
                      onClick={() => {
                        const selectedProduct = {
                          product_id: item?._id,
                          product_name: item?.name,
                          product_description: item?.description,
                          product_price: item?.price,
                          product_quantity: 1,
                          product_image_url: item?.image_url,
                        };
                        toggleProduct(selectedProduct);
                      }}
                    >
                      <HiOutlineXCircle />
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <div className="relative text-gray-500 border border-dashed bg-gray-100 h-32 rounded-lg focus-within:text-gray-900 flex items-center justify-center cursor-pointer">
                  <span className="text-3xl bg-white rounded-full text-gray-400">
                    {" "}
                    <HiPlus />
                  </span>
                </div>
              </DialogTrigger>
              <Products
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
              />
            </Dialog>

            <div className="relative mb-8 mt-8">
              <label className="flex  items-center mb-2 text-gray-600 text-base leading-6 font-medium">
                Document
              </label>
              <Dialog>
                <DialogTrigger asChild>
                  <div className="relative text-gray-500 border border-dashed bg-gray-100 h-32 rounded-lg focus-within:text-gray-900 flex items-center justify-center cursor-pointer">
                    <span className="text-3xl bg-white rounded-full text-gray-400">
                      {" "}
                      <HiPlus />
                    </span>
                  </div>
                </DialogTrigger>
              </Dialog>
            </div>
          </div>

          <button
            type="button"
            onClick={handleUpdate}
            className="w-full h-12 mt-14 rounded-full bg-primary hover:bg-primary transition-all duration-700 shadow-sm text-white text-base font-semibold leading-6 flex items-center justify-center"
          >
            Create{" "}
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </>
      )}
    </form>
  );
}
