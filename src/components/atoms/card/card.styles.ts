import {StyleSheet} from 'react-native';
import {baseColorPalette} from '../../../assets/baseColors';

export default StyleSheet.create({
  mainView: {
    backgroundColor: baseColorPalette.white,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.09,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 3,
  },

  errorCardStyle: {
    borderColor: baseColorPalette.red.one,
    borderWidth: 1,
  },
});
