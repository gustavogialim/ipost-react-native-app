import styled from 'styled-components/native';

import COLORS from '@/utils/styles/colors';
import FONTS from '@/utils/styles/fonts';

interface InputProps {
  multiline: boolean | undefined;
}

const Container = styled.View`
  width: 100%;
  margin-bottom: 15px;
  padding: 4px;
`;

const Input = styled.TextInput<InputProps>`
  width: 100%;
  height: ${({multiline}: InputProps): string =>
    multiline ? '120px' : '55px'};
  padding-left: 16px;
  font-family: ${FONTS.ROBOTO_REGULAR};
  font-size: 15px;
  color: ${COLORS.OFF_BLACK};
  background-color: ${COLORS.INPUT_COLOR};
  border-radius: 16px;
`;

const ErrorText = styled.Text`
  width: 100%;
  margin-top: 10px;
  font-family: ${FONTS.ROBOTO_REGULAR};
  font-size: 13px;
  line-height: 14px;
  color: ${COLORS.LIGHT_RED};
`;

export default {
  Container,
  Input,
  ErrorText,
};
