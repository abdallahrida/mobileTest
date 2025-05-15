import React, {forwardRef} from 'react';
import {TextInput, View} from 'react-native';

import {ITextInput} from './appTextInput.types';
import styles from './appTextInput.styles';
import {baseColorPalette} from '../../../assets/baseColors';

const AppTextInput = forwardRef<TextInput, ITextInput>(
  ({RightIcon, LeftIcon, ...props}, ref) => {
    return (
      <View style={[styles.inputView, styles.searchBar]}>
        {LeftIcon}
        <TextInput
          ref={ref}
          style={styles.input}
          placeholderTextColor={baseColorPalette.grey.two}
          {...props}
        />

        {RightIcon}
      </View>
    );
  },
);

AppTextInput.displayName = 'AppTextInput';

export default AppTextInput;
