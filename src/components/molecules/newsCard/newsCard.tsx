import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import moment from 'moment';

import Card from '../../atoms/card/card';
import {baseColorPalette} from '../../../assets/baseColors';
import AnimatedButtonView from '../../atoms/animatedButtonView/animatedButtonView';
import AppText from '../../atoms/appText/appText';
import Separator from '../../atoms/separator/separator';
import {INew} from '../../../features/homeScreen/homeScreen.types';
import {ms, mvs} from 'react-native-size-matters';

interface IProps {
  onPress: () => void;
  item: INew;
}

const NewsCard = ({item, onPress}: IProps) => {
  return (
    <AnimatedButtonView onPress={onPress}>
      <Card>
        <Image
          source={{uri: item.image}}
          style={styles.imageStyle}
          resizeMode="cover"
        />
        <View style={styles.rowContainer}>
          <AppText
            color={baseColorPalette.primaryDark}
            size={15}
            numberOfLines={2}>
            {item?.title}
          </AppText>
        </View>
      </Card>
    </AnimatedButtonView>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
  svgStyle: {
    alignSelf: 'center',
  },
  imageStyle: {
    height: mvs(272),
    width: '100%',
    borderTopLeftRadius: ms(10),
    borderTopRightRadius: ms(10),
  },
});

export default NewsCard;
