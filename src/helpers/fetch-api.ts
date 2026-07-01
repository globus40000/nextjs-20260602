import { ApiResponse } from "@/types/api";

export async function fetchApi<T>(
  url: string | URL,
  options?: RequestInit,
): ApiResponse<T> {
  const response = await fetch(url, options);

  if (response.status === 404) {
    return { isError: false, data: undefined, response };
  }
  if (!response.ok) {
    return { isError: true, data: undefined, response };
  }

  const data = await response.json();

  return { isError: false, data, response };
}
