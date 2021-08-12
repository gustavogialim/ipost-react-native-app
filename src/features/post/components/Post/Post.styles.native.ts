import styled from 'styled-components/native';

import COLORS from '@/utils/styles/colors';
import FONTS from '@/utils/styles/fonts';

const Container = styled.TouchableOpacity`
  width: 100%;
  height: 70px;
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  margin-bottom: 25px;
`;

const ContentContainer = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border-radius: 10px;
  border-left-width: 6px;
  border-left-color: ${COLORS.RED};
`;

const InfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const TitleText = styled.Text`
  width: 70%;
  font-family: ${FONTS.ROBOTO_BOLD};
  color: ${COLORS.OFF_BLACK};
  font-size: 14px;
  line-height: 15px;
`;

const DateText = styled.Text`
  font-family: ${FONTS.ROBOTO_REGULAR};
  color: ${COLORS.LIGHT_GRAY};
  font-size: 13px;
  line-height: 15px;
`;

const PostText = styled.Text`
  width: 70%;
  font-family: ${FONTS.ROBOTO_REGULAR};
  color: ${COLORS.MEDIUM_GRAY};
  font-size: 13px;
  line-height: 15px;
`;

const ActionButton = styled.TouchableOpacity`
  background-color: ${COLORS.BLUE};
  border-radius: 10px;
  padding: 3px 6px;
`;

const ActonText = styled.Text`
  font-family: ${FONTS.ROBOTO_REGULAR};
  color: ${COLORS.WHITE};
  font-size: 13px;
  line-height: 15px;
`;

export default {
  Container,
  ContentContainer,
  InfoContainer,
  TitleText,
  DateText,
  PostText,
  ActionButton,
  ActonText,
};
