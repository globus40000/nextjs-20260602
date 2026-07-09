import { Params } from "@/types/common";

export const toParams = (searchParams: URLSearchParams): Params => {
  const result: Params = {};

  for (const [key, value] of searchParams.entries()) {
    if (!(key in result)) {
      result[key] = value;
    } else {
      if (Array.isArray(result[key])) {
        result[key].push(value);
      } else if (result[key] === undefined) {
        result[key] = value;
      } else {
        result[key] = [result[key], value];
      }
    }
  }

  return result;
};
