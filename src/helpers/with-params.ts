type Params = Record<string, unknown>;

export const withParams = (url: string, params: Params) => {
  const searchParams = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      searchParams.append(key, String(value));
    }
  });

  const queryString = searchParams.toString();

  return queryString ? `${url}?${queryString}` : url;
};
