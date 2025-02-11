"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [cooldown, setCooldown] = useState(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (cooldown > 0) return; // Prevent resubmission during cooldown

        setIsLoading(true);
        setMessage("");

        try {
            const response = await fetch("http://localhost:5000/api/v1/user/forgot-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();
            if (!response.ok) throw new Error(data.message || "Error sending email");

            setMessage("Reset link sent! Please check your email.");
            setCooldown(30); // Start cooldown
            startCooldownTimer();
        } catch (error: any) {
            setMessage(error.message || "Error sending email");
        } finally {
            setIsLoading(false);
        }
    };

    const startCooldownTimer = () => {
        const interval = setInterval(() => {
            setCooldown((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    return (
        <section className="h-screen flex items-center justify-center ">
            <div className="max-w-md w-full p-6 border rounded-lg shadow-lg bg-white lg:-mt-32">
                <h2 className="text-2xl font-bold mb-4 text-center">Forgot Password</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                    />
                    <Button type="submit" className="w-full" disabled={isLoading || cooldown > 0}>
                        {isLoading ? "Sending..." : cooldown > 0 ? `Wait ${cooldown}s` : "Send Reset Link"}
                    </Button>
                </form>
                {message && <p className="mt-3 text-sm text-center text-green-500">{message}</p>}
            </div>
        </section>
    );
}
