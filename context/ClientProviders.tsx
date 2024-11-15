"use client";
import React from "react";
import { WixClientProvider } from "./WixContext";

function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <WixClientProvider>{children}</WixClientProvider>
    </>
  );
}

export default ClientProviders;
