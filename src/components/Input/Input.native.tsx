import * as React from 'react';
import {TextInputProps} from 'react-native';

import COLORS from '@/utils/styles/colors';

import Styled from './Input.styles.native';

interface InputProps extends TextInputProps {
  placeholderText?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: (e: any) => void;
}
const Input = (props: InputProps): React.ReactElement => {
  const {placeholderText, onChangeText, onBlur, value, multiline} = props;

  return (
    <Styled.Container multiline={multiline}>
      <Styled.ContentContainer>
        <Styled.Input
          placeholder={placeholderText}
          placeholderTextColor={COLORS.LIGHT_GRAY}
          onChangeText={onChangeText}
          onBlur={onBlur}
          value={value}
          {...props}
        />
      </Styled.ContentContainer>
    </Styled.Container>
  );
};

export default Input;
