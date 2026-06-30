"use server";

import { BASE_API_URL } from "@/constants/api";
import { parseSetCookie } from "@/helpers/parse-set-cookie";
import { cookies } from "next/headers";

type State = {
  error?: string;
  fields?: {
    login: string;
    password: string;
  };
  redirectTo?: string;
};

export const loginAction = async (
  state: State,
  formData: FormData,
): Promise<State> => {
  const login = formData.get("login")?.toString() ?? "";
  const password = formData.get("password")?.toString() ?? "";

  const result = await fetch(`${BASE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
    headers: { "Content-Type": "application/json" },
  });

  if (result.status !== 200) {
    return {
      error: "Invalid login or password",
      fields: { login, password },
    };
  }

  const cookiesStore = await cookies();

  for (const cookie of parseSetCookie(result.headers.getSetCookie())) {
    const { name, value, options } = cookie;

    cookiesStore.set(name, value, options);
  }

  return { error: "", redirectTo: "/" };
};
