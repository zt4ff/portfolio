import type React from "react";
import "@/app/globals.css";
// import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/next";

// const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kayode Oluwasegun | Fullstack Engineer",
  description:
    "Professional portfolio of Kayode Oluwasegun, a fullstack engineer with over 6 years of experience across multiple industries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
