import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

import defaultHeaderScreenOptions from '@/routes/defaultScreenOptions/defaultHeaderOptions';

import AddPostContainer, {AddScreenNavigationProp} from './AddPost.container';

interface Props {
  navigation: AddScreenNavigationProp;
}

export const addPostScreenOptions: StackNavigationOptions = {
  ...defaultHeaderScreenOptions,
  title: 'Novo Post',
};

const AddPostScreen = ({navigation}: Props): React.ReactElement => {
  return <AddPostContainer navigation={navigation} />;
};

export default AddPostScreen;
