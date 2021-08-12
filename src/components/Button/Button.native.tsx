import * as React from 'react';

import COLORS from '@/utils/styles/colors';

import Styled from './Button.styles.native';

interface Props {
  text: string;
  isLoading?: boolean;
  buttonColor?: COLORS;
  onPress?: () => void;
}

const Button = ({
  text,
  isLoading,
  buttonColor,
  onPress,
}: Props): React.ReactElement => {
  return (
    <Styled.ButtonContainer>
      <Styled.Button onPress={onPress} buttonColor={buttonColor}>
        {!isLoading && <Styled.ButtonText>{text}</Styled.ButtonText>}
        {isLoading && <Styled.ActivityIndicator />}
      </Styled.Button>
    </Styled.ButtonContainer>
  );
};

export default Button;
