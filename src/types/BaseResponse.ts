export interface BaseResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export interface BasePaginateResponse<T> {
  page: number;
  take: number;
  itemCount: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  values: T[];
}
