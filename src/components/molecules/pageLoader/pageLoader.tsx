import React from 'react';
import {View} from 'react-native';

import styles from './pageLoader.styles';
import SkeletonLoader from '../../atoms/skeletonLoader/skeletonLoader';
import Separator from '../../atoms/separator/separator';

const PageLoader = ({quantity, height}: {quantity: number; height: number}) => {
  const views = [];
  for (let i = 0; i < quantity; i++) {
    views.push(
      <React.Fragment key={i}>
        <View style={styles.cardContainer}>
          <SkeletonLoader height={height} />
        </View>
        <Separator marginTop={16} />
      </React.Fragment>,
    );
  }

  return <>{views}</>;
};

export default PageLoader;
