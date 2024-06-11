export interface ITransaction {
  _id: string;
  user_Id: string;
  user_name: string;
  amount: number;
  payment_method: string;
  transaction_type: "one_time" | "monthly";
  status: "completed" | "pending";
  product_name: string;
  product_id: string;
  createdAt: string;
  updatedAt: string;
}
