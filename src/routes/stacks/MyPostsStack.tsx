import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';

import AppScreens from '@/routes/appScreens';
import {MyPostsStackParamList} from '@/routes/types';
import MyPostsScreen, {
  myPostsScreenOptions,
} from '@/features/post/pages/MyPosts/MyPosts.screen.native';
import noHeaderOptions from '@/routes/defaultScreenOptions/noHeaderOptions';

const Stack = createStackNavigator<MyPostsStackParamList>();

export const myPostsStackScreenOptions: StackNavigationOptions = {
  ...noHeaderOptions,
};

const MyPostsStack = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name={AppScreens.MyPosts}
        component={MyPostsScreen}
        options={myPostsScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default React.memo(MyPostsStack);
