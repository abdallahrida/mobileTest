import {StyleSheet} from 'react-native';
import {s, vs} from 'react-native-size-matters';

const styles = StyleSheet.create({
  nothingFoundView: {
    alignItems: 'center',
  },
  image: {
    width: s(270),
    height: vs(270),
  },
  imageIcon: {
    width: s(30),
    height: s(30),
    resizeMode: 'contain',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: s(60),
    height: s(60),
    borderRadius: s(50),
    backgroundColor: '#F4F4F4',
  },
});

export default styles;
