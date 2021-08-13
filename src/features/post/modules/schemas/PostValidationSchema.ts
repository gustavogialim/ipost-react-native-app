import * as yup from 'yup';

export const postValidationScheme = yup.object().shape({
  title: yup.string().required('O título do post é obrigatório.'),
  text: yup.string().required('O texto do post é obrigatório.'),
  author: yup.string().required('O autor do post é obrigatório.'),
});
