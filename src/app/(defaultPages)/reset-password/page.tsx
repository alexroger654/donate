"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle } from "lucide-react";

export default function ResetPassword() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const router = useRouter()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setMessage("");
        setError("");

        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_URL}user/reset-password`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, newPassword: password }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Error resetting password");

            setMessage("Password reset successfully! You can now log in.");
            await new Promise(resolve => setTimeout(resolve, 4000));
            router.push('/sign_in')


        } catch (error: any) {
            setError(error.message || "Error resetting password");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-6 border rounded-lg shadow-lg bg-white">
                <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        type="password"
                        placeholder="Enter new password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <Input
                        type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? "Resetting..." : "Reset Password"}
                    </Button>
                </form>

                {error && (
                    <div className="mt-3 flex items-center text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4 mr-2" />
                        {error}
                    </div>
                )}

                {message && (
                    <div className="mt-3 flex items-center text-green-500 text-sm">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        {message}
                    </div>
                )}
            </div>
        </section>
    );
}
