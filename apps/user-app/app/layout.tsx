import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "../provider";
import { AppBarClient } from "../components/AppBarClient";
import React from "react"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PocketPay",
  description: "Generated by create turbo/Wallet App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <Providers >
        <body className={inter.className}>
          <div className="min-w-screen min-h-screen bg-[#ebe6e6]">
            <AppBarClient />
            {children}
          </div>
        </body>
      </Providers>
    </html>
  );
}

// export const bal = () => {
//   const balance = useBalance();
//   return <div>
//     Balance is: {balance}
//   </div>
// }