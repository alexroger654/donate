// Common fields for all users
export interface IUser {
  _id: string;
  role: "consumer" | "admin" | "employee" | "super_admin";
  name: string;
  email: string;
  state: string;
  city: string;
  address: string;
  age: number;
  phone: number;
  password: string;
  gender?: "male" | "female" | "other";
  status?: "active" | "disabled" | "pending";
  phone_number: string;
}
