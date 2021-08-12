import * as React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
  StackNavigationOptions,
} from '@react-navigation/stack';

import AppScreens from '@/routes/appScreens';
import {ExternalPostsStackParamList} from '@/routes/types';
import ExternalPostsScreen, {
  externalPostsScreenOptions,
} from '@/features/post/pages/ExternalPosts/ExternalPosts.screen.native';
import noHeaderOptions from '@/routes/defaultScreenOptions/noHeaderOptions';

const Stack = createStackNavigator<ExternalPostsStackParamList>();

export const externalPostsStackScreenOptions: StackNavigationOptions = {
  ...noHeaderOptions,
};

const ExternalPostsStack = (): React.ReactElement => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen
        name={AppScreens.ExternalPosts}
        component={ExternalPostsScreen}
        options={externalPostsScreenOptions}
      />
    </Stack.Navigator>
  );
};

export default React.memo(ExternalPostsStack);
