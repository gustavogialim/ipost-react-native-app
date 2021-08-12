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

const Title = styled.Text`
  font-family: ${FONTS.ROBOTO_BOLD};
  color: ${COLORS.OFF_BLACK};
  font-size: 22px;
  line-height: 24px;
  text-align: left;
  margin-bottom: 8px;
`;

const ExtraInfo = styled.Text`
  font-family: ${FONTS.ROBOTO_REGULAR};
  color: ${COLORS.LIGHT_GRAY};
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 20px;
`;

const PostText = styled.Text`
  font-family: ${FONTS.ROBOTO_REGULAR};
  color: ${COLORS.OFF_BLACK};
  font-size: 16px;
  line-height: 18px;
`;

const ButtonsContainer = styled.View`
  margin-top: 25px;
`;

const PrimaryButton = styled.TouchableOpacity`
  align-self: stretch;
  height: 50px;
  justify-content: center;
  align-items: center;
  padding-horizontal: 15px;
  border-radius: 25px;
  background-color: ${COLORS.LIGHT_GREEN};
`;

const PrimaryButtonText = styled.Text`
  font-family: ${FONTS.ROBOTO_BOLD};
  color: ${COLORS.WHITE};
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
`;

export default {
  Container,
  Content,
  Title,
  ExtraInfo,
  PostText,
  ButtonsContainer,
  PrimaryButton,
  PrimaryButtonText,
};
