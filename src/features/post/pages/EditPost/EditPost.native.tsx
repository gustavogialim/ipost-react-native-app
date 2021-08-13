import React from 'react';
import {Formik, FormikProps} from 'formik';

import Button from '@/components/Button/Button.native';
import Input from '@/components/Input/Input.native';
import COLORS from '@/utils/styles/colors';
import {Post, PostFormaValues} from '@/features/post/modules/interfaces';
import {postValidationScheme} from '@/features/post/modules/schemas';

import Styled from './EditPost.styles.native';

interface Props {
  isLoading: boolean;
  post: Post;
  onSubmit: (values: PostFormaValues) => Promise<void>;
}

const EditPost = ({isLoading, post, onSubmit}: Props): React.ReactElement => {
  const initialValues: PostFormaValues = {
    title: post.title,
    text: post.text,
    author: post.author,
  };

  return (
    <Formik
      validationSchema={postValidationScheme}
      initialValues={initialValues}
      onSubmit={onSubmit}>
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        dirty,
        isValid,
      }: FormikProps<PostFormaValues>): React.ReactElement => (
        <Styled.Container>
          <Styled.ContentContainer>
            <Input
              placeholderText="Título"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              error={errors.title}
              touched={touched.title}
            />
            <Input
              placeholderText="Texto do post..."
              multiline
              onChangeText={handleChange('text')}
              onBlur={handleBlur('text')}
              value={values.text}
              error={errors.text}
              touched={touched.text}
            />
            <Input
              placeholderText="Autor"
              onChangeText={handleChange('author')}
              onBlur={handleBlur('author')}
              value={values.author}
              error={errors.author}
              touched={touched.author}
            />
          </Styled.ContentContainer>
          <Styled.FooterContainer>
            <Button
              text="Salvar"
              buttonColor={COLORS.LIGHT_GREEN}
              isLoading={isLoading}
              onPress={handleSubmit}
              disabled={!isValid || !dirty}
            />
          </Styled.FooterContainer>
        </Styled.Container>
      )}
    </Formik>
  );
};

export default EditPost;
