import React from 'react';
import {Alert} from 'react-native';

import LazyNavigationHoc from '@/utils/hocs/LazyNavigationHoc';
import {compose} from '@/helpers/functionHelper';
import {
  withPostConsumer,
  PostContext,
} from '@/features/post/providers/PostProvider';
import {Post} from '@/features/post/modules/interfaces';

import MyPosts from './MyPosts.native';

interface Props {
  postContext: PostContext;
}

const MyPostsContainer = ({postContext}: Props): React.ReactElement => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [posts, setPosts] = React.useState<Post[]>([]);

  const getLocalPosts = React.useCallback(async (): Promise<void> => {
    setIsLoading(true);

    postContext
      .getLocalPosts()
      .then(getLocalPostsSuccess)
      .catch(getLocalPostsError)
      .finally((): void => setIsLoading(false));
  }, [postContext]);

  const getLocalPostsSuccess = (localPosts: Post[]): void => {
    setPosts(localPosts);
  };

  const getLocalPostsError = (): void => {
    Alert.alert(
      'Ops!',
      'Tivemos um probleminha, tente mais tarde ou contate o suporte.',
    );
  };

  const deleteLocalPost = async (postId: string): Promise<void> => {
    await postContext.deleteLocalPost(postId);
    await getLocalPosts();
  };

  React.useEffect((): void => {
    getLocalPosts();
  }, [getLocalPosts]);

  return (
    <LazyNavigationHoc>
      <MyPosts
        posts={posts}
        isLoading={isLoading}
        deleteLocalPost={deleteLocalPost}
      />
    </LazyNavigationHoc>
  );
};

export default compose(withPostConsumer)(MyPostsContainer);
