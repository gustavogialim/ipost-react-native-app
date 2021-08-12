import axios, {
  AxiosStatic,
  AxiosInstance,
  AxiosBasicCredentials,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  ResponseType,
} from 'axios';
import {stringify} from 'query-string';

import catcher from '@/utils/api/catcher/catcher';

interface IApiData {
  timeout?: number;
}

export interface ApiError {
  config: AxiosRequestConfig;
  httpStatusCode?: number;
  message?: string;
  data?: object;
  headers?: object;
}

export interface ApiResponse<T = any> {
  data: T;
}

interface IApiDependencies {
  axios: AxiosStatic;
  stringify: (value: {[key: string]: any}) => string;
  catcher: any;
}

export interface IApiParams {
  url: string;
  headers?: object;
  auth?: AxiosBasicCredentials;
  query?: object;
  body?: object;
  responseType?: ResponseType;
  timeout?: number;
}

export default class Api {
  private axios: AxiosInstance;
  private stringify: (value: object) => string;
  private catcher: any;

  public constructor(
    data: IApiData = {},
    dependencies: IApiDependencies = {
      axios,
      stringify,
      catcher,
    },
  ) {
    this.axios = data.timeout
      ? dependencies.axios.create({timeout: data.timeout})
      : dependencies.axios.create();
    this.stringify = dependencies.stringify;
    this.catcher = dependencies.catcher;
  }

  private parseUrl = (url: string, params: any): string => {
    const parsedParams = this.stringify(params);
    return `${url}?${parsedParams}`;
  };

  private buildHeaders = (header?: any): object => {
    const defaultHeader = {
      'development-platform': 'react-native',
      Authorization: '',
    };

    return Object.assign(defaultHeader, header);
  };

  public get(params: IApiParams): [AxiosResponse, AxiosError] {
    const {
      url,
      headers: customHeaders,
      auth,
      query,
      body: data,
      responseType,
      timeout = 0,
    } = params;

    const headers = this.buildHeaders(customHeaders);

    const finalUrl = this.parseUrl(url, query);
    const config: AxiosRequestConfig = {
      headers,
      auth,
      data,
      responseType,
      timeout,
    };

    return this.catcher(this.axios.get(finalUrl, config));
  }

  public post(params: IApiParams): [AxiosResponse, AxiosError] {
    const {url, headers: customHeaders, body, query} = params;

    const headers = this.buildHeaders(customHeaders);

    const config = {headers};

    const finalUrl = this.parseUrl(url, query);

    return this.catcher(this.axios.post(finalUrl, body, config));
  }

  public put(params: IApiParams): [AxiosResponse, AxiosError] {
    const {url, headers: customHeaders, body} = params;

    const headers = this.buildHeaders(customHeaders);

    const config = {headers};

    return this.catcher(this.axios.put(url, body, config));
  }

  public patch(params: IApiParams): [AxiosResponse, AxiosError] {
    const {url, headers: customHeaders, body} = params;

    const headers = this.buildHeaders(customHeaders);

    const config = {headers};

    return this.catcher(this.axios.patch(url, body, config));
  }

  public delete(params: IApiParams): [AxiosResponse, AxiosError] {
    const {url, headers: customHeaders, body, query} = params;

    const headers = this.buildHeaders(customHeaders);

    const config = {headers, data: body};

    const finalUrl = this.parseUrl(url, query);

    return this.catcher(this.axios.delete(finalUrl, config));
  }
}
