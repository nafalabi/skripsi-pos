export type PaginationParams = {
  page: string;
  pagesize: string;
};

export type PaginationData = {
  current_page: number;
  page_size: number;
  total_items: number;
  total_page: number;
};
export type ResponseData<T> = {
  code: number;
  data: T;
  pagination?: PaginationData;
};
export type ResponseError = { code: number; message: string };
export type RequestorReturnType<T> =
  | readonly [result: ResponseData<T>, error: undefined, rawResponse: Response]
  | readonly [result: undefined, error: ResponseError, rawResponse: Response];