import {AxiosResponse, AxiosError} from 'axios';

export default (promise: any): Promise<[AxiosResponse, AxiosError]> =>
  promise.then((data: any) => [data]).catch((err: any) => [null, err]);
