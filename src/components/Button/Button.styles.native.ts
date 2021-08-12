import styled from 'styled-components/native';

import COLORS from '@/utils/styles/colors';
import FONTS from '@/utils/styles/fonts';

interface ButtonProps {
  buttonColor: string;
}

const ButtonContainer = styled.View`
  margin-top: 15px;
`;

const Button = styled.TouchableOpacity<ButtonProps>`
  align-self: stretch;
  height: 45px;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
  border-radius: 25px;
  background-color: ${({buttonColor}: ButtonProps): string =>
    buttonColor ? buttonColor : COLORS.LIGHT_RED};
`;

const ButtonText = styled.Text`
  font-family: ${FONTS.ROBOTO_BOLD};
  color: ${COLORS.WHITE};
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
`;

const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'small',
  color: COLORS.WHITE,
})``;

export default {
  ButtonContainer,
  Button,
  ButtonText,
  ActivityIndicator,
};
