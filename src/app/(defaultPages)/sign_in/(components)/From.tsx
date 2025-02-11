"use client";

import Loading from "@/components/Loading";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { MdOutlineMail, MdLockOutline } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

export default function LoginForm() {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({ email: "", password: "" });
  const router = useRouter();

  async function handleSignIn() {
    setLoading(true);
    try {
      const result: any = await signIn("credentials", {
        redirect: false,
        email: userData.email,
        password: userData.password,
      });

      if (result.error) {
        toast.error("Invalid credentials");
      } else {
        toast.success("Successfully signed in!");
        router?.push("/");
      }
    } catch (error) {
      toast.error("An error occurred during sign-in.");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loading />;

  return (
    <div className="w-full md:w-1/2 py-10 px-5 md:px-10 bg-white shadow-md rounded-lg">
      <div className="text-center mb-6">
        <h1 className="font-bold text-3xl text-gray-900">Log In</h1>
        <p className="text-gray-500">Enter your credentials to access your account</p>
      </div>

      <div className="space-y-4">
        {/* Email Input */}
        <div>
          <label className="text-sm font-semibold">Email</label>
          <div className="relative mt-1">
            <FaRegUser className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              value={userData.email}
              onChange={(e) => setUserData({ ...userData, email: e.target.value })}
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
              placeholder="example@domain.com"
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div>
          <label className="text-sm font-semibold">Password</label>
          <div className="relative mt-1">
            <MdLockOutline className="absolute left-3 top-3 text-gray-400" />
            <input
              type="password"
              value={userData.password}
              onChange={(e) => setUserData({ ...userData, password: e.target.value })}
              className="w-full pl-10 pr-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary outline-none"
              placeholder="••••••••"
              required
            />
          </div>
        </div>

        {/* Forgot Password & Sign Up */}
        <div className="flex justify-between text-sm text-gray-500">
          <button
            type="button"
            className="hover:text-primary transition"
            onClick={() => router.push("/forgot-password")}
          >
            Forgot Password?
          </button>
          <button
            type="button"
            className="hover:text-primary transition"
            onClick={() => router.push("/sign_up")}
          >
            Create an Account
          </button>
        </div>

        {/* Login Button */}
        <button
          type="button"
          onClick={handleSignIn}
          className="w-full bg-primary text-white rounded-lg px-4 py-3 font-semibold hover:bg-opacity-90 transition"
        >
          Log In
        </button>
      </div>
    </div>
  );
}
