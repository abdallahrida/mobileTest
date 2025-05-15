import React from 'react';
import {Image, ImageSourcePropType, View} from 'react-native';

import styles from './noDataFound.styles';
import {EmptyImage} from '../../../assets/images/empty/index';
import {baseColorPalette} from '../../../assets/baseColors';
import AppText from '../../atoms/appText/appText';
import Separator from '../../atoms/separator/separator';

interface INoDataFound {
  title: string;
  subTitle?: string;
  emptyImageSource?: ImageSourcePropType;
}

const NoDataFound = (props: INoDataFound) => {
  return (
    <View style={styles.nothingFoundView}>
      <Image source={EmptyImage} style={styles.image} />

      <Separator marginTop={8} />

      <AppText
        textAlign="center"
        color={baseColorPalette.black.three}
        size={18}>
        {props.title}
      </AppText>

      {props.subTitle && (
        <AppText
          textAlign="center"
          color={baseColorPalette.black.five}
          size={14}>
          {props.subTitle}
        </AppText>
      )}
    </View>
  );
};

export default NoDataFound;
