import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { Box } from './src/Animation';

export default function App() {
  return (
    <View style={styles.container}>
      <Box />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
