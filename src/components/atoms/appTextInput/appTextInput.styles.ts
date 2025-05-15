import {StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';
import {baseColorPalette} from '../../../assets/baseColors';

export default StyleSheet.create({
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
