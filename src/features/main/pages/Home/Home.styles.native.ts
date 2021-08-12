import styled from 'styled-components/native';

import COLORS from '@/utils/styles/colors';
import SIZES from '@/utils/styles/sizes';
import FONTS from '@/utils/styles/fonts';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.INPUT_COLOR};
`;

const HeaderContainer = styled.View`
  margin-top: 17px;
  margin-bottom: 13px;
  padding-horizontal: ${SIZES.CONTAINER_PADDING}px;
`;

const HeaderText = styled.Text`
  font-family: ${FONTS.ROBOTO_BOLD};
  color: ${COLORS.LIGHT_RED};
  font-size: 30px;
  line-height: 36px;
  text-align: center;
`;

const ContentContainer = styled.View`
  flex: 1;
  background-color: ${COLORS.WHITE};
  padding-horizontal: ${SIZES.CONTAINER_PADDING}px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
`;

const Illustration = styled.View`
  width: 320px;
  height: 250px;
  margin-vertical: 20px;
`;

const FooterContainer = styled.View`
  background-color: ${COLORS.WHITE};
  padding-top: 20px;
  padding-bottom: 20px;
  padding-horizontal: ${SIZES.CONTAINER_PADDING}px;
`;

export default {
  Container,
  HeaderContainer,
  HeaderText,
  ContentContainer,
  Illustration,
  FooterContainer,
};
