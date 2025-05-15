import {StyleSheet} from 'react-native';
import {s} from 'react-native-size-matters';
import {baseColorPalette} from '../../../assets/baseColors';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: baseColorPalette.white,
    padding: s(15),
    borderRadius: s(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    flexDirection: 'column',
  },
});
