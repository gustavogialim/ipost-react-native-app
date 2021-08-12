import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

import defaultHeaderScreenOptions from '@/routes/defaultScreenOptions/defaultHeaderOptions';

import AddPostContainer from './AddPost.container';

export const addPostScreenOptions: StackNavigationOptions = {
  ...defaultHeaderScreenOptions,
  title: 'Novo Post',
};

const AddPostScreen = (): React.ReactElement => {
  return <AddPostContainer />;
};

export default AddPostScreen;
