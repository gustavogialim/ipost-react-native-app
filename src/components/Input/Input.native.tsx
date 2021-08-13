import * as React from 'react';
import {TextInputProps} from 'react-native';

import COLORS from '@/utils/styles/colors';

import Styled from './Input.styles.native';

interface InputProps extends TextInputProps {
  placeholderText?: string;
  value?: string;
  error?: string;
  touched?: boolean;
  onChangeText?: (text: string) => void;
  onBlur?: (e: any) => void;
}
const Input = (props: InputProps): React.ReactElement => {
  const {
    placeholderText,
    onChangeText,
    onBlur,
    value,
    error,
    touched,
    multiline,
  } = props;

  return (
    <Styled.Container>
      <Styled.Input
        placeholder={placeholderText}
        placeholderTextColor={COLORS.LIGHT_GRAY}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        multiline={multiline}
        {...props}
      />
      {error && touched && <Styled.ErrorText>{error}</Styled.ErrorText>}
    </Styled.Container>
  );
};

export default Input;
