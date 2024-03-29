import type {Metadata} from "next";

import "../globals.css";
import {Noto_Sans} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";
import Navbar from "@/components/navbar";

export const montserrat = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Manage Travels",
  description: "administra tus viajes",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning lang="en">
        <body
          className={cn(" min-h-screen bg-background font-sans antialiased", montserrat.className)}
        >
          <ThemeProvider
            disableTransitionOnChange
            enableSystem
            attribute="class"
            defaultTheme="light"
          >
            <Navbar />
            <div className="max-w-[1200px] px-5 md:px-8 xl:px-0 mt-36 md:mt-32 mx-auto">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
