import React from 'react';
import {View} from 'react-native';

import styles from './card.styles';
import {ICard} from './card.types';

const Card = ({children, extraStyles, hasError = false}: ICard) => {
  return (
    <View
      style={[styles.mainView, extraStyles, hasError && styles.errorCardStyle]}>
      {children}
    </View>
  );
};

export default Card;
