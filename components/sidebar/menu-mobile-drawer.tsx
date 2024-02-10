import {Menu, X} from "lucide-react";
import Link from "next/link";

import {cn} from "@/lib/utils";

import {Button, buttonVariants} from "../ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import {SwitchMode} from "../switch-mode";
import {Label} from "../ui/label";
import {Separator} from "../ui/separator";

export default function MenuMobileDrawer({
  items,
}: {
  items: {
    href: string;
    title: string;
  }[];
}) {
  return (
    <Drawer direction="left" shouldScaleBackground={false}>
      <DrawerTrigger asChild>
        <Button size="icon" variant="ghost">
          <Menu />
        </Button>
      </DrawerTrigger>
      <DrawerPortal>
        <DrawerContent className="pl-2 flex flex-col rounded-none h-full w-[90%] mt-24 fixed bottom-0 right-0">
          <DrawerHeader className="mt-5 w-full flex justify-between items-center">
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerClose asChild>
              <Button size="icon" variant="ghost">
                <X />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          {items.map((item) => (
            <Link
              key={item.href}
              className={cn(buttonVariants({variant: "ghost"}), "justify-start max-w-[216px]")}
              href={item.href}
            >
              {item.title}
            </Link>
          ))}

          <DrawerFooter className="mb-5">
            <div>
              <Label className="text-xs text-muted-foreground">Settings</Label>
              <Separator className="w-full mb-2 mt-1" />
              <SwitchMode />
            </div>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
