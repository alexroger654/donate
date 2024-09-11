"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createData, getData, updateData } from "@/shared/commonFunctions";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Loading from "./Loading";
import { ITransaction } from "@/shared/interfaces/transaction.interface";
import timeAgo from "@/shared/timesAgo";

export function AllDonation({ campaignId }: { campaignId: string }) {
    const [loading, setLoading] = useState(false);
    const [amount, setAmount] = useState(0);
    const [transaction, setTransaction] = useState<ITransaction[]>([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(20);

    //hooks ===============================
    const { data: session, status }: any = useSession();

    async function fetchData() {
        await getData(
            setTransaction,
            `transaction/list?product_id=${campaignId}&&page=${page}&&limit=${limit}`,
            setLoading
        );
    }

    // getting and setting data===========
    useEffect(() => {
        fetchData();
    }, [campaignId, page]);

    if (loading || status == "loading") {
        return <Loading />;
    }

    // ============= render======================
    return (
        <DialogContent className="sm:max-w-4xl">
            <DialogHeader>
                <DialogTitle>Donations</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 py-4">
                {transaction?.length ? (
                    <>
                        {transaction?.map((item) => (
                            <div className="w-full px-4 py-4 flex items-center  gap-4 border rounded-lg mt-4 ">
                                <div
                                    key={item?._id}
                                    className="bg-gray-200 flex items-center justify-center h-16 w-16 rounded-full font-extrabold "
                                >
                                    {item?.user_name?.slice(0, 2) || "UK"}
                                </div>
                                <div>
                                    <h3 className="font-semibold">
                                        {item?.user_name || "Unknown"}
                                    </h3>
                                    <p className="text-muted-foreground text-sm">
                                        Donated ₹{item?.amount}
                                    </p>
                                    <p className="text-muted-foreground text-sm">
                                        {timeAgo(item?.updatedAt as any)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </>
                ) : (
                    <>
                        <p>{page > 1 ? "No More Donor found Please Go Back" : "No Donor Found"}</p>
                    </>
                )}
            </div>
            <DialogFooter>
                {/* <DialogClose asChild> */}
                {page > 1 && (
                    <Button onClick={() => setPage(page - 1)} type="button">
                        Back
                    </Button>
                )}
                {transaction?.length ? (
                    <Button onClick={() => setPage(page + 1)} type="button">
                        Next
                    </Button>
                ) : (
                    <></>
                )}

                {/* </DialogClose> */}
            </DialogFooter>
        </DialogContent>
    );
}
