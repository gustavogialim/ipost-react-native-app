import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AppScreens from '@/routes/appScreens';
import {RootStackParamList} from '@/routes/types';
import HomeStack from '@/routes/stacks/HomeStack';

const Stack = createStackNavigator<RootStackParamList>();

const AppRouter = (): React.ReactElement => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={AppScreens.HomeStack} component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
