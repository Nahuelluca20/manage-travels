"use client";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {UserButton, useUser} from "@clerk/nextjs";

import ZeppelinIcon from "@/assets/icons/zeppelin.svg";

import {Card} from "./ui/card";
import {ModeToggle} from "./mode-toggle";
import {Button} from "./ui/button";

function LinkComponent({text, href, pathname}: {text: string; href: string; pathname: string}) {
  const isActive = pathname === href || (pathname.startsWith(href) && href !== "/");

  return (
    <Link
      className={`flex flex-wrap justify-center text-center transition-colors px-3 rounded-2xl text-sm md:text-base font-medium py-1 link ${
        isActive ? "text-white" : ""
      } ${
        isActive ? "bg-zeppelinOrange-500" : ""
      } transform  hover:bg-zeppelinOrange-500 hover:text-white`}
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
    {text: "Viajes", href: "/travels"},
    {text: "Agregar viaje", href: "/add"},
    // {text: "Perfil", href: "/user-profile"},
    {text: "Ayuda", href: "/help"},
  ];

  return (
    <header className="bg-background py-3 fixed top-0 w-full z-10">
      <nav className="max-w-[1024px] px-5 md:px-8 xl:px-0 mx-auto flex items-center justify-between">
        <Link href={"/"}>
          <Image alt="logo" className="dark:invert" src={ZeppelinIcon} width={50} />
        </Link>
        <Card className="hidden sm:flex rounded-full  md:w-[400px] py-[11px] px-6">
          <ul className="flex w-full items-center justify-between">
            {routes.map((route) => (
              <li key={route.href} className="list-none">
                <LinkComponent href={route.href} pathname={pathname} text={route.text} />
              </li>
            ))}
          </ul>
        </Card>

        {isSignedIn ? (
          <div className="flex gap-2 items-center">
            <UserButton />
            <ModeToggle />
          </div>
        ) : (
          <ul className="flex gap-1 items-center">
            <li>
              <Button variant={"ghost"}>Login</Button>
            </li>
            <li>
              <Button className="bg-orange-600 w-[72px] h-[30px]">Sign up</Button>
            </li>
          </ul>
        )}
      </nav>
      <nav className="sm:hidden flex w-full justify-center mt-2">
        <Card className="rounded-full mx-2 w-full sm:w-[450px] py-[11px] px-6">
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
