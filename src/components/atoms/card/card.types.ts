import {PropsWithChildren} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface ICard extends PropsWithChildren {
  extraStyles?: StyleProp<ViewStyle>;
  hasError?: boolean;
}
