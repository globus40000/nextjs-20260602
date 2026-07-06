import { ApiResponse } from "@/types/api";

export async function fetchApi<T>(
  url: string | URL,
  options?: RequestInit & { skipResponseBody?: boolean },
): ApiResponse<T> {
  const { skipResponseBody, ...fetchOptions } = options || {};
  const response = await fetch(url, fetchOptions);

  if (response.status === 404) {
    return { isError: false, data: undefined, response };
  }
  if (!response.ok) {
    return { isError: true, data: undefined, response };
  }
  if (skipResponseBody) {
    return { isError: false, data: undefined, response };
  }

  const data = await response.json();

  return { isError: false, data, response };
}
