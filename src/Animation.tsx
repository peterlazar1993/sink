import { Button } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

export function Box() {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: offset.value * 255 }],
    };
  });

  return (
    <>
      <Animated.View
        style={[{ width: 100, aspectRatio: 1, backgroundColor: 'blue' }, animatedStyles]}
      />
      <Button onPress={() => (offset.value = withSpring(Math.random()))} title="Move" />
    </>
  );
}
