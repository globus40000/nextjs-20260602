import { Response } from "@/types/api";

export async function fetchApi<T>(
  url: string | URL,
  options?: RequestInit,
): Response<T> {
  const response = await fetch(url, options);

  if (response.status === 404) {
    return { isError: false, data: undefined };
  }
  if (!response.ok) {
    return { isError: true, data: undefined };
  }

  const data = await response.json();

  return { isError: false, data };
}
