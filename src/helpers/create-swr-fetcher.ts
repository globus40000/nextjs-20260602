import { fetchApi } from "@/helpers/fetch-api";
import { withParams } from "@/helpers/with-params";

type Route = string;
type Params = Record<string, unknown>;
type SWRKey = Route | [Route, Params];

export function createSWRFetcher<T>() {
  return async (swrKey: SWRKey): Promise<T | undefined> => {
    const [route, params] = Array.isArray(swrKey) ? swrKey : [swrKey, {}];

    const result = await fetchApi<T>(withParams(route, params), {
      credentials: "include",
    });

    if (result.isError) {
      throw new Error("Something went wrong");
    }

    return result.data;
  };
}
