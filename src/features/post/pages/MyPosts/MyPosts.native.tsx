import React from 'react';
import {FlatList} from 'react-native';

import Loading from '@/components/Loading/Loading.native';
import PostComponent from '@/features/post/components/Post/Post.container';
import PostDetailsModal from '@/features/post/components/PostDetailsModal/PostDetailsModal.native';
import {Post} from '@/features/post/modules/interfaces';

import Styled from './MyPosts.styles.native';

interface Props {
  posts: Post[];
  isLoading: boolean;
  shouldShowPostDetailModal: boolean;
  selectedPost: Post | undefined;
  deleteLocalPost: () => Promise<void>;
  goToEditPostScreen: (post: Post) => void;
  onPostClick: (post: Post) => void;
  handleShouldShowPostDetailModal: () => void;
}

const MyPostsScreen = ({
  posts,
  isLoading,
  shouldShowPostDetailModal,
  selectedPost,
  deleteLocalPost,
  goToEditPostScreen,
  onPostClick,
  handleShouldShowPostDetailModal,
}: Props): React.ReactElement => {
  const renderNoPostsFound = (): React.ReactElement => (
    <Styled.NoPostsFound>
      <Styled.NoPostsFoundText>
        Você ainda não tem nenhum post!
      </Styled.NoPostsFoundText>
    </Styled.NoPostsFound>
  );

  const renderLoading = (): React.ReactElement => <Loading />;

  const renderPost = ({item}: {item: Post}): React.ReactElement => (
    <PostComponent
      post={item}
      onPress={async (): Promise<void> => onPostClick(item)}
      goToEditPostScreen={(): void => goToEditPostScreen(item)}
    />
  );

  const renderPosts = (): React.ReactElement => (
    <Styled.ContentContainer>
      {posts.length === 0 && renderNoPostsFound()}

      {posts.length > 0 && (
        <FlatList
          data={posts}
          renderItem={renderPost}
          keyExtractor={(item, index): string =>
            item.id?.toString() || index.toString()
          }
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          maxToRenderPerBatch={10}
          removeClippedSubviews
        />
      )}
    </Styled.ContentContainer>
  );

  const renderPostDetailsModal = (): React.ReactElement => (
    <PostDetailsModal
      visible={shouldShowPostDetailModal}
      post={selectedPost}
      onClose={handleShouldShowPostDetailModal}
      onDeletePost={deleteLocalPost}
    />
  );

  if (isLoading) {
    return renderLoading();
  }

  return (
    <Styled.Container>
      {renderPosts()}
      {renderPostDetailsModal()}
    </Styled.Container>
  );
};

export default MyPostsScreen;
