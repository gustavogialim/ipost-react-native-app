import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';

import AppScreens from '@/routes/appScreens';
import {HomeStackParamList} from '@/routes/types';
import HomeScreen, {
  homeScreenOptions,
} from '@/features/main/pages/Home/Home.screen.native';
import AddPostScreen, {
  addPostScreenOptions,
} from '@/features/post/pages/AddPost/AddPost.screen.native';
import MyPostsStack, {myPostsStackScreenOptions} from './MyPostsStack';

const Stack = createStackNavigator<HomeStackParamList>();

const HomeStack = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name={AppScreens.Home}
        component={HomeScreen}
        options={homeScreenOptions}
      />
      <Stack.Screen
        name={AppScreens.AddPost}
        component={AddPostScreen}
        options={addPostScreenOptions}
      />
      <Stack.Screen
        name={AppScreens.MyPostsStack}
        component={MyPostsStack}
        options={myPostsStackScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default React.memo(HomeStack);
