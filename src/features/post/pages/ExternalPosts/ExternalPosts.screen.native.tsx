import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

import defaultHeaderScreenOptions from '@/routes/defaultScreenOptions/defaultHeaderOptions';

import ExternalPostsContainer from './ExternalPosts.container';

export const externalPostsScreenOptions: StackNavigationOptions = {
  ...defaultHeaderScreenOptions,
  title: 'Posts Externos',
};

const ExternalPostsScreen = (): React.ReactElement => {
  return <ExternalPostsContainer />;
};

export default ExternalPostsScreen;
