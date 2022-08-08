import { useEffect } from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const SIZE = 100;
const handleRotation = (progress: Animated.SharedValue<number>) => {
  'worklet';
  return `${2 * Math.PI * progress.value}rad`;
};

export function Box() {
  const progress = useSharedValue(1);
  const scale = useSharedValue(2);

  const reanimatedStyles = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      borderRadius: (progress.value * SIZE) / 2,
      transform: [{ scale: scale.value }, { rotate: handleRotation(progress) }],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withTiming(0.5), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  return (
    <Animated.View
      style={[{ width: SIZE, height: SIZE, backgroundColor: 'blue' }, reanimatedStyles]}
    />
  );
}
