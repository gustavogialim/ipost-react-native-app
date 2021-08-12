import React from 'react';
import {Alert} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';

import AppScreens from '@/routes/appScreens';
import {HomeStackParamList} from '@/routes/types';
import LazyNavigationHoc from '@/utils/hocs/LazyNavigationHoc';
import {compose} from '@/helpers/functionHelper';
import {
  withPostConsumer,
  PostContext,
} from '@/features/post/providers/PostProvider';
import {Post} from '@/features/post/modules/interfaces';

import MyPosts from './MyPosts.native';

export type MyPostsScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  AppScreens.EditPost
>;
interface Props {
  postContext: PostContext;
  navigation: MyPostsScreenNavigationProp;
}

const MyPostsContainer = ({
  postContext,
  navigation,
}: Props): React.ReactElement => {
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

  const goToEditPostScreen = (post: Post): void => {
    postContext.setSelectedPostToEdit(post);
    navigation.navigate(AppScreens.EditPost);
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
        goToEditPostScreen={goToEditPostScreen}
      />
    </LazyNavigationHoc>
  );
};

export default compose(withPostConsumer)(MyPostsContainer);
