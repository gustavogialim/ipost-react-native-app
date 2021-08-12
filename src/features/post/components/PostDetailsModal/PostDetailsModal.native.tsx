import * as React from 'react';
import {Modal} from 'react-native';

import {Post} from '@/features/post/modules/interfaces';

import Styled from './PostDetailsModal.styles.native';

interface Props {
  visible: boolean;
  post: Post;
  onClose: () => void;
}

const PaperIndicator = ({
  visible,
  post,
  onClose,
}: Props): React.ReactElement => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <Styled.Container>
        <Styled.Content>
          <Styled.Title>{post.title}</Styled.Title>
          <Styled.ExtraInfo>{`11/08/2021 - ${post.author}`}</Styled.ExtraInfo>
          <Styled.PostText>{post.text}</Styled.PostText>

          <Styled.ButtonsContainer>
            <Styled.PrimaryButton onPress={onClose}>
              <Styled.PrimaryButtonText>Fechar</Styled.PrimaryButtonText>
            </Styled.PrimaryButton>
          </Styled.ButtonsContainer>
        </Styled.Content>
      </Styled.Container>
    </Modal>
  );
};

export default PaperIndicator;
