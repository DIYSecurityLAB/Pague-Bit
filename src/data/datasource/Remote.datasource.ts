/* eslint-disable @typescript-eslint/no-explicit-any */
import { Result } from '@/utils/Result';
import axios, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios';
import { z } from 'zod';

export type SerializeSchemas =
  | z.ZodObject<any>
  | z.ZodArray<any>
  | z.ZodDiscriminatedUnion<string, any>;

export type RemoteGetReq<Response extends SerializeSchemas> = {
  url: string;
  model: Response;
  params?: any;
};

export type RemotePostReq<Response extends SerializeSchemas> = {
  url: string;
  model: Response;
  body?: any;
};

type RemoteRequestRes<Response extends SerializeSchemas> = Promise<
  Response['_type'] | null
>;

export type HeaderValues =
  | 'Accept'
  | 'Authorization'
  | 'Content-Encoding'
  | 'Content-Length'
  | 'Content-Type'
  | 'User-Agent';

export class RemoteDataSource {
  private api: AxiosInstance;

  constructor(baseURL?: string) {
    this.api = axios.create({
      baseURL: baseURL,
      headers: {},
    });
  }

  public setBaseURL(baseURL: string): void {
    this.api.defaults.baseURL = baseURL;
  }

  public setHeaders(type: HeaderValues, value: string): void {
    this.api.defaults.headers.common[type] = value;
  }

  setToken(token: string) {
    this.api.defaults.headers.authorization = `Bearer ${token}`;
  }

  public async get<Response extends SerializeSchemas>({
    model,
    url,
    params,
  }: RemoteGetReq<Response>): RemoteRequestRes<Response> {
    const { data } = await this.api.get<Response>(url, {
      params,
      timeout: 100000,
    });

    const serialized = model.safeParse(data);

    if (!serialized.success) return null;

    return serialized.data;
  }

  public async post<Response extends SerializeSchemas>({
    model,
    url,
    body,
  }: RemotePostReq<Response>): RemoteRequestRes<Response> {
    const { data } = await this.api.post<Response>(url, body, {
      timeout: 150000,
    });

    const serialized = model.safeParse(data);

    if (!serialized.success) return null;

    return serialized.data;
  }

  public static checkError(err: AxiosError) {
    switch (err?.response?.status) {
      case HttpStatusCode.Unauthorized:
        return Result.Error({ code: 'UNAUTHORIZED' });
      case HttpStatusCode.NotFound:
        return Result.Error({ code: 'NOT_FOUND' });
    }
  }
}
