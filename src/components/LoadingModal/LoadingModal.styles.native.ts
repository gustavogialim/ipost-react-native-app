import styled from 'styled-components/native';

import COLORS from '@/utils/styles/colors';
import FONTS from '@/utils/styles/fonts';
import SIZES from '@/utils/styles/sizes';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Content = styled.View`
  justify-content: center;
  min-width: 250px;
  max-width: 80%;
  margin: 20px;
  background-color: ${COLORS.WHITE};
  border-radius: 20px;
  padding: 24px ${SIZES.CONTAINER_PADDING}px;
  shadow-color: ${COLORS.BLACK};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

const Text = styled.Text`
  font-family: ${FONTS.ROBOTO_REGULAR};
  color: ${COLORS.OFF_BLACK};
  font-size: 18px;
  line-height: 20px;
  text-align: center;
`;

export default {
  Container,
  Content,
  Text,
};
