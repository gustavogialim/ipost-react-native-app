export default class ApiResponseError extends Error {
  private httpStatusCode: number;
  private data: unknown;
  private headers: object;
  private config: object;

  public constructor({
    httpStatusCode,
    data,
    headers,
    message,
    config,
  }: {
    httpStatusCode?: number;
    data?: unknown;
    headers?: object;
    message?: string;
    config?: object;
  }) {
    super(message);

    this.httpStatusCode = httpStatusCode || -1;
    this.data = data;
    this.headers = headers || {};
    this.data = data;
    this.message = message || '';
    this.config = config || {};
  }

  public get getHttpStatusCode(): number {
    return this.httpStatusCode;
  }

  public get getHeaders(): object {
    return this.headers;
  }

  public get getConfig(): object {
    return this.config;
  }

  public getErrorData<T>(): T {
    return this.data as T;
  }
}
