import React from 'react';

import {StyleSheet, TextInput, TextInputProps, View} from 'react-native';
import {baseColorPalette} from '../../../assets/baseColors';
import {s, vs} from 'react-native-size-matters';

const SearchBar = ({...props}: TextInputProps) => {
  return (
    <View style={[styles.inputView, styles.searchBar]}>
      <TextInput
        style={styles.input}
        placeholderTextColor={baseColorPalette.grey.two}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: baseColorPalette.grey.one,
    paddingHorizontal: s(16),
    paddingVertical: vs(10),
    borderRadius: s(8),
    flexDirection: 'row',
    marginTop: vs(5),
  },
  errorStyle: {
    borderWidth: 1,
    borderColor: baseColorPalette.red.one,
  },
  input: {
    flex: 1,
    paddingVertical: 0,
    color: baseColorPalette.grey.three,
    fontFamily: 'Karla-Bold',
    fontSize: s(14),
  },

  searchBar: {
    backgroundColor: baseColorPalette.white,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.09,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default SearchBar;
