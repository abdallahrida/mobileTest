import {Dimensions, Platform} from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const isIOS = Platform.OS === 'ios';

export const clamp = (value: number, clampValue: number) =>
  value < clampValue ? clampValue : value;
