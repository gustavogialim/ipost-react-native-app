import React from 'react';
import {Alert} from 'react-native';

import LazyNavigationHoc from '@/utils/hocs/LazyNavigationHoc';
import {compose} from '@/helpers/functionHelper';
import {
  withPostConsumer,
  PostContext,
} from '@/features/post/providers/PostProvider';
import {Post} from '@/features/post/modules/interfaces';

import ExternalPosts from './ExternalPosts.native';

interface Props {
  postContext: PostContext;
}

const ExternalPostsContainer = ({postContext}: Props): React.ReactElement => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [isFetchingPostDetails, setIsFetchingPostDetails] =
    React.useState(false);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = React.useState<Post>();
  const [shouldShowPostDetailModal, setShouldShowPostDetailModal] =
    React.useState(false);

  const getExternalPosts = React.useCallback(async (): Promise<void> => {
    setIsLoading(true);

    postContext
      .getExternalPosts()
      .then(getExternalPostsSuccess)
      .catch(getExternalPostsError)
      .finally((): void => setIsLoading(false));
  }, [postContext]);

  const getExternalPostsSuccess = (localPosts: Post[]): void => {
    setPosts(localPosts);
  };

  const getExternalPostsError = (): void => {
    Alert.alert(
      'Ops!',
      'Tivemos um probleminha, tente mais tarde ou contate o suporte.',
    );
  };

  const handleShouldShowPostDetailModal = (): void => {
    setShouldShowPostDetailModal(!shouldShowPostDetailModal);
  };

  const onPostClick = async (post: Post): Promise<void> => {
    setIsFetchingPostDetails(true);

    const postId = Number(post.id);
    const postWithDetails = await postContext.getExternalPostDetails(postId);

    setIsFetchingPostDetails(false);

    setSelectedPost(postWithDetails);
    handleShouldShowPostDetailModal();
  };

  React.useEffect((): void => {
    getExternalPosts();
  }, [getExternalPosts]);

  return (
    <LazyNavigationHoc>
      <ExternalPosts
        posts={posts}
        isLoading={isLoading}
        isFetchingPostDetails={isFetchingPostDetails}
        selectedPost={selectedPost}
        shouldShowPostDetailModal={shouldShowPostDetailModal}
        onPostClick={onPostClick}
        handleShouldShowPostDetailModal={handleShouldShowPostDetailModal}
      />
    </LazyNavigationHoc>
  );
};

export default compose(withPostConsumer)(ExternalPostsContainer);
