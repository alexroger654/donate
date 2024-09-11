"use client";
import { Button } from "@/components/ui/button";
import { getData } from "@/shared/commonFunctions";
import { ICampaign } from "@/shared/interfaces/campaign.interface";
import { ITransaction } from "@/shared/interfaces/transaction.interface";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function DataTable() {

  //states =========================
  const [date, setDate] = useState('')
  const [transaction, setTransaction] = useState<ITransaction[]>([]);
  const [loading, setLoading] = useState(false);


  //========= hooks ======================================
  const { data: session }: any = useSession();



  // getting and setting data==============================
  useEffect(() => {
    getData(setTransaction, `transaction/list?date=${date}`, setLoading);
  }, [date]);


  console.log(date)

  //====================== render =========================

  return (
    <div className="w-full  mx-auto bg-white shadow-lg rounded-xl border border-gray-100">
      <header className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
        <h2 className="text-lg font-semibold leading-7 text-gray-900">
          My Transactions
        </h2>
        <input onChange={(e) => setDate(e.target.value)} type="date" className="max-w-56 bg-gray-100 text-sm outline-none px-4 py-2 rounded-lg" />
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
                  <div className="font-semibold text-left">Amount</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Donor Name</div>
                </th>
                <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-center">Action</div>
                </th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100">
              {transaction?.map((item) => (
                <tr key={item?._id}>
                  <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="font-medium text-gray-800">
                        {item?.product_name?.slice(0, 70)}
                      </div>
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{item?.amount}</div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500">
                      {item?.user_name || 'Unkown'}
                    </div>
                  </td>
                  <td className="p-2 whitespace-nowrap">
                    {/* <Link href={`/transaction_reports/${item?._id}`} className=""> */}
                    <Button>View Details</Button>
                    {/* </Link> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
