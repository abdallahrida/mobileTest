import {JSX} from 'react';
import {TextInput} from 'react-native';

export interface ITextInput {
  value: string;
  label?: string;
  RightIcon?: JSX.Element | null;
  nextRef?: React.RefObject<TextInput | null>;
  withSearch?: boolean;
  LeftIcon?: JSX.Element | null;
  withCardContainer?: boolean;
  withForgotPasswordButton?: boolean;
  onChangeText: (text: string) => {};
  placeholder: string;
}
