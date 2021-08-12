import * as React from 'react';

import {Post} from '@/features/post/modules/interfaces';

import PostNative from './Post.native';

interface Props {
  post: Post;
  onPress?: () => Promise<void>;
  goToEditPostScreen?: () => void;
}

const PostContainer = ({
  post,
  onPress,
  goToEditPostScreen,
}: Props): React.ReactElement => {
  return (
    <PostNative
      post={post}
      onPress={onPress}
      goToEditPostScreen={goToEditPostScreen}
    />
  );
};

export default PostContainer;
