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

import EditPost from './EditPost.native';

export type EditScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  AppScreens.EditPost
>;

interface Props {
  postContext: PostContext;
  navigation: EditScreenNavigationProp;
}

const EditPostContainer = ({
  postContext,
  navigation,
}: Props): React.ReactElement => {
  const [isLoading, setIsLoading] = React.useState(false);
  const {selectedPostToEdit} = postContext;

  const onSubmit = async (values: PostFormaValues): Promise<void> => {
    const {title, text, author} = values;

    const post: Post = {
      id: selectedPostToEdit.id,
      title,
      text,
      author,
      date: selectedPostToEdit.date || new Date(),
    };

    await editPost(post);
  };

  const editPost = async (post: Post): Promise<void> => {
    try {
      setIsLoading(true);
      await postContext.editLocalPost(post);

      Alert.alert('Sucesso!', 'O Post foi altereado com sucesso.');

      navigation.navigate(AppScreens.Home);
    } catch (error) {
      Alert.alert(
        'Ops!',
        `Houve algum problema ao alterar seu Post.\nError: ${error.message}`,
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LazyNavigationHoc>
      <EditPost
        onSubmit={onSubmit}
        isLoading={isLoading}
        post={selectedPostToEdit}
      />
    </LazyNavigationHoc>
  );
};

export default compose(withPostConsumer)(EditPostContainer);
