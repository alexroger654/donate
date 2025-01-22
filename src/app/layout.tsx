import type { Metadata } from "next";
import "./globals.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Toaster } from "sonner";
import AuthProvider from "./AuthProvider";

export const metadata: Metadata = {
  title: {
    template: "%s | Galleria Foundation",
    default: "Galleria Foundation",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <AuthProvider>
        <body>
          <Navbar />
          {children}

          <Footer />
          <Toaster richColors />
        </body>
      </AuthProvider>
    </html>
  );
}
