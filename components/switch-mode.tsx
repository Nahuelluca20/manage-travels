"use client";

import {useTheme} from "next-themes";

import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";

export function SwitchMode() {
  const {theme, setTheme} = useTheme();

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="dark-mode">Dark Mode</Label>
      <Switch
        aria-readonly
        checked={theme !== "light"}
        id="dark-mode"
        onCheckedChange={() => {
          if (theme !== "dark") {
            setTheme("dark");
          } else {
            setTheme("light");
          }
        }}
      />
    </div>
  );
}
