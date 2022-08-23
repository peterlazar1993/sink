import React from 'react';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';

interface HNStoryRowProps {
  title: string;
  url: string;
  by: string;
}

export const HNPostRow = (props: HNStoryRowProps) => {
  return (
    <Pressable onPress={() => Linking.openURL(props.url)}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.author}>{props.by}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  author: {
    fontSize: 16,
    color: 'rgb(125, 125, 125)',
  },
});
