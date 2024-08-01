import axios from "axios";

// interface fetchWrapProps {
//   method: "get" | "post" | "delete";
//   url: string;
//   body?: {};
//   signal?: AbortSignal;
// }
const config = {
  baseURL: "https://orange-winner-97rvqvw9w4vf9gg-3000.app.github.dev/",
  //baseURL: "http://localhost:3000",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers":
      "Origin, Content-Type, X-Amz-Date, Authorization, X-Api-Key, X-Amz-Security-Token, locale",
    "Access-Control-Allow-Methods": "GET, POST",
    "Content-Type": "application/json",
  },
};

// const fetchWrap = async ({ method, url, body, signal }: fetchWrapProps) => {
//   const config = {
//     baseURL: "https://orange-winner-97rvqvw9w4vf9gg-3000.app.github.dev/",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     signal: signal,
//   };
//   try {
//     const { data } =
//       (method === "get" && (await axios.get(url, config))) ||
//       (method === "post" && (await axios.post(url, body, config))) ||
//       // (method === 'put' && (await axios.put(url, body, config))) ||
//       (method === "delete" && (await axios.delete(url, config))) ||
//       {};
//     return data;
//   } catch (e: any) {
//     throw e;
//   }
// };

export const GET = (url: string) =>
  axios.get(url, config).then((res) => res.data);

export const POST = (url: string, body?: {}) =>
  axios.post(url, body, config).then((res) => res.data);
// export const PUT = (url: string, body?: {}) =>
//   fetchWrap({ method: 'put', url, body });

export const DELETE = (url: string) =>
  axios.delete(url, config).then((res) => res.data);
