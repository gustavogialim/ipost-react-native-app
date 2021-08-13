import * as React from 'react';

import COLORS from '@/utils/styles/colors';

import Styled from './Button.styles.native';

interface Props {
  text: string;
  isLoading?: boolean;
  buttonColor?: COLORS;
  disabled?: boolean;
  onPress?: () => void;
}

const Button = ({
  text,
  isLoading,
  buttonColor,
  disabled,
  onPress,
}: Props): React.ReactElement => {
  const customButtonColor = buttonColor ? buttonColor : COLORS.LIGHT_RED;

  return (
    <Styled.ButtonContainer>
      <Styled.Button
        onPress={onPress}
        buttonColor={customButtonColor}
        disabled={disabled}>
        {!isLoading && <Styled.ButtonText>{text}</Styled.ButtonText>}
        {isLoading && <Styled.ActivityIndicator />}
      </Styled.Button>
    </Styled.ButtonContainer>
  );
};

export default Button;
