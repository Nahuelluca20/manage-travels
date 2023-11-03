"use client";
import {httpBatchLink} from "@trpc/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";

import {trpc} from "./client";

export default function Provider({children}: {children: React.ReactNode}) {
  const [queryClient] = useState(() => new QueryClient());
  const [trcpClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:3000/api/trpc",
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trcpClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
