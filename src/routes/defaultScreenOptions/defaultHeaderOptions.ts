import {StackNavigationOptions} from '@react-navigation/stack';

import COLORS from '@/utils/styles/colors';
import FONTS from '@/utils/styles/fonts';

const defaultHeaderScreenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: COLORS.BACKGROUND_COLOR,
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitleAlign: 'center',
  headerTintColor: COLORS.OFF_BLACK,
  headerTitleStyle: {
    fontFamily: FONTS.ROBOTO_BOLD,
    fontSize: 20,
  },
};

export default defaultHeaderScreenOptions;
