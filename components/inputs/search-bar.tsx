"use client";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback, useState} from "react";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const [search, setSearch] = useState<string>("");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);

      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div>
      <div className="flex justify-center w-full items-center space-x-5">
        <Input
          className="border-[2px] border-secondary-foreground w-full max-w-[600px] focus:outline-none focus-visible:ring-0 focus-visible:ring-transparent"
          placeholder="Buscar viaje"
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={(e) => {
            e.key === "Enter" && router.push(pathname + "?" + createQueryString("search", search));
          }}
        />
        <Button
          className="h-[40px] bg-zeppelinOrange-500"
          onClick={() => {
            router.push(pathname + "?" + createQueryString("search", search));
          }}
        >
          Buscar
        </Button>
      </div>
    </div>
  );
}
