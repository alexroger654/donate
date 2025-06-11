'use client'

import { createData } from "@/shared/commonFunctions";
import React, { useState } from "react";
import { toast } from "sonner";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    try {
      setLoading(true);
      await createData(formData, "leads/create", setLoading);
      toast.success("Data submitted successfully");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission failed", error);
      toast.error("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      style={{
        backgroundImage: `url('/assets/home/home-banner-bg.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="py-10 sm:py-16 lg:py-24"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Contact us
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis.
          </p>
        </div>

        <div className="mt-6 overflow-hidden bg-white rounded-xl">
          <div className="px-6 py-12 sm:p-12">
            <h3 className="text-3xl font-semibold text-center text-gray-900">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="mt-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="mt-2.5 block w-full px-4 py-4 text-black border border-gray-200 rounded-md focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">
                    Email address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="mt-2.5 block w-full px-4 py-4 text-black border border-gray-200 rounded-md focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="mt-2.5 block w-full px-4 py-4 text-black border border-gray-200 rounded-md focus:outline-none"
                  />
                </div>
{/* 
                <div>
                  <label className="text-base font-medium text-gray-900">
                    Company name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter your company name"
                    className="mt-2.5 block w-full px-4 py-4 text-black border border-gray-200 rounded-md focus:outline-none"
                  />
                </div> */}

                <div className="sm:col-span-2">
                  <label className="text-base font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Type your message"
                    rows={4}
                    className="mt-2.5 block w-full px-4 py-4 text-black border border-gray-200 rounded-md resize-y focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full px-4 py-4 mt-2 text-base font-semibold text-white bg-primary rounded-md disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}