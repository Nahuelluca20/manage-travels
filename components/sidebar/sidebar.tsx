"use client";
import {UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";

import {buttonVariants} from "../ui/button";
import {SwitchMode} from "../switch-mode";
import {Separator} from "../ui/separator";
import {Label} from "../ui/label";

import MenuMobileDrawer from "./menu-mobile-drawer";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export default function Sidebar({className, items, ...props}: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="w-full lg:w-[250px] lg:block flex justify-between flex-row-reverse items-center">
      <div className="ml-1 h-[20px] gap-2">
        <UserButton
          showName
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonOuterIdentifier: "text-secondary-foreground text-xs font-semibold",
              userButtonBox: "flex flex-row-reverse gap-3",
              avatarBox: "w-[20px] h-[20px] rounded-full",
            },
          }}
        />
      </div>
      <div className="lg:hidden">
        <MenuMobileDrawer items={items} />
      </div>
      <nav
        className={cn(
          "hidden lg:flex mt-5 space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1",
          className,
        )}
        {...props}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            className={cn(
              buttonVariants({variant: "ghost"}),
              pathname === item.href
                ? "bg-muted hover:bg-muted"
                : "hover:bg-transparent hover:underline",
              "justify-start max-w-[216px]",
            )}
            href={item.href}
          >
            {item.title}
          </Link>
        ))}
        <div className="pt-10 pl-2">
          <Label className="text-xs text-muted-foreground">Settings</Label>
          <Separator className="max-w-[200px] mb-2 mt-1" />
          <SwitchMode />
        </div>
      </nav>
    </div>
  );
}
