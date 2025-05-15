import React, {useEffect, useRef} from 'react';
import {View, Animated, Easing} from 'react-native';
import {s, vs} from 'react-native-size-matters';

import styles from './skeletonLoader.styles';
import {ISkeletonLoader} from './skeletonLoader.types';
import {SCREEN_WIDTH} from '../../../utils/helpers';

const SkeletonLoader = ({
  width = s(SCREEN_WIDTH - 24),
  height = vs(20),
  isRounded = false,
  radius = 8,
}: ISkeletonLoader) => {
  const animatedValue = useRef(new Animated.Value(-150)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(animatedValue, {
        toValue: SCREEN_WIDTH - 24,
        duration: 1500,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [animatedValue]);

  const animatedStyles = {
    transform: [{translateX: animatedValue}],
    backgroundColor: animatedValue.interpolate({
      inputRange: [-150, SCREEN_WIDTH - 24],
      outputRange: ['rgba(255, 255, 255, 0.8)', '#ffffff'],
    }),
  };

  return (
    <View
      style={[
        styles.mainView,
        {width: s(width), height: vs(height), borderRadius: radius},
        isRounded && {borderRadius: width / 2},
      ]}>
      <Animated.View style={[styles.bone, animatedStyles]} />
    </View>
  );
};

export default SkeletonLoader;
