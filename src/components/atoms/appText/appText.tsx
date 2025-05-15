import {Text, View} from 'react-native';
import React from 'react';
import {ms} from 'react-native-size-matters';

import {IAppText} from './appText.types';
import {baseColorPalette} from '../../../assets/baseColors';

const AppText = ({
  children,
  color = baseColorPalette.primary,
  textAlign = 'left',
  size = 16,
  underline = false,
  ...props
}: IAppText) => {
  return (
    <View>
      <Text
        {...props}
        style={{
          textAlign,
          color,
          fontSize: ms(size),
          textDecorationLine: underline ? 'underline' : 'none',
        }}>
        {children}
      </Text>
    </View>
  );
};

export default AppText;
