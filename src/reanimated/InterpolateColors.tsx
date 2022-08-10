import { useState } from 'react';
import { Dimensions, Switch } from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const Colors = {
  dark: {
    background: '#2C3333',
    circle: '#395B64',
    text: '#A5C9CA',
  },
  light: {
    background: '#66BFBF',
    circle: '#EAF6F6',
    text: '#EAF6F6',
  },
};

const SWITCH_TRACK_COLOR = {
  true: 'rgba(256,0,256,0.2)',
  false: 'rgba(0,0,0,0.1)',
};

const SIZE = Dimensions.get('window').width * 0.7;

type Theme = 'light' | 'dark';

export const InterpolateColors = () => {
  const [theme, setTheme] = useState<Theme>('light');

  const progress = useDerivedValue(() => {
    return theme === 'dark' ? withTiming(1) : withTiming(0);
  }, [theme]);

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background]
    );
    return { backgroundColor };
  });

  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.circle]
    );
    return { backgroundColor };
  });

  const rTextStyle = useAnimatedStyle(() => {
    const color = interpolateColor(progress.value, [0, 1], [Colors.light.text, Colors.dark.text]);
    const scale = withSpring(interpolate(progress.value, [0, 0.5, 1], [1, 0.8, 1]));

    return { color, transform: [{ scale }] };
  });

  return (
    <Animated.View
      style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }, rStyle]}>
      <Animated.Text
        style={[
          {
            fontSize: 70,
            textTransform: 'uppercase',
            fontWeight: '700',
            letterSpacing: 14,
            marginBottom: 35,
          },
          rTextStyle,
        ]}>
        {theme}
      </Animated.Text>
      <Animated.View
        style={[
          {
            justifyContent: 'center',
            alignItems: 'center',
            width: SIZE,
            aspectRatio: 1,
            borderRadius: SIZE / 2,
            elevation: 8,
          },
          rCircleStyle,
        ]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={(toggled) => {
            setTheme(toggled ? 'dark' : 'light');
          }}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor="violet"
        />
      </Animated.View>
    </Animated.View>
  );
};
