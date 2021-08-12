import styled from 'styled-components/native';

import COLORS from '@/utils/styles/colors';
import SIZES from '@/utils/styles/sizes';
import FONTS from '@/utils/styles/fonts';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.BACKGROUND_COLOR};
  padding-horizontal: ${SIZES.CONTAINER_PADDING}px;
`;

const HeaderContainer = styled.View`
  margin-top: 17px;
  margin-bottom: 13px;
`;

const ContentContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.BACKGROUND_COLOR};
`;

const FooterContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const WelcomeText = styled.Text`
  font-family: ${FONTS.ROBOTO_BOLD};
  color: ${COLORS.OFF_BLACK};
  font-size: 34px;
  line-height: 36px;
`;

export default {
  Container,
  HeaderContainer,
  ContentContainer,
  FooterContainer,
  WelcomeText,
};
