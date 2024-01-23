export interface IAxiosInstanceProps {
  baseURL: string;
  whiteList?: string[];
  codeList?: Record<number | string, () => void>;
  maps?: { code: string; data: string; msg: string };
  Alert?: (options: { content: string; type: string }) => void;
}
