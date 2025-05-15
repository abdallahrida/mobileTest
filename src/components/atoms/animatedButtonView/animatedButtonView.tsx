import React, {useState} from 'react';
import {Pressable, Animated, StyleProp, ViewStyle} from 'react-native';

import {IAnimatedButtonView} from './animatedButtonView.types';

const AnimatedButtonView = ({
  style,
  onPress,
  children,
  containerStyle,
  disabled = false,
  testID,
}: IAnimatedButtonView) => {
  const [scale] = useState(new Animated.Value(1));

  const scaleDown = () => {
    Animated.timing(scale, {
      toValue: 0.95,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const scaleUp = () => {
    Animated.timing(scale, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const animatedStyle: Animated.WithAnimatedValue<StyleProp<ViewStyle>> = {
    transform: [{scale}],
  };

  return (
    <Pressable
      style={containerStyle}
      disabled={disabled}
      onPress={onPress}
      onPressIn={scaleDown}
      onPressOut={scaleUp}
      testID={testID}>
      <Animated.View style={[style, animatedStyle]}>{children}</Animated.View>
    </Pressable>
  );
};

export default AnimatedButtonView;
