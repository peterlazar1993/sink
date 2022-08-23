import React from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useQuery } from 'react-query';

import { fetchLast5Stories } from '../hnService';
import { HNPostRow } from './HNPostListRow';

export const HNPostList = () => {
  const { isLoading, data, error } = useQuery(['hnQuery'], fetchLast5Stories);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 8,
      }}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <HNPostRow title={item.title} url={item.url} by={item.by} />
          )}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      )}
    </SafeAreaView>
  );
};

const ItemSeparatorComponent = () => {
  return <View style={{ height: 16 }} />;
};
