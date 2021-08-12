import {format} from 'date-fns';

const BRAZILIAN_DATE_FORMAT = 'dd/MM/yyyy';

export const formatDate = (date: Date): string => {
  return format(date, BRAZILIAN_DATE_FORMAT);
};
