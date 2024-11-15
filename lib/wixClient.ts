/* eslint-disable @typescript-eslint/no-unused-vars */
"use server";
import { createClient, OAuthStrategy } from "@wix/sdk";
import { products, collections } from "@wix/stores";
import { cookies } from "next/headers";

let refreshToken;

export async function wixClientServer() {
  try {
    const cookieStore = await cookies();
    refreshToken = JSON.parse(cookieStore.get("refreshToken")?.value || "{}");
    const wixClient = createClient({
      modules: {
        products,
        collections,
      },
      auth: OAuthStrategy({
        clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
        tokens: {
          accessToken: {
            value: "",
            expiresAt: 0,
          },
          refreshToken,
        },
      }),
    });
    return wixClient;
  } catch (error) {}
}
