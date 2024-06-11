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
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function RejectModal({ id, handleEventUpdate }: any) {
  const [message, setMessage] = useState("");

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Enter Reject Message</DialogTitle>
      </DialogHeader>
      <div className=" p-2 w-full">
        <textarea
          id="name"
          rows={5}
          className="col-span-3 w-full border border-gray-200"
          onChange={(e: any) => setMessage(e.target.value)}
        />
      </div>
      <DialogFooter>
        <DialogClose asChild>
          <Button
            type="button"
            variant="destructive"
            onClick={() => handleEventUpdate(id, message, "rejected")}
          >
            Reject
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
