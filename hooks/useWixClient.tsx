"use client";

import { WixClientContext } from "@/context/WixContext";
import { useContext } from "react";

export const useWixClient = () => {
  const context = useContext(WixClientContext);

  if (!context) {
    throw new Error("useWixClient must be used within a WixClientProvider.");
  }

  return context;
};
