import * as React from 'react';

import PostDetailsModal from '@/features/post/components/PostDetailsModal/PostDetailsModal.native';
import {Post} from '@/features/post/modules/interfaces';

import Styled from './Post.styles.native';

interface Props {
  post: Post;
  shouldShowPostDetailModal: boolean;
  handleShouldShowPostDetailModal: () => void;
  onDeletePost?: () => Promise<void>;
  goToEditPostScreen?: () => void;
}

const PostNative = ({
  post,
  shouldShowPostDetailModal,
  handleShouldShowPostDetailModal,
  onDeletePost,
  goToEditPostScreen,
}: Props): React.ReactElement => {
  const renderPostDetailsModal = (): React.ReactElement => (
    <PostDetailsModal
      visible={shouldShowPostDetailModal}
      post={post}
      onClose={handleShouldShowPostDetailModal}
      onDeletePost={onDeletePost}
    />
  );

  return (
    <Styled.Container onPress={handleShouldShowPostDetailModal}>
      <Styled.ContentContainer>
        <Styled.InfoContainer>
          <Styled.TitleText>{post.title}</Styled.TitleText>
          <Styled.DateText>11/08/2021</Styled.DateText>
        </Styled.InfoContainer>

        <Styled.InfoContainer>
          <Styled.PostText numberOfLines={1}>{post.text}</Styled.PostText>
          {goToEditPostScreen && (
            <Styled.ActionButton onPress={goToEditPostScreen}>
              <Styled.ActonText>Editar</Styled.ActonText>
            </Styled.ActionButton>
          )}
        </Styled.InfoContainer>
      </Styled.ContentContainer>

      {renderPostDetailsModal()}
    </Styled.Container>
  );
};

export default PostNative;
