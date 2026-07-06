import { BASE_API_URL } from "@/constants/api";
import { fetchApi } from "@/helpers/fetch-api";
import { User } from "@/types/users";
import { cookies } from "next/headers";

export const getCurrentUser = async () => {
  const cookiesStore = await cookies();

  const result = await fetchApi<{ user: User }>(`${BASE_API_URL}/auth/user`, {
    headers: {
      Cookie: cookiesStore.toString(),
    },
  });

  return {
    ...result,
    data: result.data?.user,
  };
};
