"use server";

import { wixClientServer } from "./wixClient";

export const updateUser = async (formData: FormData) => {
  const wixClient = await wixClientServer();

  const id = formData.get("id") as string;
  const username = formData.get("username") as string | undefined;
  const firstName = formData.get("firstName") as string | undefined;
  const lastName = formData.get("lastName") as string | undefined;
  const email = formData.get("email") as string | undefined;
  const phone = formData.get("phone") as string | undefined;

  try {
    const response = await wixClient.members.updateMember(id, {
      contact: {
        firstName: firstName || undefined,
        lastName: lastName || undefined,
        phones: phone ? [phone] : undefined,
      },
      loginEmail: email || undefined,
      profile: username ? { nickname: username } : undefined,
    });

    console.log(response);
  } catch (err) {
    console.error("Failed to update member:", err);
  }
};
