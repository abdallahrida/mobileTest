import {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface IAnimatedButtonView extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  disabled?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
  testID?: string;
}
