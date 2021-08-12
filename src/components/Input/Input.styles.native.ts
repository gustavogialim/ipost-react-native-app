import styled from 'styled-components/native';

import COLORS from '@/utils/styles/colors';
import FONTS from '@/utils/styles/fonts';

interface ContainerProps {
  multiline: boolean | undefined;
}

const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${({multiline}: ContainerProps): string =>
    multiline ? '120px' : '55px'};
  margin-bottom: 15px;
  padding: 4px;
  background-color: ${COLORS.INPUT_COLOR};
  border-radius: 16px;
`;

const ContentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  font-family: ${FONTS.ROBOTO_REGULAR};
  width: 100%;
  padding-left: 16px;
  font-size: 15px;
  color: ${COLORS.OFF_BLACK};
`;

export default {
  Container,
  ContentContainer,
  Input,
};
