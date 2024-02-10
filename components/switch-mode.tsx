"use client";

import {useTheme} from "next-themes";
import {useEffect, useState} from "react";

import {Switch} from "@/components/ui/switch";
import {Label} from "@/components/ui/label";

export function SwitchMode() {
  const [mounted, setMounted] = useState(false);

  const {theme, setTheme} = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Label htmlFor="dark-mode">Dark Mode</Label>
      <Switch
        aria-readonly
        checked={theme === "dark"}
        id="dark-mode"
        onCheckedChange={() => (theme === "light" ? setTheme("dark") : setTheme("light"))}
      />
    </div>
  );
}
