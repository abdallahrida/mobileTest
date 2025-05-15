import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const useSafeAreaCalculations = () => {
  const insets = useSafeAreaInsets();

  return {
    bottom: insets.bottom,
    top: insets.top,
  };
};
