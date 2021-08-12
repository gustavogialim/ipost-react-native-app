import * as React from 'react';

import {Post} from '@/features/post/modules/interfaces';

import PostNative from './Post.native';

interface Props {
  post: Post;
  onDeletePost?: () => Promise<void>;
}

const PostContainer = ({post, onDeletePost}: Props): React.ReactElement => {
  const [shouldShowPostDetailModal, setShouldShowPostDetailModal] =
    React.useState(false);

  const handleShouldShowPostDetailModal = (): void => {
    setShouldShowPostDetailModal(!shouldShowPostDetailModal);
  };

  return (
    <PostNative
      post={post}
      shouldShowPostDetailModal={shouldShowPostDetailModal}
      handleShouldShowPostDetailModal={handleShouldShowPostDetailModal}
      onDeletePost={onDeletePost}
    />
  );
};

export default PostContainer;