import type {Metadata} from "next";

import "../globals.css";
import {Noto_Sans} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";
import Sidebar from "@/components/sidebar/sidebar";

import Provider from "../_trpc/Provider";

export const montserrat = Noto_Sans({
  subsets: ["latin-ext"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Manage Travels",
  description: "Generated by create next app",
};

const sidebarNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Viajes",
    href: "/travels",
  },
  {
    title: "Añadir Viaje",
    href: "/add",
  },
  {
    title: "Perfil",
    href: "/user-profile",
  },
];

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <html suppressHydrationWarning lang="en">
        <body
          className={cn(" min-h-screen bg-background font-sans antialiased", montserrat.className)}
        >
          <Provider>
            <ThemeProvider
              disableTransitionOnChange
              enableSystem
              attribute="class"
              defaultTheme="light"
            >
              <div className="max-w-[1200px] lg:flex gap-10 lg:justify-start justify-center px-5 md:px-8 xl:px-0 mt-10 mx-auto">
                <aside>
                  <Sidebar items={sidebarNavItems} />
                </aside>
                <section className="mt-5 ">{children}</section>
              </div>
            </ThemeProvider>
          </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
