import styled from 'styled-components/native';

import COLORS from '@/utils/styles/colors';

const Container = styled.TouchableOpacity`
  flex: 1;
  justify-content: center;
  background-color: ${COLORS.BACKGROUND_COLOR};
`;

const ActivityIndicator = styled.ActivityIndicator.attrs({
  size: 'large',
  color: COLORS.LOADING_COLOR,
})``;

export default {
  Container,
  ActivityIndicator,
};
