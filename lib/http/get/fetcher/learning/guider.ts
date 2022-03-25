import { RequestInit } from "node-fetch";

export interface returnInterface {
  repo: string;
  materi: any;
}
export type httpType = (url: string, args?: RequestInit) => Promise<Response>;

const guider = (http: httpType) => (): Promise<returnInterface[]> =>
  http("/learning/guide").then((res) => res.json());

export default guider;
