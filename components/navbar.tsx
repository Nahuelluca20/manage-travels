"use client";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {SignInButton, UserButton, useUser, SignUpButton} from "@clerk/nextjs";
import clsx from "clsx";

import ZeppelinIcon from "@/assets/icons/zeppelin.svg";

import {Card} from "./ui/card";
import {ModeToggle} from "./mode-toggle";
import {Button} from "./ui/button";

function LinkComponent({text, href, pathname}: {text: string; href: string; pathname: string}) {
  const isActive = pathname === href || (pathname.startsWith(href) && href !== "/");

  return (
    <Link
      className={clsx(
        "flex flex-wrap justify-center text-center transition-colors px-3 rounded-2xl text-sm transform  hover:bg-zeppelinOrange-500 hover:text-white md:text-base font-medium py-1 link",
        {
          // Sets the background color to zeppelin orange when the button is active

          "bg-zeppelinOrange-500": isActive,
          "text-white": isActive,
        },
      )}
      href={href}
    >
      {text}
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const {isSignedIn} = useUser();
  const routes = [
    {text: "Inicio", href: "/"},
    {text: "Pricing", href: "/pricing"},
    {text: "Ayuda", href: "/help"},
    // {text: "Viajes", href: "/travels"},
    // {text: "Agregar viaje", href: "/add"},
  ];

  return (
    <header className="bg-background py-3 fixed top-0 w-full z-10">
      <nav className="max-w-[1200px] px-5 md:px-8 xl:px-0 mx-auto flex items-center justify-between">
        <Link className={`w-[50px]  ${isSignedIn ? "xl:w-[75px]" : "xl:w-[140px]"}`} href={"/"}>
          <Image alt="logo" className="dark:invert" src={ZeppelinIcon} width={50} />
        </Link>
        <Card className="hidden sm:flex rounded-full md:w-[310px] py-[5px] px-6">
          <ul className="flex w-full items-center justify-between">
            {routes.map((route) => (
              <li key={route.href} className="list-none">
                <LinkComponent href={route.href} pathname={pathname} text={route.text} />
              </li>
            ))}
          </ul>
        </Card>

        <div className=" w-[76px] h-[36px]">
          {isSignedIn ? (
            <div className="flex gap-2 items-center">
              <UserButton afterSignOutUrl="/" />
              <ModeToggle />
            </div>
          ) : (
            <ul className="flex gap-1 items-center">
              <li>
                <SignInButton afterSignInUrl={`/`} redirectUrl={`/`}>
                  <Button variant={"ghost"}>Login</Button>
                </SignInButton>
              </li>
              <li>
                <SignUpButton afterSignUpUrl={`/`} redirectUrl={`/`}>
                  <Button className="bg-orange-600 w-[72px] h-[30px]">Sign up</Button>
                </SignUpButton>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <nav className="sm:hidden flex w-full justify-center mt-2">
        <Card className="rounded-full mx-2 w-[300px] sm:w-[310px] py-[11px] px-6">
          <ul className="flex w-full items-center justify-between">
            {routes.map((route) => (
              <li key={route.href} className="list-none">
                <LinkComponent href={route.href} pathname={pathname} text={route.text} />
              </li>
            ))}
          </ul>
        </Card>
      </nav>
    </header>
  );
}
