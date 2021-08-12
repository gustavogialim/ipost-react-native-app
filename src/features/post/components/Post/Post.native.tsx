import * as React from 'react';

import {formatDate} from '@/helpers/dateHelper';
import {Post} from '@/features/post/modules/interfaces';

import Styled from './Post.styles.native';

interface Props {
  post: Post;
  onPress?: () => Promise<void>;
  goToEditPostScreen?: () => void;
}

const PostNative = ({
  post,
  onPress,
  goToEditPostScreen,
}: Props): React.ReactElement => {
  return (
    <Styled.Container onPress={onPress}>
      <Styled.ContentContainer>
        <Styled.InfoContainer>
          <Styled.TitleText numberOfLines={1}>{post.title}</Styled.TitleText>
          {post.date && (
            <Styled.DateText>{formatDate(post.date)}</Styled.DateText>
          )}
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
    </Styled.Container>
  );
};

export default PostNative;
