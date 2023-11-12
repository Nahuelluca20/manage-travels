"use client";
import {UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {usePathname} from "next/navigation";

import {cn} from "@/lib/utils";

import {buttonVariants} from "../ui/button";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: {
    href: string;
    title: string;
  }[];
}

export default function Sidebar({className, items, ...props}: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <div className="w-[250px]">
      <div className="ml-1">
        <UserButton
          showName
          afterSignOutUrl="/"
          appearance={{
            elements: {
              userButtonOuterIdentifier: "text-white text-xs font-semibold",
              userButtonBox: "flex flex-row-reverse gap-3",
              avatarBox: "w-[20px] h-[20px] rounded-full",
            },
          }}
        />
      </div>
      <nav
        className={cn("flex mt-10 space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1", className)}
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
      </nav>
    </div>
  );
}
