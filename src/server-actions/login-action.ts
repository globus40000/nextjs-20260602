"use server";

import { parseSetCookie } from "@/helpers/parse-set-cookie";
import { requestLogin } from "@/services/auth/request-login";
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

  const { isError, response } = await requestLogin({ login, password });

  if (isError) {
    return {
      error: "Invalid login or password",
      fields: { login, password },
    };
  }

  const cookiesStore = await cookies();

  for (const cookie of parseSetCookie(response.headers.getSetCookie())) {
    const { name, value, options } = cookie;

    cookiesStore.set(name, value, options);
  }

  return { error: "", redirectTo: "/" };
};
