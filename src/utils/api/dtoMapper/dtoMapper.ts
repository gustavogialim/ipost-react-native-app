import {ApiError} from '@/utils/api/Api';

export default <T>(Dto: any) =>
  ([response, error]: [{data: object; headers: object}, ApiError | null]): [
    T,
    ApiError | null,
  ] => {
    if (!response) {
      return [response, error];
    }

    const {data, headers} = response;
    const instance = new Dto(data, headers).parse();

    return [instance, error];
  };
