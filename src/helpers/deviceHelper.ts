import {Dimensions} from 'react-native';

interface DeviceDimensions {
  fontScale: number;
  width: number;
  height: number;
  scale: number;
}

export const getDimensions = (): DeviceDimensions => Dimensions.get('window');
