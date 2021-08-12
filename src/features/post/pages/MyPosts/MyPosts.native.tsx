import React from 'react';

import Loading from '@/components/Loading/Loading.native';
import PostComponent from '@/features/post/components/Post/Post.container';
import {Post} from '@/features/post/modules/interfaces';

import Styled from './MyPosts.styles.native';

interface Props {
  posts: Post[];
  isLoading: boolean;
  deleteLocalPost: (postId: string) => Promise<void>;
}

const MyFiltersScreen = ({
  posts,
  isLoading,
  deleteLocalPost,
}: Props): React.ReactElement => {
  const renderNoPostsFound = (): React.ReactElement => (
    <Styled.NoPostsFound>
      <Styled.NoPostsFoundText>
        Você ainda não tem nenhum post!
      </Styled.NoPostsFoundText>
    </Styled.NoPostsFound>
  );

  const renderLoading = (): React.ReactElement => <Loading />;

  const renderPosts = (): React.ReactElement => (
    <Styled.ContentContainer showsVerticalScrollIndicator={false}>
      {posts.length === 0 && renderNoPostsFound()}

      {posts.length > 0 &&
        posts.map(
          (post: Post): React.ReactElement => (
            <PostComponent
              key={post.id?.toString()}
              post={post}
              onDeletePost={async (): Promise<void> =>
                deleteLocalPost(post.id as string)
              }
            />
          ),
        )}
    </Styled.ContentContainer>
  );

  if (isLoading) {
    return renderLoading();
  }

  return <Styled.Container>{renderPosts()}</Styled.Container>;
};

export default MyFiltersScreen;
