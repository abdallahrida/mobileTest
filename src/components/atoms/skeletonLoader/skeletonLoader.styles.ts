import {StyleSheet} from 'react-native';
import {baseColorPalette} from '../../../assets/baseColors';

export default StyleSheet.create({
  mainView: {
    backgroundColor: baseColorPalette.lightGrayish,
    overflow: 'hidden',
  },
  bone: {
    width: 150,
    ...StyleSheet.absoluteFillObject,
  },
});
