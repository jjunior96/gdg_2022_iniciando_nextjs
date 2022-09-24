import { AxiosError } from 'axios';

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  data?: T;
};

export type ErrorProps = {
  data: {
    error: string;
  };
  status: number;
} & AxiosError;
