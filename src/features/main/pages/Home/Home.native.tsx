import React from 'react';

import Button from '@/components/Button/Button.native';
import MobilePostsIllustration from '@/assets/illustrations/mobile_posts.svg';
import COLORS from '@/utils/styles/colors';

import Styled from './Home.styles.native';

interface Props {
  goToAddPostScreen: () => void;
  goToMyPostsScreen: () => void;
  goToExternalPostsScreen: () => void;
}

const HomeScreen = ({
  goToAddPostScreen,
  goToMyPostsScreen,
  goToExternalPostsScreen,
}: Props): React.ReactElement => {
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.HeaderText>iPost</Styled.HeaderText>
      </Styled.HeaderContainer>
      <Styled.ContentContainer>
        <Styled.Illustration>
          <MobilePostsIllustration />
        </Styled.Illustration>
        <Button text="Meus Posts" onPress={goToMyPostsScreen} />
        <Button text="Posts Externos" onPress={goToExternalPostsScreen} />
      </Styled.ContentContainer>
      <Styled.FooterContainer>
        <Button
          text="Novo Post"
          buttonColor={COLORS.LIGHT_GREEN}
          onPress={goToAddPostScreen}
        />
      </Styled.FooterContainer>
    </Styled.Container>
  );
};

export default HomeScreen;
