import {View, ViewStyle, StyleProp} from 'react-native';
import React from 'react';
import {s, vs} from 'react-native-size-matters';

import {ISeparator} from './separator.types';
import {baseColorPalette} from '../../../assets/baseColors';

const Separator = ({
  marginBottom = 0,
  marginEnd = 0,
  marginStart = 0,
  marginTop = 0,
  horizentalLine = false,
}: ISeparator) => {
  const containerStyles: StyleProp<ViewStyle> = [
    {
      marginTop: vs(marginTop),
      marginBottom: vs(marginBottom),
      marginEnd: s(marginEnd),
      marginStart: s(marginStart),
    },
    horizentalLine && {
      height: 1,
      backgroundColor: baseColorPalette.grey.one,
    },
  ];
  return <View style={containerStyles} />;
};

export default Separator;
