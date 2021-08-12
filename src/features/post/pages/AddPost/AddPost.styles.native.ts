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
  margin-bottom: 35px;
`;

const HeaderText = styled.Text`
  font-family: ${FONTS.ROBOTO_REGULAR};
  color: ${COLORS.LIGHT_GRAY};
  font-size: 18px;
  line-height: 20px;
`;

const ContentContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.BACKGROUND_COLOR};
`;

const FooterContainer = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default {
  Container,
  HeaderContainer,
  HeaderText,
  ContentContainer,
  FooterContainer,
};
