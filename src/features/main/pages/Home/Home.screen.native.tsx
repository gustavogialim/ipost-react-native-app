import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

import noHeaderOptions from '@/routes/defaultScreenOptions/noHeaderOptions';

import HomeContainer, {HomeScreenNavigationProp} from './Home.container';

interface Props {
  navigation: HomeScreenNavigationProp;
}

export const homeScreenOptions: StackNavigationOptions = {
  ...noHeaderOptions,
  gestureEnabled: false,
};

const HomeScreen = ({navigation}: Props): React.ReactElement => {
  return <HomeContainer navigation={navigation} />;
};

export default HomeScreen;
