export const postAuthApi = (path: string, body?: object) => {
  console.log(process.env.API_URL);
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body != null ? JSON.stringify(body) : undefined,
  }).then(async (res) => {
    if (!res.ok) {
      const { message } = await res.json();
      throw new Error(message);
    }

    return res;
  });
};
