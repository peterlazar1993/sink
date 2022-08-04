import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Box } from './src/Animation';
import { Graphics } from './src/Graphic';
import { MyList } from './src/List';

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
