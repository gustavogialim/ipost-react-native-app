import {get} from '@/helpers/functionHelper';
import {ApiError} from '@/utils/api/Api';

export default ([response, error]: any[]): [object?, object?] => {
  const responseHeaders = get<object>(response, 'headers', null);
  const responseData = get<object>(response, 'data');

  if (response) {
    return [{data: responseData, headers: responseHeaders}];
  }

  let formattedError: ApiError | null = null;

  if (error.response) {
    const {data, status, headers} = error.response;

    formattedError = {
      config: error.config,
      httpStatusCode: status,
      data,
      headers,
      message: '',
    };
  } else if (error.request) {
    formattedError = {
      config: error.config,
      message: 'The request was made but no response was received',
    };
  } else {
    formattedError = {
      config: error.config,
      message: error.message,
    };
  }

  return [undefined, formattedError];
};
