import React from 'react';
import {StackNavigationOptions} from '@react-navigation/stack';

import defaultHeaderScreenOptions from '@/routes/defaultScreenOptions/defaultHeaderOptions';

import EditPostContainer, {
  EditScreenNavigationProp,
} from './EditPost.container';

interface Props {
  navigation: EditScreenNavigationProp;
}

export const editPostScreenOptions: StackNavigationOptions = {
  ...defaultHeaderScreenOptions,
  title: 'Editar Post',
};

const EditPostScreen = ({navigation}: Props): React.ReactElement => {
  return <EditPostContainer navigation={navigation} />;
};

export default EditPostScreen;
