import { RequestInit } from "node-fetch";
import { isText } from "istextorbinary";

export type httpType = (url: string, args?: RequestInit) => Promise<Response>;
export type returnType = string | ArrayBuffer;

const content =
  (http: httpType) =>
  (repo: string, path: string): Promise<returnType> =>
    http(`/learning/content/${repo}?path=${encodeURIComponent(path)}`).then(
      async (res) => {
        const text = await res.clone().text();

        if (isText(null, text as any)) return text;
        return await res.arrayBuffer();
      }
    );

export default content;
