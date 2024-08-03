import axios from "axios";

// interface fetchWrapProps {
//   method: "get" | "post" | "delete";
//   url: string;
//   body?: {};
//   //signal?: AbortSignal;
// }
const config = {
  baseURL: "https://expert-waffle-wrp696x7jp9c5675-3000.app.github.dev/",
  headers: {
    "Content-Type": "application/json",
  },
};

// const fetchWrap = async ({ method, url, body }: fetchWrapProps) => {
//   // const config = {
//   //   baseURL: "https://orange-winner-97rvqvw9w4vf9gg-3000.app.github.dev/",
//   //   headers: {
//   //     "Content-Type": "application/json",
//   //   },
//   //   signal: signal,
//   // };
//   try {
//     //const r = await axios.get(url, config);
//     const res  =
//       (method === "get" && (await axios.get(url, config))) ||
//       (method === "post" && (await axios.post(url, body, config))) ||
//       // (method === 'put' && (await axios.put(url, body, config))) ||
//       (method === "delete" && (await axios.delete(url, config))) ||
//       {};
//       if (!res.ok) {
//         const error = new Error('An error occurred while fetching the data.')
//         // Attach extra info to the error object.
//         error.info = await res.json()
//         error.status = res.status
//         throw error
//       }

//       return res.json()
//     // return data;
//   } catch (e: any) {
//     throw e;
//   }
// };

export const GET = async (url: string) => {
  try {
    const res = await axios.get(url, config);
    return res.data;
  } catch (e: any) {
    console.log(e);
  }
};
// fetchWrap({ method: 'get', url });
//axios.get(url, config).then((res) => res.data);

export const POST = (url: string, body?: {}) =>
  axios.post(url, body, config).then((res) => res.data);
// export const PUT = (url: string, body?: {}) =>
//   fetchWrap({ method: 'put', url, body });

export const DELETE = (url: string) =>
  axios.delete(url, config).then((res) => res.data);
