import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

import defaultHeaderScreenOptions from '@/routes/defaultScreenOptions/defaultHeaderOptions';

import MyPostsContainer from './MyPosts.container';

export const myPostsScreenOptions: StackNavigationOptions = {
  ...defaultHeaderScreenOptions,
  title: 'Meus Posts',
};

const MyPostsScreen = (): React.ReactElement => {
  return <MyPostsContainer />;
};

export default MyPostsScreen;
