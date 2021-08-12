import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

import defaultHeaderScreenOptions from '@/routes/defaultScreenOptions/defaultHeaderOptions';

import MyPostsContainer, {
  MyPostsScreenNavigationProp,
} from './MyPosts.container';

interface Props {
  navigation: MyPostsScreenNavigationProp;
}

export const myPostsScreenOptions: StackNavigationOptions = {
  ...defaultHeaderScreenOptions,
  title: 'Meus Posts',
};

const MyPostsScreen = ({navigation}: Props): React.ReactElement => {
  return <MyPostsContainer navigation={navigation} />;
};

export default MyPostsScreen;
