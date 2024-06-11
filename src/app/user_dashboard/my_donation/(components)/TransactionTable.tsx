"use client";
import { Button } from "@/components/ui/button";
import { getData } from "@/shared/commonFunctions";
import { ICampaign } from "@/shared/interfaces/campaign.interface";
import { ITransaction } from "@/shared/interfaces/transaction.interface";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function TransactionTable() {
  const { data: session }: any = useSession();
  const param = useParams();

  //states =========================
  const [campaignData, setCampaignData] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(false);

  // getting and setting data===========
  useEffect(() => {
    getData(
      setCampaignData,
      `transaction/list?user_id=${session?.user?.id}`,
      setLoading
    );
  }, [session?.user?.id]);

  return (
    <>
      <header className="px-5 py-4 border-b border-gray-100">
        <h2 className="text-lg font-semibold leading-7 text-gray-900">
          My Donations
        </h2>
      </header>
      <div className="p-3">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
              <tr>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Campaign Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Donation Amount</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Payment Method</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Payment Date</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {campaignData?.map((item) => (
                <tr key={item?._id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="font-medium text-gray-800">
                        {item?.product_name?.slice(0, 50)}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{item?.amount}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500 capitalize">
                      {item?.payment_method?.replace(/_/g, " ")}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium ">
                      {item?.createdAt?.slice(0, 10)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
