import React from 'react';

import Button from '@/components/Button/Button.native';
import MobilePostsIllustration from '@/assets/illustrations/mobile_posts.svg';
import COLORS from '@/utils/styles/colors';

import Styled from './Home.styles.native';

interface Props {
  goToAddPostScreen: () => void;
  goToMyFiltersScreen: () => void;
}

const HomeScreen = ({
  goToAddPostScreen,
  goToMyFiltersScreen,
}: Props): React.ReactElement => {
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Styled.HeaderText>iPost</Styled.HeaderText>
      </Styled.HeaderContainer>
      <Styled.ContentContainer>
        <Styled.Illustration>
          <MobilePostsIllustration width={320} height={250} />
        </Styled.Illustration>
        <Button text="Meus Posts" onPress={goToMyFiltersScreen} />
        <Button text="Posts Externos" onPress={goToMyFiltersScreen} />
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
