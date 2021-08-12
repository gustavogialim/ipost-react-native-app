import styled from 'styled-components/native';

import COLORS from '@/utils/styles/colors';
import FONTS from '@/utils/styles/fonts';

interface ButtonProps {
  buttonColor: string;
}

const ButtonsContainer = styled.View`
  margin-top: 25px;
`;

const Button = styled.TouchableOpacity<ButtonProps>`
  align-self: stretch;
  height: 50px;
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
  ButtonsContainer,
  Button,
  ButtonText,
  ActivityIndicator,
};
