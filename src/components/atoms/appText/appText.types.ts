import {TextProps, TextStyle} from 'react-native';

export interface IAppText extends TextProps {
  children: React.ReactNode;
  color?: string;
  textAlign?: TextStyle['textAlign'];
  size?: TextStyle['fontSize'];
  underline?: boolean;
}
