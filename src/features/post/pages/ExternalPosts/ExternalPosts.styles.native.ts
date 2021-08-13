import styled from 'styled-components/native';

import COLORS from '@/utils/styles/colors';
import SIZES from '@/utils/styles/sizes';
import FONTS from '@/utils/styles/fonts';

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${COLORS.BACKGROUND_COLOR};
`;

const ContentContainer = styled.View`
  flex: 1;
  padding-horizontal: ${SIZES.CONTAINER_PADDING}px;
  padding-top: 15px;
  background-color: ${COLORS.BACKGROUND_COLOR};
`;

const NoPostsFound = styled.View`
  justify-content: center;
  align-items: center;
`;

const NoPostsFoundText = styled.Text`
  font-family: ${FONTS.ROBOTO_REGULAR};
  color: ${COLORS.LIGHT_GRAY};
  font-size: 16px;
  line-height: 20px;
`;

export default {
  Container,
  ContentContainer,
  NoPostsFound,
  NoPostsFoundText,
};
