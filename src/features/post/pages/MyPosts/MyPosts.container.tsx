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
  const [isLoading, setIsLoading] = React.useState(true);
  const [posts, setPosts] = React.useState<Post[]>([]);
  const [selectedPost, setSelectedPost] = React.useState<Post>();
  const [shouldShowPostDetailModal, setShouldShowPostDetailModal] =
    React.useState(false);

  const getLocalPosts = React.useCallback(async (): Promise<void> => {
    postContext
      .getLocalPosts()
      .then(getLocalPostsSuccess)
      .catch(getLocalPostsError)
      .finally((): void => {
        setIsLoading(false);
      });
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

  const deleteLocalPost = async (): Promise<void> => {
    if (selectedPost) {
      await postContext.deleteLocalPost(selectedPost.id as string);
      await getLocalPosts();

      handleShouldShowPostDetailModal();
    }
  };

  const goToEditPostScreen = (post: Post): void => {
    postContext.setSelectedPostToEdit(post);
    navigation.navigate(AppScreens.EditPost);
  };

  const handleShouldShowPostDetailModal = (): void => {
    setShouldShowPostDetailModal(!shouldShowPostDetailModal);
  };

  const onPostClick = (post: Post): void => {
    setSelectedPost(post);
    handleShouldShowPostDetailModal();
  };

  React.useEffect((): void => {
    getLocalPosts();
  }, [getLocalPosts]);

  return (
    <LazyNavigationHoc>
      <MyPosts
        posts={posts}
        isLoading={isLoading}
        selectedPost={selectedPost}
        shouldShowPostDetailModal={shouldShowPostDetailModal}
        deleteLocalPost={deleteLocalPost}
        goToEditPostScreen={goToEditPostScreen}
        onPostClick={onPostClick}
        handleShouldShowPostDetailModal={handleShouldShowPostDetailModal}
      />
    </LazyNavigationHoc>
  );
};

export default compose(withPostConsumer)(MyPostsContainer);
