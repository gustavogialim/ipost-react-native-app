import React from 'react';
import {Alert} from 'react-native';

import LazyNavigationHoc from '@/utils/hocs/LazyNavigationHoc';
import {compose} from '@/helpers/functionHelper';
import {
  withPostConsumer,
  PostContext,
} from '@/features/post/providers/PostProvider';
import {Post, PostFormaValues} from '@/features/post/modules/interfaces';

import AddPost from './AddPost.native';

interface Props {
  postContext: PostContext;
}

const AddPostContainer = ({postContext}: Props): React.ReactElement => {
  const [isLoading, setIsLoading] = React.useState(false);

  const onSubmit = async (values: PostFormaValues): Promise<void> => {
    const {title, text, author} = values;

    const post: Post = {
      title,
      text,
      author,
      date: new Date(),
    };

    await savePost(post);
  };

  const savePost = async (post: Post): Promise<void> => {
    try {
      setIsLoading(true);

      await postContext.addPost(post);

      Alert.alert('Sucesso!', 'Seu Post foi adicionado com sucesso.');

      // Navigate to Home or List
    } catch {
      Alert.alert('Ops!', 'Houve algum problema ao adicionar seu Post.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LazyNavigationHoc>
      <AddPost onSubmit={onSubmit} isLoading={isLoading} />
    </LazyNavigationHoc>
  );
};

export default compose(withPostConsumer)(AddPostContainer);
