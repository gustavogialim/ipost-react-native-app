import styled from 'styled-components/native';

import COLORS from '@/utils/styles/colors';
import SIZES from '@/utils/styles/sizes';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.BACKGROUND_COLOR};
  padding-horizontal: ${SIZES.CONTAINER_PADDING}px;
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
  ContentContainer,
  FooterContainer,
};
