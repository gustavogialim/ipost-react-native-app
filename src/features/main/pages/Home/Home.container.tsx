import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';

import AppScreens from '@/routes/appScreens';
import {HomeStackParamList} from '@/routes/types';
import LazyNavigationHoc from '@/utils/hocs/LazyNavigationHoc';

import HomeScreen from './Home.native';

export type HomeScreenNavigationProp = StackNavigationProp<
  HomeStackParamList,
  AppScreens.Home
>;
interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreenContainer = ({navigation}: Props): React.ReactElement => {
  const goToAddPostScreen = (): void => {
    navigation.navigate(AppScreens.AddPost);
  };

  const goToMyFiltersScreen = (): void => {
    navigation.navigate(AppScreens.MyPostsStack);
  };

  return (
    <LazyNavigationHoc>
      <HomeScreen
        goToAddPostScreen={goToAddPostScreen}
        goToMyFiltersScreen={goToMyFiltersScreen}
      />
    </LazyNavigationHoc>
  );
};

export default HomeScreenContainer;
