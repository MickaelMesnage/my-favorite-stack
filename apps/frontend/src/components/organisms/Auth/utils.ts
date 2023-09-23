type PostAuthApiConfig = {
  body?: object;
  headers?: object;
};

export const postAuthApi = (
  path: string,
  { body, headers = {} }: PostAuthApiConfig
) => {
  console.log(process.env.API_URL);
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body: body != null ? JSON.stringify(body) : undefined,
  }).then(async (res) => {
    if (!res.ok) {
      const { message } = await res.json();
      throw new Error(message);
    }

    return res;
  });
};
