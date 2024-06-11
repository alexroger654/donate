"use client";
import { Button } from "@/components/ui/button";
import { getData } from "@/shared/commonFunctions";
import { ICampaign } from "@/shared/interfaces/campaign.interface";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function DataTable() {
  const { data: session }: any = useSession();

  //states =========================
  const [campaignData, setCampaignData] = useState<ICampaign[]>([]);
  const [loading, setLoading] = useState(false);

  // getting and setting data===========
  useEffect(() => {
    getData(setCampaignData, `campaign/list`, setLoading);
  }, []);

  return (
    <div className="p-3">
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
            <tr>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Campaign Name</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Target Amount</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-left">Raised Amount</div>
              </th>
              <th className="p-2 whitespace-nowrap">
                <div className="font-semibold text-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {campaignData?.map((item) => (
              <tr key={item?._id}>
                <td className="p-2 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="font-medium text-gray-800">
                      {item?.campaign_name?.slice(0, 70)}
                    </div>
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left">{item?.targeted_amount}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <div className="text-left font-medium text-green-500">
                    {item?.raised_amount}
                  </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                  <Link href={`/transaction_reports/${item?._id}`} className="">
                    <Button>View Details</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
