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
import {Post, PostFormaValues} from '@/features/post/modules/interfaces';

import AddPost from './AddPost.native';

export type AddScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  AppScreens.AddPost
>;

interface Props {
  postContext: PostContext;
  navigation: AddScreenNavigationProp;
}

const AddPostContainer = ({
  postContext,
  navigation,
}: Props): React.ReactElement => {
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
      await postContext.addLocalPost(post);

      Alert.alert('Sucesso!', 'Seu Post foi adicionado com sucesso.');

      navigation.navigate(AppScreens.Home);
    } catch (error) {
      Alert.alert(
        'Ops!',
        `Houve algum problema ao adicionar seu Post.\nError: ${error.message}`,
      );
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
