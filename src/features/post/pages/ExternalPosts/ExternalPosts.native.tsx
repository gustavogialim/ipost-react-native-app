import React from 'react';
import {FlatList} from 'react-native';

import Loading from '@/components/Loading/Loading.native';
import LoadingModal from '@/components/LoadingModal/LoadingModal.native';
import PostComponent from '@/features/post/components/Post/Post.container';
import PostDetailsModal from '@/features/post/components/PostDetailsModal/PostDetailsModal.native';
import {Post} from '@/features/post/modules/interfaces';

import Styled from './ExternalPosts.styles.native';

interface Props {
  posts: Post[];
  isLoading: boolean;
  isFetchingPostDetails: boolean;
  shouldShowPostDetailModal: boolean;
  selectedPost: Post | undefined;
  onPostClick: (post: Post) => void;
  handleShouldShowPostDetailModal: () => void;
}

const ExternalPostsScreen = ({
  posts,
  isLoading,
  isFetchingPostDetails,
  shouldShowPostDetailModal,
  selectedPost,
  onPostClick,
  handleShouldShowPostDetailModal,
}: Props): React.ReactElement => {
  const renderNoPostsFound = (): React.ReactElement => (
    <Styled.NoPostsFound>
      <Styled.NoPostsFoundText>
        Nenhum post externo encontrado.
      </Styled.NoPostsFoundText>
    </Styled.NoPostsFound>
  );

  const renderLoading = (): React.ReactElement => <Loading />;

  const renderLoadingModal = (): React.ReactElement => (
    <LoadingModal
      visible={isFetchingPostDetails}
      text="Buscando detalhes do post..."
    />
  );

  const renderPost = ({item}: {item: Post}): React.ReactElement => (
    <PostComponent
      post={item}
      onPress={async (): Promise<void> => await onPostClick(item)}
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
    />
  );

  if (isLoading) {
    return renderLoading();
  }

  return (
    <Styled.Container>
      {renderPosts()}
      {renderPostDetailsModal()}
      {renderLoadingModal()}
    </Styled.Container>
  );
};

export default ExternalPostsScreen;
