import lodashFp from 'lodash/fp';
import lodashGet from 'lodash/get';
import lodashIsNil from 'lodash/isNil';

export function get<T = any>(
  data: object,
  path: string,
  defaultValue?: any,
): T {
  return lodashGet(data, path, defaultValue) as T;
}

export const {compose} = lodashFp;
export const isNil = lodashIsNil;
