import type {Metadata} from "next";

import "./globals.css";
import {Inter as FontSans} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";

import Provider from "./_trpc/Provider";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Manage Travels",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning lang="en">
        <body
          className={cn(
            "max-w-[1024px] px-5 md:px-8 xl:px-0 mx-auto min-h-screen bg-background font-sans antialiased",
            fontSans.variable,
          )}
        >
          <Provider>
            <ThemeProvider
              disableTransitionOnChange
              enableSystem
              attribute="class"
              defaultTheme="dark"
            >
              {children}
              {/* {children} */}
            </ThemeProvider>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
