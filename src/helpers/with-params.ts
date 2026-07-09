import { type Params } from "@/types/common";

export const withParams = (url: string, params: Params) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      if (!Array.isArray(value)) {
        searchParams.append(key, String(value));
      } else {
        for (const valueItem of value) {
          searchParams.append(key, String(valueItem));
        }
      }
    }
  });

  const queryString = searchParams.toString();

  return queryString ? `${url}?${queryString}` : url;
};
