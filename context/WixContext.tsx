"use client";

import { wixClientServer } from "@/lib/wixClient";
import { createContext } from "react";

export type WixClient = typeof wixClientServer;

export const WixClientContext = createContext<WixClient>(wixClientServer);

export const WixClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={wixClientServer}>
      {children}
    </WixClientContext.Provider>
  );
};
