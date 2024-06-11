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
import { createData, updateData } from "@/shared/commonFunctions";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Loading from "./Loading";

export function DonateNowModal({
  productName,
  productId,
  raised_amount,
  refetch,
}: any) {
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState(0);

  //hooks ===============================
  const { data: session, status }: any = useSession();

  async function handleDonate() {
    await createData(
      {
        user_Id: session?.user?.id,
        user_name: session?.user?.name,
        amount: amount,
        payment_method: "credit_card",
        transaction_type: "one_time",
        status: "completed",
        product_name: productName,
        product_id: productId,
      },
      "transaction",
      setLoading
    );

    await updateData(
      {
        raised_amount: parseInt(raised_amount) + amount,
      },
      "campaign",
      productId,
      setLoading
    );
    refetch();
    toast.success("Donation Successful");
  }

  if (loading || status == "loading") {
    return <Loading />;
  }

  // ============= render======================
  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Donate</DialogTitle>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Amount
          </Label>
          <Input
            id="name"
            className="col-span-3"
            onChange={(e) => setAmount(parseInt(e.target.value))}
          />
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" onClick={handleDonate}>
            Donate
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
